SELECT 
    rp2016.product_name,
    rp2016.total_quantity_2016,
    rp2017.total_quantity_2017
FROM 
    (
        SELECT 
            p.product_name,
            SUM(od.quantity) AS total_quantity_2016,
            ROW_NUMBER() OVER (ORDER BY SUM(od.quantity) DESC) AS rank_2016
        FROM 
            products p
            JOIN order_details od ON p.product_id = od.product_id
            JOIN orders o ON od.order_id = o.order_id
        WHERE 
            YEAR(o.order_date) = 2016
        GROUP BY 
            p.product_name
    ) rp2016
    JOIN (
        SELECT 
            p.product_name,
            SUM(od.quantity) AS total_quantity_2017,
            ROW_NUMBER() OVER (ORDER BY SUM(od.quantity) DESC) AS rank_2017
        FROM 
            products p
            JOIN order_details od ON p.product_id = od.product_id
            JOIN orders o ON od.order_id = o.order_id
        WHERE 
            YEAR(o.order_date) = 2017
        GROUP BY 
            p.product_name
    ) rp2017 ON rp2016.product_name = rp2017.product_name
WHERE 
    rp2016.rank_2016 <= 5
    AND rp2017.rank_2017 <= 5;

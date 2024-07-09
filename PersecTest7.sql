SELECT 
    YEAR(o.order_date) AS order_year,
    ROUND(SUM(od.quantity * p.unit_price * (1 - od.discount)), 2) AS total_sales
FROM 
    orders o
    JOIN order_details od ON o.order_id = od.order_id
    JOIN products p ON od.product_id = p.product_id
WHERE 
    o.ship_region = 'Western Europe'
GROUP BY 
    YEAR(o.order_date)
ORDER BY 
    order_year;
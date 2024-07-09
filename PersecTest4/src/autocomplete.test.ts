import { autocomplete } from './autocomplete';

describe('autocomplete', () => {
    test('แสดงผลลัพธ์ที่ถูกต้องตามคำค้นหาและตรงตาม maxResult', () => {
        const items = ["Mother", "Think", "Worthy", "Apple", "Android"];
        const search = "th";
        const maxResult = 2;
        const result = autocomplete(search, items, maxResult);
        console.log("Test case 1:", result);
        expect(result).toEqual(["Think", "Mother"]);
    });

    test('ส่งค่าว่างเมื่อไม่พบผลลัพธ์', () => {
        const items = ["Apple", "Banana", "Cherry"];
        const search = "xyz";
        const maxResult = 2;
        const result = autocomplete(search, items, maxResult);
        console.log("Test case 2:", result);
        expect(result).toEqual([]);
    });

    test('แสดงผลลัพธ์เท่าที่มี ถ้า maxResult มากกว่าจำนวนรายการทั้งหมด', () => {
        const items = ["Mother", "Think", "Worthy"];
        const search = "th";
        const maxResult = 5;
        const result = autocomplete(search, items, maxResult);
        console.log("Test case 3:", result);
        expect(result).toEqual(["Think", "Mother", "Worthy"]);
    });

    test('ไม่คำนึงถึงขนาดตัวพิมพ์ 1', () => {
        const items = ["mother", "THINK", "Worthy"];
        const search = "Th";
        const maxResult = 3;
        const result = autocomplete(search, items, maxResult);
        console.log("Test case 4:", result);
        expect(result).toEqual(["THINK", "mother", "Worthy"]);
    });

    test('ไม่คำนึงถึงขนาดตัวพิมพ์ 2', () => {
        const items = ["mother", "THINK", "Worthy", "thank"];
        const search = "th";
        const maxResult = 4;
        const result = autocomplete(search, items, maxResult);
        console.log("Test case 5:", result);
        expect(result).toEqual(["THINK", "thank", "mother", "Worthy"]);
    });
    
    test('ค้นหาที่ส่วนท้ายของคำ', () => {
        const items = ["Androidth", "another", "inth", "alth"];
        const search = "th";
        const maxResult = 4;
        const result = autocomplete(search, items, maxResult);
        console.log("Test case 6:", result);
        expect(result).toEqual(["Androidth", "inth", "alth", "another"]);
    });

});

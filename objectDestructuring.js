const address = {
    street: '',
    city: '',
    zipCode: ''
}

// const street = address.street;
// const city = address.city;
// const zipCode = address.zipCode;

// Destructuring
const {street, city, zipCode} = address; // extract properties from an object and assign them to variables with the same name.
const {street: st, city: ct, zipCode: zc} = address; // 重命名变量

// 过程：
// 	1.	address.street 的值赋给变量 st
// 	2.	address.city 的值赋给变量 ct
// 	3.	address.zipCode 的值赋给变量 zc
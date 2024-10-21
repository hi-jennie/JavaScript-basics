// for loop
for (let i = 0; i < 5; i++) {
    console.log(i)
    console.log('hello JavaScript!');
}

// while loop
let i = 0;
while(i<5){
    console.log(i);
    i++;
}

// do-while loop
let j = 0;
do {
    console.log(j);
    j++;
} while (j<5);

// for-in loop （遍历对象的键（属性名）。）
const person = { name: "Alice", age: 25 };

for (let key in person) {
  console.log(key + ": " + person[key]);
}

const numbers1 = [10, 20, 30];

for (let index in numbers) {
  console.log(index);         // 打印索引
  console.log(numbers[index]); // 打印元素
}

// for-of loop（遍历可迭代对象的值（如数组、字符串、Map、Set 等）。）
const numbers2 = [1, 2, 3]; // iterable

for (let num of numbers) {
  console.log(num);
}
// Завдання 2
// Напишіть функцію arrToString(arr), яка приймає масив arr з чисел і повертає вже масив з стрічками:
// const arr1 = arrToString([1,2,3]) – запише в змінну масив [‘1’,‘2’,‘3’]. 
// const arr2 = arrToString([10,200,3333]) – запише в змінну масив [‘10’,‘200’,‘3333’]. 
// ------------------------------------------------------------------------------------------


const arrToString = arr => arr.map(n => n.toString());
let arr1 = arrToString([1,2,3]);
let arr2 = arrToString([10,20,3333]);

console.log(arr1);
console.log(arr2);


// Завдання 3
// Напишіть функцію getLength(arr), яка приймає масив arr з стрічок і повертає новий масив з довжиною елементів тих стрічок:
// const arr1 = getLength([‘Ivan’,‘Pavlo’,‘Ira’]) – запише в змінну масив [4,5,3]. 
// const arr2 = getLength([‘Oleksiy’,‘Andriana’]) – запише в змінну масив [7,8]. 
// ------------------------------------------------------------------------------------------

function getLength(arr){
let arr2 = []
for(let i = 0; i < arr.length;i++){
    arr2.push(arr[i].length)
}
return arr2
}
let res = getLength(['Oleksiy','Andriana'])
let res1 = getLength(['Ivan','Pavlo','Ira'])
console.log(res);
console.log(res1);
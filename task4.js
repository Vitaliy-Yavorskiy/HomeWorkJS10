// Завдання 4
// Напишіть функцію removeDuplicates(arr), яка приймає масив arr з стрічок і повертає новий масив де виключені елементи, що повторюються з масиву arr(ігнорувати чутливість до регістру):
// const arr1 = removeDuplicates([‘html’,‘css’,‘html’,‘js’]) – запише в змінну масив [‘html’,‘css’,‘js’]. 
// const arr2 = removeDuplicates([‘html’,‘css’,‘js’,‘html’,‘js’,‘python’,‘js’,‘scss’]) – запише в змінну масив [‘html’,‘css’,‘js’,‘python’,‘scss’]). 


const arr1 = removeDuplicates(['html','css','html','js']);
const arr2 = removeDuplicates(['html','css','js','html','js','python','js','scss']);

function removeDuplicates(arr2) {
    return arr2.filter((value,index) => arr2.indexOf(value) === index)
}
console.log(removeDuplicates(arr1));
console.log(removeDuplicates(arr2));
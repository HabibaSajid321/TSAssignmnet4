"use strict";
// Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
// function toCalculateSum(){
// let sum : number = 0;
// for( let i = 0; i <=20 ; i++){
//     let evenNumber: number = 2*i;
//     sum +=evenNumber;
// }
// console.log(sum); 
// }
// toCalculateSum()
// console.log(toCalculateSum());
//  2nd 
// let sum1 : number = 0;
// for(let n=0; n <= 7; n++ ){
//     let num:number = 2*n;
//   sum1 += num
// }
// console.log(sum1);
// question 2
// Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
// let myArray:number[] = [2,1,4,3,5,6,7];
// let evenArray:number[] = []
// for(let i = 0; i <myArray.length; i++){
// if(myArray[i] %2 ==0){
//   evenArray.push(myArray[i]);
// }
// } 
// console.log("this is the array of even numbers", evenArray);
// Question 3
// Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
// let newArray:number[] = [9,2,12,16,8,7,6,5,3,11];           
// let oddArray:number[] = []
// for(let a = 0; a<newArray.length; a++){
//   if(newArray[a]%2 !=0){
//     oddArray.push(newArray[a]);
//   }
// }
// console.log("this is the array of odd numbers", oddArray);
// Question 4 
//  Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
// function calculateRadius(radius:number):number{
//   let area = 3.1416 * radius*radius;
//   return area;
// }
// let areaOfRadius:number = calculateRadius(2);
// console.log("the area of circle is", areaOfRadius);
// question 5
// Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
let gradesArr = [55, 78, 79, 60, 43, 44, 22, 30, 90, 95, 54, 67];
for (let i = 0; i < gradesArr.length; i++) {
    if (gradesArr[i] < 50) {
        gradesArr.splice(i, 1);
        i--;
    }
}
console.log(gradesArr);
// Question 6
//  - Write a program that uses a function to find the largest element in an array of numbers.
function toFindlargestNum(array) {
    let largestNum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > largestNum) {
            largestNum = array[i];
        }
    }
    return largestNum;
}
let arr = [3, 4, 5, 6, 7, 89];
console.log(toFindlargestNum(arr));

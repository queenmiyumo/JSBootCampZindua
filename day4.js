//Challenge: GroupBy
//Write a function called groupBy that takes two parameters: an array of objects and a string that represents a property name. The function should group the objects in the array by the value of the specified property, and return an object where each key is the distinct value of the specified property, and the value is an array of objects that have that property value.

function groupBy(arr, str){
    let groupedInfo = {}
    for(let i = 0; i<arr.length; i++) {
        if (arr[i][str] in groupedInfo){
            groupedInfo[arr[i][str]].push(arr[i])
        } else{
            groupedInfo[arr[i][str]] =[arr[i]]
        }
    }
    console.log(groupedInfo)
}
let people = [
    { name: 'Alice', age: '25', city:'New York'},
    { name: 'Bob', age: '30', city: 'Chicago' },
    { name: 'Charlie', age: '35', city: 'New York' },
    { name: 'Dave', age: '40', city: 'Chicago' }

]
groupBy(people, 'city')
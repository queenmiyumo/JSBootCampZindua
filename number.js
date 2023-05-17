let num1 = prompt('Enter any number')
 let sum=0;
  for(let number= 1; number<=num1; number++){
    if(number%3 === 0 || number%5 === 0){
        sum+= number
    }
  }
  console.log(sum)
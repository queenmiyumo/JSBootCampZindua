function fibonacci(num1) {
   let circle = (0,1);
    
for(let i = 2; i <= num1; i++) {
circle[i] = circle[i-1] + circle[i-2]
}
return circle;
    }


console.log(fibonacci(5));
console.log(fibonacci(10));


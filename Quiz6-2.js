const numbers = [1, 2, 3, 4, 5];
const newnumbers = numbers.reduce((accumulator,num)=>
{
return accumulator+num;
})
console.log(newnumbers);
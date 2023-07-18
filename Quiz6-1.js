const strings = ["apple","banana","kiwi","watermelon","grapefruit"];
const newstrings = strings.filter((num) =>
{
    return num.length>5;
})
console.log(newstrings);
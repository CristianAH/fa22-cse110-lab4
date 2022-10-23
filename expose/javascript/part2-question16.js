
/*
* Given the above Object, write a for...in loop that will iterate through it and 
* print out the value of the property if the property starts with the letter r, or 
* if the value of that property is an odd number. 
*/

let statistics= 
{
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2 
};
// loops through statistics using the iterator it
for(var it in statistics)
{
    // determines whether current element is odd or starts with 'r'
    if(statistics[it] % 2 == 1 || it[0] === 'r')
    {
        console.log(it);
    }
}


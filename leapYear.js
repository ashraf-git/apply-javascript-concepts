// const year = 3596;
// const remainder = year % 4;
// if(remainder == 0){
//     console.log('Your year is a leap year');
// }
// else{
//     console.log('your year is not a leap year');
// }

function leapYear(year){
    const remainder = year % 4;
    if(remainder == 0){
        return true;
    }
    else{
        return false;
    }
}
const result = leapYear(3496 );
console.log(result);

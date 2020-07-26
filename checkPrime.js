var n = 25;

// for(i = 2; i < n ; i++){
//     console.log( i, n % i);
//     if(n % i == 0){
//         console.log('its not a prime number');
//         break;
//     }
// }

function isPrime(n){
    for(i = 2; i < n ; i++){
        // console.log( i, n % i);
        if(n % i == 0){
            return 'its not a prime number';
        }
    }
    return 'Your Number is a Prime Number';
}
var result = isPrime(127);
console.log(result);
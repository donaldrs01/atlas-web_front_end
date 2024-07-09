function countPrimeNumbers() {
    function checkPrime(num) {
        if (num <= 1 ) return false;
        for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
            if (num % i === 0) return false; // Only prime if not divisible by any other number than 1
        }
        return true; // Return prime numbers
        }

        const prime_array = [];
        for (let num =2; num <= 100; num++) {
            if (checkPrime(num)) {
                prime_array.push(num); // Run prime function -> push primes into array
            }
        }

        return prime_array;

}

const start_time = performance.now();
// Execute function 100 times
for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
}
const end_time = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${end_time - start_time} milliseconds`);
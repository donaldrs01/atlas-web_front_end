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


// Use performance API to measure time performed on function operation
const start_time = performance.now();
const primeNumbers = countPrimeNumbers();
const end_time = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${end_time - start_time} milliseconds.`);
// Print prime number array for good measure
console.log(`${primeNumbers}`);


let number = 0;
while (true) {
    let n = prompt("Enter a positive integer: ");
    if (n > 0 && n % 1 == 0) {
        showPrimes(n);
        break;
    }
}

function showPrimes(n) {
    let primes = [];
    for (let i = 2; i < n; i++){
        if (!isPrime(i)) continue;
        primes.push(i);
    }
    alert("for n = " + n + ", prime number are " + primes.join(","));
}

function isPrime(n) {
    for (let i = 2; i < n; i++){
        if (n % i == 0) return false;
    }
    return true;
}
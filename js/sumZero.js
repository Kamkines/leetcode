function sumZero(n) {
    if (n <= 0) return []; 
    
    let result = new Array(n);
    
    for (let i = 0; i < Math.floor(n / 2); i++) {
        result[i] = i + 1;
        result[n - 1 - i] = -(i + 1);
    }
    
    if (n % 2 != 0) {
        result[Math.floor(n / 2)] = 0;
    }
    
    console.log(result);
}

// example

sumZero(1)
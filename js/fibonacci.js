function fibonacci(num, length) {
     for (let i = 0; i < length; i++) {
          num.push(num[i++] + num[i--]);
     }
     console.log(num);
}

//example

fibonacci([0, 1], 5);

var numberOfMatches = function (n) {
    let matches = 0;

    while (n > 1) {
        if (n % 2 == 0) {
            matches += n / 2;
            console.log('matches odd: ', matches)

            n = n / 2;
            console.log('teams even: ', n);
        }
        else {
            matches += (n - 1) / 2;
            console.log('matches odd: ', matches)

            n = (n - 1) / 2 + 1;
            console.log('teams odd: ', n);
        }
    }

    console.log(matches)
};

// example

numberOfMatches(14)
var createCounter = function (n) {
     return () => n++;
};

// Example
//n = 0;
//['call','call','call'];
//return в таком случае действует как возврат значения после выполнения функции, а call запускает его еще раз!

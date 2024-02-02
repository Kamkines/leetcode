var createCounter = function (init) {
     let counter = init;
     for (let i = 0; i < calls.length; i++) {
          switch (calls[i]) {
               case "increment":
                    counter++;
                    break;
               case "reset":
                    counter = init;
                    break;
               case "decrement":
                    counter--;
                    break;
          }
          return counter;
     }
};

//Example the data comes directly
calls = ["increment", "increment", "decrement", "reset", "reset"];
let init = 0;
createCounter(init);

// Example the data comes from the system
var createCounter = function (init) {
     let counter = init;
     return {
          increment: () => ++counter,
          decrement: () => --counter,
          reset: () => (counter = init),
     };
};

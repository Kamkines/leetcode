var interpret = function (command) {
     return command.replaceAll("()", "o").replaceAll("(al)", "al");
};

// example
let command = "(al)G(al)()()G";
interpret(command);

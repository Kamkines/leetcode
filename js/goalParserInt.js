var interpret = function (command) {
     return command.replaceAll("()", "o").replaceAll("(al)", "al");
};

// example
let command = "G()()(al)";
interpret(command);

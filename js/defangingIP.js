var defangIPaddr = function (address) {
     console.log(address.replaceAll(".", "[.]"));
};

//еще можно сделать так return address.split('.').join('[.]');

// example

defangIPaddr("1.1.1.1");

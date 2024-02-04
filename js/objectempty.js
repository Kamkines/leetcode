var isEmpty = function(obj) {
    return Object.entries(obj).length === 0 ? true : false
};

// example
// obj = {"x": 5, "y": 42}
// obj = {};
obj = [null, false, 0];
isEmpty(obj)
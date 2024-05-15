var rangeSumBST = function(root, low, high) {
    let rootToArray = [];
    let sum = 0;

    const traversal = function(node) {
        if (node) {
            traversal(node.left);
            rootToArray.push(node.val);
            traversal(node.right);
        }
    };

    traversal(root);

    for (let i = 0; i < rootToArray.length; i++) {
        if (rootToArray[i] >= low && rootToArray[i] <= high) {
            sum += rootToArray[i];
        }
    }

    console.log(sum);
};

// example
rangeSumBST([10,5,15,3,7,null,18],7,15)
var checkTree = function(root) {
    return root.val === root.left.val + root.right.val;
};

// example
checkTree([10,4,6])
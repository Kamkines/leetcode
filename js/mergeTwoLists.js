// var mergeTwoLists = function(list1, list2) {
//     let newArr = [...list1,...list2];
//     console.log(newArr.sort((a,b)=> a-b));
// };

function mergeTwoLists (list1, list2) { 
    if (!list1 || !list2) return list1 || list2

    let newArr
 
    if (list1.val < list2.val) { 
        newArr = list1 
        newArr.next = mergeTwoLists(list1.next, list2)
    } else { 
        newArr = list2
        newArr.next = mergeTwoLists(list1, list2.next)  
    }

    console.log(newArr)
}

// example
mergeTwoLists(list1 = [1,2,4], list2 = [1,3,4])
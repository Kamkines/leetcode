var reverseList = function(head) {
    let prev = null;
    let current = head;
    
    while (current) {
        let next = current.next; // сохраняем следующую значение
        current.next = prev; //разворачиваем
        prev = current; // смещаем prev на текущее значение
        current = next; // переходим в следующее значение
    }

    console.log(prev);
};

// example

reverseList([1,2,3,4,5])
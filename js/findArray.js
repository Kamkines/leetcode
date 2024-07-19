var findArray = function (pref) {
    let newArr = [];
    if (pref.length == 0) {
        console.log([])
        return []
    }

    newArr.push(pref[0])

    for (let i = 1; pref.length > i; i++) {
        newArr.push(pref[i] ^ pref[i-1]);         // Каждый следующий элемент newArr равен текущему элементу pref XOR предыдущему элементу pref

    }

    console.log(newArr)
};



// example
findArray(pref = [5, 2, 0, 3, 1])
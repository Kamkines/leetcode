var splitWordsBySeparator = function(words, separator) {
    let newArr = words.map(item => {
        return item.split(separator)
    });
    console.log(newArr.flat().filter(elem =>{
        return elem != null && elem != ''
    }))
};

// var splitWordsBySeparator = function(words, separator) {
//     console.log(words.join(separator).split(separator).filter(value=>value!=''))
// };
// join объединяет элементы по separator-у
// дальше мы по сепаратуру делиим строку на массив и фильтруем, убирая пустые значения

// example

splitWordsBySeparator(words = ["one.two.three","four.five","six"], separator = ".")
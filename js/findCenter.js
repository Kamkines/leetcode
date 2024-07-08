var findCenter = function(edges) {
    const combinArr = edges.flat();
    const seen = new Set(); // 
    const centerItem = new Set();
    combinArr.forEach(element => {
        if (seen.has(element)) { // проверка если в Set
            centerItem.add(element); // если есть, добавляем в CenterItem
        } else {
            seen.add(element); //если нет, добавляем seen 
        }
    });

    return Array.from(centerItem)[0];
};

// example
findCenter([[1,2],[2,3],[4,2]])
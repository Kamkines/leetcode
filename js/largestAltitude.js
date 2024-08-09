var largestAltitude = function(gain) {
    let altutudeArr = [0];
    for (let i = 0; gain.length > i; i++){
        console.log('altutudeArr: ', altutudeArr[i], 'gain: ', gain[i])
        altutudeArr.push(altutudeArr[i] + gain[i])
    }
    console.log(Math.max(...altutudeArr))
};

// пересборка двух переменных с указанием текущего значения и максимальной установленной высоты
// var largestAltitude = function(gain) {
//     let maxAlt = 0;
//     let currentAlt = 0;

//     for (let i = 0; i < gain.length; i++) {
//         currentAlt += gain[i];

//         maxAlt = Math.max(currentAlt, maxAlt);
//     }

//     return maxAlt;
// };

// example

largestAltitude([-5,1,5,0,-7])
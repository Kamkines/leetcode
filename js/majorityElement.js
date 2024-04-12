var majorityElement = function(nums) {
    let counts = {}; // Создаем объект для подсчета количества повторений каждого значения

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        counts[num] = (counts[num] || 0) + 1; // Если значение уже есть в объекте counts, увеличиваем счетчик на 1. Если значения нет, устанавливаем счетчик равным 1
    }

    let maxCount = 0; 
    let mostFrequentValue;

    for (let num in counts) {
        if (counts[num] > maxCount) {
            maxCount = counts[num];
            mostFrequentValue = num;
        }
    }

    console.log(mostFrequentValue)
};

// example

majorityElement(nums = [3,2,3])
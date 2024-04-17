var twoOutOfThree = function(nums1, nums2, nums3) {
    const  arrayNew= []
    const arrayTemp = new Set ([...nums1,...nums2,...nums3]) // устанавливаем ТОЛЬКО уникальные значения из 3 массивов, чтобы отсечь повторы

    arrayTemp.forEach((val)=>{ //проходимся по 3 значением и проверяем если они в 3 массивах
        if(nums1.includes(val) && nums2.includes(val) || nums1.includes(val) 
        && nums3.includes(val) || nums2.includes(val) && nums3.includes(val)){
            arrayNew.push(val)
        }
    })
    
    return arrayNew
    
};

// example

twoOutOfThree(nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3])
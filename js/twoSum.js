var twoSum = function (nums, target) {
     const numObject = new Map();
     for (let i = 0; i < nums.length; i++) {
          const num = target - nums[i];
          // has указывает если ли элемент num в объекте numObject
          if (numObject.has(num)) {
               // get получает из объекта значение по ключу, тут он num
               console.log([numObject.get(num), i]);
          }
          // устанавливает значение и ключ в объекте
          numObject.set(nums[i], i);
     }
     return [];
};

// example
twoSum([3, 2, 3], 6);

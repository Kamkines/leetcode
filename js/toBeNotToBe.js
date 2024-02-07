var expect = function (val) {
     return {
          toBe: (val2) => {
               if (val !== val2) throw new Error("Not Equal");
               else return true;
          },
          notToBe: (val2) => {
               if (val === val2) throw new Error("Equal");
               else return true;
          },
     };
};

//val является первым параметром, основным, параметром вызова функций, а tobe/nottobe и его параметр является вторым параметром, который вызывается из expect
// throw является исключением для условия if

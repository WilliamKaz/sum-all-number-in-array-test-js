function sumItems(array) {
  let num = 0;
  array.forEach((item) => {

      if (Array.isArray(item)) {
      // console.log(sumItems(item))
      // console.log('inner');
      return num += sumItems(item);
    } else {
      // console.log(item);
       // console.log('one pass');
       // console.log('outer');
       // console.log(num + item);
       num += item;
    }
  })
  // result
return num;
}

// console.log(sumItems([[[3,4]],5,6,7]))
// console.log(sumItems([1, 2, 3, 4, 5]));
module.exports = sumItems;
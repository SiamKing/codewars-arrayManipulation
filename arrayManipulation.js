function arrayManip(array){
  let arr = array.slice();
  let placeholder = [];
  let newArr = [];

  array.forEach(n => {
    arr.shift();
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > n) {
        placeholder.push(arr[i]);
      }
    }
    placeholder.length > 0 ? newArr.push(placeholder.sort((a, b) => a - b)[0]) : newArr.push(-1);
    placeholder = [];
  })
  return newArr;

}

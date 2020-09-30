//SUM ALL IN ARRAY

const sumAllInArray = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = parseInt(arr[i]);
    if (!isNaN(num)) {
      sum += num;
    }
  }
  return sum;
}

console.log(sumAllInArray(["-1", "a", 4, "-32", 8, "94"]))

module.exports = {
  sumAllInArray
}

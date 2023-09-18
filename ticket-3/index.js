function countNumberOfNinesInNumber(number) {
  let count = 0;
  number = number.toString();

  for (let i = 0; i < number.length; i++) {
    const digit = number[i];
    if ( "9" === digit) {
      count+=1;
  
    }

  }

  console.log(count)

}
countNumberOfNinesInNumber(989898)
console.log(count)
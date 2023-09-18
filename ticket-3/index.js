function countNumberOfNinesInNumber(number) {
  let count = 0;
  number = number.toString();
<<<<<<< HEAD
=======

>>>>>>> dc19c54884187b89f4c44d305f7a846dd1a34abb
  for (let i = 0; i < number.length; i++) {
    const digit = number[i];
    if ( "9" === digit) {
      count+=1;
  
    }

  }

<<<<<<< HEAD
  console.log(count);
}

countNumberOfNinesInNumber(9999);
=======
  console.log(count)

}
countNumberOfNinesInNumber(989898)
console.log(count)
>>>>>>> dc19c54884187b89f4c44d305f7a846dd1a34abb

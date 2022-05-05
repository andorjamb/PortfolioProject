let a = 994837612;
//let a_ans = digital_root(a);
console.log("returned value: ", digital_root(a));
console.log("\n");

//---------------------------------------------

function digital_root(n) {
  let n_array = new Array();
  let n_sum = 0;

  //stringify input so that digits can be separated
  let n_string = n.toString();
  console.log("stringified number: " + n_string);

  //use this to make an array of integers from the string:
  for (var i = 0; i < n_string.length; i++) {
    var i_num = parseInt(n_string[i]);
    n_array.push(i_num);
  }
  console.log("array of integers: " + n_array);

  //add up each value in the array, using a for loop
  for (var j = 0; j < n_array.length; j++) {
    n_sum = n_sum + n_array[j];
  }
  console.log("sum of the digits: " + n_sum);

  //update input for recursive function:
  if (n_sum > 9) {
    console.log("eep");
    n_sum = digital_root(n_sum);
    return n_sum;
  } else {
    return n_sum;
  }
}

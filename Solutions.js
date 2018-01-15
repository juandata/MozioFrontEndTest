
/*Question 1: Write a function that repeats the String with the following output: */

String.prototype.repeatify = function(n) {
  console.log(this.repeat(n));
  return this.repeat(n);
};

"Mozio".repeatify(3);

/*Question 2: Return the file extension or "false" if no extension. Please explain how would you implement a unit test for this method. What would you test?
*/
function getFileExtension(file){
  var res = file.indexOf(".") === -1 ?  false :  file.split(".").pop();
  return res;
}

console.log(getFileExtension("mozio.png"));

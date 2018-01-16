
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
/*Unit Test: I test whether method("mozio.png")  equals  "png", if this is not the case then I return "The Method does not 
return the extension", you can change the two  dots (".") in line 14 to space or something different to test the case. 
**I use Jest for testing my React apps. 
*/
var unitTest = {};
unitTest.checkInput = function(method){
  if(method("mozio.png") === "png"){
    return "Method working as expected";
    }
    else {
      return "The Method does not return the extension";
    }
  };
console.log(unitTest.checkInput(getFileExtension));

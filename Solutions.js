
/*Question 1: Write a function that repeats the String with the following output: */

String.prototype.repeatify = function(n) {
  console.log(this.repeat(n));
  return this.repeat(n);
};

"Mozio".repeatify(3);

/*Question 2: Return the file extension or "false" if no extension. Please explain how would you implement a unit test for this
method. What would you test?
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

/*Question 3: Write a simple validation script for a simple form

 * - If the required fields are not filled out, do not submit the form

 * - If the email is invalid, do not submit the form

 * - To validate the email, please call the validateEmail function

 * - The form should be able to have more fields added to it and 

     still work, without changing the JavaScript

   - The form doesn't need to post to a specific URL but please comment

     inside the code to demonstrate where this would happen
     */
function validateEmail(){
    var str = document.getElementById("submit").value;
    var regexp = /[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*/;
   if(regexp.test(str) === false){
      alert("Not a valid e-mail address");
     return false;
      }
   /* Please check the form in Codepen: https://codepen.io/juandata/pen/NXLqBE/
    in this case I use codepen to show the form values, but I can also use the 
   attribute action to specify a page where the values will be received. */
   }

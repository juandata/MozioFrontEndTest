
/*Question 1: Write a function that repeats the String with the following output: */

String.prototype.repeatify = function(n) {
  console.log(this.repeat(n));
  return this.repeat(n);
};

"Mozio".repeatify(3);

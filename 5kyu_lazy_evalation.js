/*
Lazy evaluation is an evaluation strategy which delays the evaluation of an expression until its value is needed.

function Lazy() has two methods:

  add(fn[, arg1, arg2, ...]): adds the fn function to the lazy chain evaluation.
   This function could receive optional arguments.
  invoke(target): performs the evaluation chain over the target array.

*/

function max() {
    return Math.max.apply(null, arguments);
}

function filterNumbers() {
  return  Array.prototype.filter.call(arguments, function(value) {
    return isNumeric(value);
  });
}

  function isNumeric(n) {
    return !isNaN(n) && Number(n) === n;
  }

  function filterRange(min, max) {
  var args = Array.prototype.slice.call(arguments, 2);
  return Array.prototype.filter.call(args, function(value) {
    return min <= value && value <= max;
  });
}

function Lazy() {
  this.sequence=[];
  return this;
}

Lazy.prototype.add=function(fn,...args) {
    if(args.length>0) this.sequence.push({'fn':fn,'args':args});
    else this.sequence.push({'fn':fn});
    return this;
}

Lazy.prototype.invoke=function(arr) {
    return this.sequence.reduce((acc,obj)=>obj.args?acc=obj.fn(...obj.args,...acc):acc=obj.fn(...acc),arr);
}

/*let lazy=new Lazy();
let result=lazy.add(filterNumbers)
      .add(filterRange, 2, 7)
      .add(max)
      .invoke([1, 8, 6, [], "7", -1, {v: 5}, 4]);
console.log(result); //-->6*/

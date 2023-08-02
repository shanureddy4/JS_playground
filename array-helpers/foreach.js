var colors = ['red','blue','green'];

//here we call the function as ananymous function else in this case it is iterator function
//forEach will pass each element in the array to the iterator function.
colors.forEach(function(color){
    console.log(color);
})

//summig up the numbers
var numbers = [1,2,3,4,5];
var sum = 0;
numbers.forEach((number)=> sum +=number );
console.log("sum",sum);

//the function need not always to be the ananymous function. we can create with name and body outside.
//we are not putting adder() but adder.
numbers.forEach(adder)
function adder(number){
    sum +=number
}
console.log(sum);

var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
  ];
  var areas = [];
  images.forEach((obj)=>areas.push(obj.height*obj.width));
  console.log(areas)
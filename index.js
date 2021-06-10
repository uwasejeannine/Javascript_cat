
function one1()
{
  return {
      bar: "hello"
  };
}

function two2()
{
  return
  {
      bar: "hello"
  };
}

// THis function can not run unless we call the function. If we have called the function
// The out but will be The first hello because function  one has printed out so it won't print second 
// function since it not even colleback function

//  To craete an object in javascript
//  first have the list of name: name="Jeannine" inside {}
//  Have keyworld new to create new valiable
//  define object contractor
//  create object using object.create()

const person = {
    country: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Iam from? ${this.country}`);
    }
  };

  const names = Object.create(person);

  names.name = 'Jeannine';
  names.country = true;

  names.printIntroduction();

// there are two scope in JS

//    Local scope :  They are valiable to the function that occurs when a variable is defined “inside of a function”. Means they can be 
//     Global scope : accesed within only that function(scope) While Global scope they are variuables that 
// can be accesible everywhere in the scope because it's global.
// Glob
// global scope variable
let a = "hello";

function greet() {
    a = 3;
}


console.log(a);

greet();
console.log(a);

// program showing local scope of a variable
let a = "hello";

function greet() {
    let b = "World"
    console.log(a + b);
}

greet();
console.log(a + b); // This will give you error cause variable a is not global so function greet can not access.


function getInput() {
    var name = document.getElementById("name").value;
    var clas = document.getElementById("class").value;
    var subject = document.getElementById("subject").value;
    var date = document.getElementById("date").value;
    var result = `${name} from ${clas} is offering ${subject} on ${date}`;
    document.getElementById('spanResult').textContent = result;
     }










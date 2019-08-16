function sample02() {
    return "hello world";
    // body...
}



let strings=sample02();
let method=sample02;


console.log(strings);
console.log(method);


function sample03(name = "Victor", place = "Nagaoaka") {
    
   return "hello" + name + " welcome to to" + place; // body...
}
console.log(sample03("victor", "nagaoka"));
console.log(sample03());

function sample04(a,b) {
   return a*b; // body...
}
console.log(sample04(4,3));

const noro = {
    name:  "victor",
    speak:  function() {
  return "Dive into code !!";        // body...
    },
}

console.log(noro.speak());


var car= {type:"fiat", model:"500", color :"white"};
var person= {
    firstname: "John",
    lastname: "doe",
    age : 50,
    eyeColor: "blue"

};

console.log(person.age);



let numbers = {
      a: 0,
      b: 1,
      c: 2,
     average: function(a,b,c) {
       return   (a + b + c)/3; // body...
     },
};

let numbers02 = {
      a: 0,
      b: 1,
      mode : function(a,b) {
         if (a>b) {
        console.log(a)   
       } else
          console.log(b); 
       } // body...
};


console.log(numbers.average(5,28,3));
console.log(numbers02.mode(13,3));


let x= -6;
function scope_test01(x) {
   return x + 6; // body...
}

console.log(scope_test01(4));
console.log(scope_test01(x));

{
 let judge= "safe";
 let check = "safe";
 console.log(judge);
 console.log(check);
 {
  let judge="out";
  console.log(judge);
  console.log(check);
 }
}
 
 
 
 let barrier;
 {
 let data = {name: "shibata", password: "hogehoge"}
 barrier= function express() {
     console.log(data.password);
     return data;
     // body...
 };
 };
let invasion= barrier();
invasion.password= "fugafuga";
barrier();


let teacher_name = 'Noro';
let menter_name  = 'Miyaoka';

function teacher_introduction() {
    console.log('my name is${teacher_name}.');// body...
};
function menter_introduction() {
   console.log('my name is${menter_name}.'); // body...
};

 teacher_introduction();
 menter_introduction();
 

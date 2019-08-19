let scores=[60,60,60,60,60,60,60,59];

let PassOrFail= scores.every(function(num){
    if  (num < 60){
    return "passed"
    
   }else{
    return "failed"
}
  
    
} );

console.log(PassOrFail);
console.log("failed")
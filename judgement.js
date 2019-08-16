let x=100;  // english scores
let y= 90;  // arithmetic scores
let z= 50;  // geography scores
let sum = x+y+z;  // sum of scores earned
let sum01= (sum/3);  // average of sum


function get_achievement(x,y,z) {
      if (sum >= 250.0) {
          return "A";
      } else if(sum >= 200.0) {
          return "B";
      }else if (sum >= 100.0){
          return " C";
      }else{
          return "D";
      }
      
}



function  get_pass_or_failure(x,y,z) {
    if (sum>=250 && sum01>=60) {
        return "are Excellent!";
    } else if (sum>=200 && sum01>=60){
        return "Passed";
    }else if(sum>= 100 && sum01<60) {
        return  "Failed";
    }else{
        return "Failed";
    }
}



function judgement(x,y,z) {
   let  achievement = get_achievement();
   let  pass_or_failure = get_pass_or_failure();
   return `Your grade is ${achievement}.You ${pass_or_failure}!`; // body...
}

console.log(judgement(x,y,z));
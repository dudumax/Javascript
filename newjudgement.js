
const scores=[60,60,60,59,60,60,60,60];
var num_sub = scores.length;
var ps = 100*(num_sub); //perfect score

 

 

let sum=0;
for(let n of scores)
sum+= n;
console.log(sum);



function get_achievement() {
      if (sum >= (0.8*ps)) {
          return "A";
      }else if(sum >= (0.6*ps)){
          return"B";
      }else if (sum >= (0.4*ps)){
          return "C";
      }else{
          return "D";
      }
  }
  
var i;
var text = "";
function get_pass_or_failure(scores) {
for ( i = 0; i < scores.length; i++ ) {
  if (scores[i]>=60) {
      text= "passed";
  } else {
      text=  "failed";
  }
  }
}
  
function judgement(scores) {
    let achievement = get_achievement(scores);
    let pass_or_failure= get_pass_or_failure(scores);// body...
    return `${achievement}.${pass_or_failure}`;
}

console.log(judgement(scores));
console.log(ps);







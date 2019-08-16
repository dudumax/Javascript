
const scores=[60,100,80,80,70,80,0,10];
var num_sub = scores.length;
var sub01 = num_sub * 100 * 0.8;


let sum=0;
for(let n of scores)
sum+= n;
console.log(sum);

function get_achievement(scores) {
      if (sum>= sub01) {
          return "A";
      }else if(sum >= 60){
          return"B";
      }else if (sum >= 40){
          return "C";
      }else{
          return "D";
      }
  }
  
let number =scores.length;
function get_pass_or_failure(scores) {
for (let i = 0; i < number; i++ ) {
  if (scores[i]>=60) {
      return "passed";
  } else {
      return "failed";
  }
  }
}
  
function judgement(scores) {
    let achievement = get_achievement(scores);
    let pass_or_failure= get_pass_or_failure(scores);// body...
    return `${achievement}.${pass_or_failure}`;
}

console.log(judgement(scores));
console.log(sub01);




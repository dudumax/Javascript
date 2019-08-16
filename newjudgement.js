
const scores=[59,100,100,90,80,80,100,100];
var num_sub = scores.length;
var sub01 = num_sub* 100; 
var ps = 100*(num_sub + 1); //perfect score
 

let sum=0;
for(let n of scores)
sum+= n;
console.log(sum);



function get_achievement(scores) {
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





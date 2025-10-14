//var Score=[
//    [70,80,90,60,80],
//    [80,90,75,70,85],
  //  [85,85,80,90,80]
//]
//console.log("Score[0]="+Score[0]);
//avg for every element

var Student=[
    {"name":"jhon", "grade":2, "score":[70,80,90,60,80]},
    {"name":"tom", "grade":2, "score":[80,90,70,75,85]},
    {"name":"art", "grade":3, "score":[85,85,80,90,80]}
]
console.log("first student'sname="+Student[0].name)
//show all student's name & avg

for(let i=0; i<Score.length; i++){
    let sum=0;
    for(let j=0; j<Score[i].length; j++){
        sum+=Score[i][j];
    }
    let avg=sum/Score[i].length;
    console.log("Student" + (i+1) + "avg:" +avg.toFixed(2));
}


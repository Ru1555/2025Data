var Score=[
    [70,80,90,60,80],
    [80,90,75,70,85],
    [85,85,80,90,80]
]
console.log("Score[0]="+Score[0]);
//avg for every element

for(let i=0; i<Score.length; i++){
    let sum=0;
    for(let j=0; j<Score[i].length; j++){
        sum+=Score[i][j];
    }
    let avg=sum/Score[i].length;
    console.log("第" + (i+1) + "列平均值為:" +avg.toFixed(2));
}
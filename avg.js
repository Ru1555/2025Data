function avg(score){
    var sum = 0, average = 0;
    for(var i = 0; i < score.length; i++){
        sum += score[i];
    }

    if(score.length > 0)
        average = sum / score.length;

    return average;
    
}

//Test
//var Score = [90, 98, 85, 100, 100, 86, 94];
var Score = [];
console.log(Score.toString()+ "Average: " + avg(Score));
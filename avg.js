function avg(score){
    var sum = 0;//1
    for(var i = 0; i < score.length; i++){//n+1
        sum += score[i];//n
    }

    if(score.length > 0)
    return average ? sum / score.length : 0;//1
    
}

//Test
//var Score = [90, 98, 85, 100, 100, 86, 94];
var Score = [15,56,-45,78,32,14,89];
console.log(Score.toString()+ "Average: " + avg(Score));
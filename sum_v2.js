//calc 1-2+3-4+...n
function sum2(n){
    var sum = 0;
    if(n<=0){
        console.log("error: n must > 0");
        return null;
    }
    else{
        for(var i=1; i<=n; i++){
            if(i%2==0) // %=除以會有餘數
                sum -= i;
            else
                sum += i; //奇數
        }
    }
    return sum;   
}

//test
console.log("1-2+3-4+..." +n+ "=" + sum2(n)); 
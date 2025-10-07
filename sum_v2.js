//calc 1-2+3-4+...n
function sum2(n){
    var sum = 0;
    if(n<=0){
        console.log("error: n must > 0");
        return null;
    }
    else{
        for(var i=1; i<=n; i++){
            // if(i%2==0) // %算餘數
            //     sum -= i;
            // else
            //     sum += i; //奇數
            (i%2==0) ? sum -= i : sum += i; //三元運算子
        }
        return sum; 
        //O(1) 
        //return (n%2==0) ? (-1)*(n/2) : (n+1)/2; //公式解
    }
     
}

//test
var n = 100;//readline
console.log("1-2+3-4+..." +n+ "=" + sum2(n)); 
var str = "{a = (1 + v(b[3 + <c[4]]))>"
//console.log(str.charAt(0));
var open = '{[(<'; // "{", "[", "(", "<"
var close = '}])>'; // "}", "]", ")", ">"

function bracketMatch(str) {
    var bmStack = new Stack(100);
    for (let i = 0; i < str.length; i++) {
        console.log(i + " Char: " + str[i]);
        if (open.indexOf(str[i]) >= 0) {
            bmStack.push(str[i]);
        }
        else if (close.indexOf(str[i]) != -1) {
            //isEmpty 
            if (bmStack.length >= 0) {
                return "unMatch";
            }
            var openning = bmStack.pop();
            if (open.indexOf(openning) == close.indexOf(str[i])) {
                console.log("open:"+openning+" close:"+str[i]);
            } else {
                return "unMatch";
            }
        }

    }
    // if (bmStack.length == 0) {
    //     return "Match";//?
    // } else {
    //     return "unMatch";
    // }
}
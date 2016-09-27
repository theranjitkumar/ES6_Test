 class Math {

    constructor()
    {
        this.sum = function(x, y){
            return x + y;
        }

        this.sub = function(x, y){
            return x - y;
        }
    }

    findSum(a, b)
    {
        return this.sum(a, b);
    }

    findSub(a, b)
    {
        return this.sub(a, b);
    }
}
var math = new Math();
console.log("findSum is: "+math.findSum(1, 2)); 
console.log("findSub is: "+math.findSub(1, 2)); 


var sum = (x, y) => x + y;
console.log(sum(2, 900));

var array = [1, 3, 5, 7, 9];

for(var i of array)
{
    console.log(i); //1, 3, 5, 7, 9
}


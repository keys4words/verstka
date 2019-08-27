alert('connected');

function printReverse(arr){
    for(var i = arr.length-1; i>=0; i--){
        console.log(arr[i]);
    }
}

//printReverse([3, 6, 2, 5]);

function isUniform(arr){
    var firstEl = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] !== firstEl){
            return false;
        }
    }
    // arr.forEach(function(element){
    //     if(element!==firstEl){
    //         return false;
    //     }
    // });
    // return true;
}

function sumArray(arr){
    var total = 0;
    arr.forEach(function(el){
        total += el;
    });
    return total;
}

function maxArr(arr){
    var maxArr = arr[0];
    for(var i=1; i<arr.length; i++){
        if(arr[i]>maxArr){
            maxArr = arr[i];
        }
    }
    return maxArr;
}
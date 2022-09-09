function missingNumber(numArr){
    let x = [];
    for (let i=1; i<=9; i++){
        if (!numArr.includes(i)){
            x.push(i);
        }
    }
    if (x.length>1){
        return (x.sort((a, b) => a - b));
    }else if (x.length == 1){
        return x[0];
    }else{
        return false;
    }
}

module.exports = missingNumber
console.log(missingNumber([1,2,3,4,5,6,7,8,9]))
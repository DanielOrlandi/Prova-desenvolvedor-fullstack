const recursiva = (result) => {
    const nums = [2,3,10];
    if(
        result % nums[0] === 0 && 
        result % nums[1] === 0 && 
        result % nums[2] === 0 
        ){
            return result;
    }
    return recursiva(result + 1);
    
};
console.log(recursiva(1));
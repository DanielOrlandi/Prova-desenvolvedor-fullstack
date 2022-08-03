let result = 0;
const initialNum = 999;
for(let i = initialNum; i > 0; i--){
    if(i % 3 === 0 || i % 5 === 0){
        result += i;
    }
}
console.log(result);
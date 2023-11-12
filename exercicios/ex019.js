var num = [7,9,3,2,1];
num.push(5);
num.sort();

/*for(var pos = 0; pos < num.length; pos++){
    console.log('A posição ' + [pos] + ' contem o valor: ' + num[pos]);
}*/

for(var pos in num){
    console.log('A posição ' + [pos] + ' contem o valor: ' + num[pos]);
}

console.log(num.indexOf(10));

/*console.log(num);
console.log(num.length);
console.log(num[0]);*/
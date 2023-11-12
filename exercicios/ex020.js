function pi(n){
    if(n % 2 ==0){
        return 'par';
    } else{
        return 'impar';
    }
}

//pi(2);
//var res = pi(15);
console.log(pi(15));

function s(n1=0, n2=0){
    return n1 + n2;
}

console.log(s(1, 5));

var v = function(x){
    return x * 2; 
}

console.log(v(2)); 

function f(num){
    var fa = 1;

    for(var c = num; c > 1; c--){
        fa *= c;
    }
    return fa;
}

console.log(f(5));

function fat(numb){
    if(numb == 1){
        return 1;
    } else{
        return numb * fat(numb-1)
    }
}

console.log(fat(5))
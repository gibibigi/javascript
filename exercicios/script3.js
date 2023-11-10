function multi(){
    var num = document.getElementById('txtnum');
    var tab = document.getElementById('seltab');
    var res = document.getElementById('res');
    //res.innerHTML = num.value;

    if(num.value.length == 0 ){
        alert('Digite um número!');
    } else{
        var n = Number(num.value);
        var c = 1;
        tab.innerHTML = '';
        while(c <= 10){
            var it = document.createElement('option');
            it.text = n + ' x ' + c + ' = ' + ' ' + n*c;
            it.value = 'tab ' + c;
            tab.appendChild(it);
            c++;
        }
    }

    //res.innerHTML = c;
}
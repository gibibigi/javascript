var num = document.getElementById('txtnum');
var lis = document.querySelector('select#flista');
var res = document.querySelector('div#res');
var val = [];

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    }else{
        return false;
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    }else{
        return false;
    }
}

function add(){
    if(isNumero(num.value) && !inLista(num.value, val)){
        val.push(Number(num.value));
        var it = document.createElement('option');
        it.text = 'Valor ' + num.value + ' adicionado!';
        lis.appendChild(it);
        //window.alert('Tudo OK!');
    }else{
        window.alert('Valor inválido ou encontrado na lista!');
    }

    num.value = '';
    num.focus();
}

function fin(){
    if(val.length == 0){
        window.alert('Adicione valores antes de finalizar!');
    }else{
        var t = val.length;
        var ma = val[0];
        var me = val[0];
        var s = 0;
        var med = 0;

        for(var pos in val){
            s += val[pos];

            if(val[pos] > ma){
                ma = val[pos];
            }

            if(val[pos] < me){
                me = val[pos];
            }
        }

        med = s/t;
        res.innerHTML = '';
        res.innerHTML += '<p> Ao todo, temos ' + t + ' numeros cadastrados!</p>';
        res.innerHTML += '<p>O maior valor informado foi: ' + ma + '</p>';
        res.innerHTML += '<p>O menor valor informado foi: ' + me + '</p>';
        res.innerHTML += '<p>A soma de todos os valores é: ' + s + '</p>';
        res.innerHTML += '<p>A média dos valores digitados é: ' + med +'</p>';
    }
}
function contar(){
    var ini = document.getElementById('ini');
    var fim = document.getElementById('fim');
    var pas = document.getElementById('pas');
    var res = document.querySelector('div#res');

    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        res.innerHTML = 'Impossivel Contar!';
        //alert('[ERRO] Faltam dados!');
    } else{
        res.innerHTML = 'Contando: <br>';
        var i = Number(ini.value);
        var f = Number(fim.value);
        var p = Number(pas.value);

        if(p<=0){
            alert('Passo inválido! Considerando PASSO 1');
            p = 1;
        }

        if(i < f){
            //crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += ' ' + c + '\u{1f449}';
            }
        }else {
            for(var c = i; c >= f; c -= p){
                res.innerHTML += ' ' + c + '\u{1f449}';
            }
        }
        res.innerHTML += '\u{1f3c1}';
    }
}
function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    //res.innerHTML = res.value;
    
    if(fano.value.lenght == 0 || Number(fano.value) > ano ){
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else{
        var rsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        //res.innerHTML = i;
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        var gen = '';
        if(rsex[0].checked){
            gen = 'Homem';
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src','bbmenino.jpg');
            }else if(idade < 21){
                img.setAttribute('src','jovhom.jpg');
            }else if(idade < 50){
                img.setAttribute('src','aduhom.jpg');
            }else {
                img.setAttribute('src','idohom.jpg');
            }
        }else if(rsex[1].checked){
            gen = 'Mulher';
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src','bbmenina.jpg');
            }else if(idade < 21){
                img.setAttribute('src','jovmul.jpg');
            }else if(idade < 50){
                img.setAttribute('src','adumul.jpg');
            }else {
                img.setAttribute('src','idomul.jpg');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = 'Detectamos ' + gen + ' com ' + idade + ' anos.';
        res.appendChild(img);
    }
}
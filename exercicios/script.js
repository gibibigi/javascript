function c(){
    var m = window.document.getElementById('m');
    var f = window.document.getElementById('i');
    var d = new Date();
    var h = d.getHours();
    /*#e2cd9f #b9846f #515154*/
    m.innerHTML = 'Agora são: ' + h + ' horas.';

    if (h >= 0 && h < 12){
        f.src = 'm.jpg';
        document.body.style.background = '#e2cd9f';
    }
    else if(h >= 12 && h < 18){
        f.src = 't.jpg';
        document.body.style.background = '#b9846f';
    }
    else{
        f.src = 'n.jpg';
        document.body.style.background = '#515154';
    }
}
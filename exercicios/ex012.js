var a = new Date();
var h = a.getHours();
console.log('Agora são exatamente: ' + h);
if (h >= 6 && h <= 12){
    console.log('Bom Dia!');
}else if(h <= 18){
    console.log('Boa Tarde!');
}else if(h > 18 && h <=24){
    console.log('Boa Noite!');
}else{
    console.log('Boa Madrugada!')
}
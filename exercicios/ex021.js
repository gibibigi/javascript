var amg = {nome: 'José', sexo: 'M', peso: 85.5, 
engorda(p=0){
    console.log('Buchin chei');
    this.peso += p;
}}

amg.engorda(2);
console.log(amg.nome + ' pesa: ' + amg.peso + ' Kgs!');
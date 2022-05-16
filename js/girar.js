let one = {  x: 360, y: 180, z: 180 };

let two = {  x: 90, y: 0, z: 270 };

let trhee = {  x: 360, y: 810, z: 810 };

let four = {  x: 270, y: 180, z: 360 };

let five = {  x: 270, y: 90, z: 270 };

let six = {  x: 0, y: 0, z: 90 };

$('#girar-btn').click(function(){
    
    let diceNumber = parseInt(Math.random() * (7 - 1) + 1);
    let aux = diceNumber;

    console.log(aux)
    console.log(diceNumber)

    let diceParams = diceNumber == 1 ? { ...one } :
                    diceNumber == 2 ? { ...two} :
                    diceNumber == 3 ? { ...trhee} :
                    diceNumber == 4 ? { ...four} :
                    diceNumber == 5 ? { ...five} :
                    { ...six};
    let {x,y,z} = diceParams;
    


    $('.dice').css({"transform":`rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`});

})
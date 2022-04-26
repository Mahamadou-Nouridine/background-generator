let c1
let c2
let c11
let c12
function color (){
    c1 = document.getElementById("couleur1").value;
c2 = document.getElementById("couleur2").value;
c11 = tinycolor(c1)
c12 = tinycolor(c2)
document.getElementById("body").style.background = `linear-gradient(to right, ${c1}, ${c2})`;
document.getElementById("affiche").innerHTML = `linear-gradient(to right, ${c11.toRgbString()}, ${c12.toRgbString()})`
}

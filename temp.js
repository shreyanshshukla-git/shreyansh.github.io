for(var i = 1; i<=2; i++) {
document.getElementById(`displacementFilter${i}`).querySelector("feTurbulence").setAttribute('seed', Math.random() * 1000);
}

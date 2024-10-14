const palavras = ["VOCÊ","Ideias", "Inovação"];
let i = 0;
const elemento = document.querySelector(".palavra-dinamica");

setInterval(() => {
    elemento.textContent = palavras[i];
    i = (i + 1) % palavras.length; // Rotaciona entre as palavras
}, 2000); // Troca a palavra a cada 2 segundos

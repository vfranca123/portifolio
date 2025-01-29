function voltaHome(){
    window.location.href = "index.html"
}

let urlParams = new URLSearchParams(window.location.search);
let projeto = JSON.parse(decodeURIComponent(urlParams.get('projeto')));


document.getElementById("titulo").innerText = projeto.nome;
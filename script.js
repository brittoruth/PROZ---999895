let titulo = document.createElement("h1");
titulo.id = "titulo";
titulo.innerText = "Loja de Cosméticos";

let body = document.querySelector("body");
body.appendChild(titulo);


let produto = document.createElement("div");

produto.innerHTML = `
<div>
<h2>Shampoo Dove Reconstrução Completa | Dove</h2>
<img src="https://assets.unileversolutions.com/v1/113850610.png?im=AspectCrop=(540,540);Resize=(540,540)" alt="Shampoo">
<p>Conheça o melhor shampoo para cabelos quebradiços de Dove: sua fórmula superior nutre e repara os fios desde a primeira lavagem. Recupere o brilho e a maciez de seus cabelos com o Shampoo Dove Reconstrução Completa.</p>
<p id = "preco-shampoo">R$ 34.90</p>
</div>
 `; 

body.appendChild(produto)




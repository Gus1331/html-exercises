let a = document.getElementById("target");
a.setAttribute("example2","value2"); //cria um novo atributo, mesmo que não exista na documentação html

console.log(a.getAttribute("example1")); //pega valores pelo elemento e atributo
console.log(a.getAttribute("example2"));
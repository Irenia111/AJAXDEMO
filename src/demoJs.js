const div = document.querySelector(".main");

const text = document.querySelector(".jsdemo");
text.innerHTML = `<h1>这是JS插入的标题</h1>`;
div.appendChild(text);

const style = document.createElement("style");
style.innerHTML = `
.jsdemo{
    height:100px;
    background:grey;
}
.jsdemo h1{
background: teal;
color:white;
}
`
document.head.appendChild(style);
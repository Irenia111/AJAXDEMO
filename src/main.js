console.log("成功加载main.js");


const start1 = document.querySelector(".loadCss");
start1.onclick = ()=>{
console.log("点击");
const request = new XMLHttpRequest();
request.open("GET","/demoCss.css");//readyState = 1

request.onreadystatechange = ()=>{
if(request.readyState === 4){
    console.log("request下载完成");
    if(request.status === 200){
    //1.创建style标签
    const style = document.createElement("style");
    //2.将request的内容加入style标签
    style.innerHTML = request.response;
    //3.插入style标签
    document.head.appendChild(style);
    }else{
    alert("加载失败");
    }}
};
request.send();//readyState = 2
}

const start2 = document.querySelector(".loadJs");
start2.onclick = ()=>{
console.log("点击");
const request = new XMLHttpRequest();
request.open("GET","/demoJs.js");//readyState = 1

request.onreadystatechange = ()=>{
if(request.readyState === 4){
    console.log("request下载完成");
    if(request.status === 200){
    console.log("完成加载"); 
    const div = document.querySelector(".jsdemo");
    //1.创建script标签
    const script = document.createElement("script");
    //2.将request的内容加入script标签
    script.innerHTML = request.response;
    //3.插入script标签
    div.appendChild(script);
    }else{
    alert("加载失败");
    }
}
};
request.send();//readyState = 2
}

const start3 = document.querySelector(".loadHtml");
start3.onclick = ()=>{
console.log("点击");
const request = new XMLHttpRequest();
request.open("GET","/demoHtml.html");//readyState = 1

request.onreadystatechange = ()=>{
if(request.readyState === 4){
    console.log("request下载完成");
    if(request.status === 200){
    console.log("完成加载"); 
    const div = document.querySelector(".htmldemo");

    const html = document.createElement("html");

    html.innerHTML = request.response;

    div.appendChild(html);
    }else{
    alert("加载失败");
    }
}
};
request.send();//readyState = 2
}

const start4 = document.querySelector(".loadXml");
start4.onclick = ()=>{
    console.log("点击");
    const request = new XMLHttpRequest();
    request.open("GET","/demoXml.xml");//readyState = 1
    
    request.onreadystatechange = ()=>{
    if(request.readyState === 4){
        console.log("request下载完成");

        if(request.status === 200){
        
        console.log("完成加载"); 
        const div = document.querySelector(".xmldemo");
        
        const dom =request.responseXML;
        //xml是一个dom对象
        const xml = dom.getElementsByTagName("warning")[0].textContent;
        div.innerText = xml.trim();
    
    }else{
        alert("加载失败");
        }
    }
    };
    request.send();//readyState = 2
}

const start5 = document.querySelector(".loadJSON");
start5.onclick = ()=>{
    console.log("点击");
    const request = new XMLHttpRequest();
    request.open("GET","/demoJSON.json");//readyState = 1
    
    request.onreadystatechange = ()=>{
    if(request.readyState === 4 && request.status === 200){
        console.log("完成加载"); 
        const div = document.querySelector(".jsondemo");
        
        const object = JSON.parse(request.response);
        //JSON可以转化成js的对象
        div.innerText = object.string.trim();
    
    }else{
        alert("加载失败");}
    };
    request.send();//readyState = 2
}

let n=1;
const start6 = document.querySelector(".loadTab");
start6.onclick = ()=>{
    console.log("点击");
    const request = new XMLHttpRequest();
    request.open("GET",`db/page${n+1}.json`);//readyState = 1
    
    request.onreadystatechange = ()=>{
    if(request.readyState === 4 && request.status === 200){
        console.log("完成加载"); 
        const div = document.querySelector(".tabdemo");
        
        const object = JSON.parse(request.response);
        //JSON可以转化成js的对象
        const p = document.createElement("p");
        p.innerHTML = `<p>${result}</p>`
        div.appendChild(p);
    n++;
    }else{
        alert("加载失败");}
    };
    request.send();//readyState = 2
}
/* 这里因为花括号出了问题。。。。。
const start2 = document.querySelector(".loadJs");
start2.onclick = ()=>{
console.log("点击");
const div = document.querySelector(".jsdemo");
const request = new XMLHttpRequest();
request.open("GET","/demoJs.js");//readyState = 1
request.onload = ()=>{

if(request.readyState === 4 ){
    console.log("request下载完成");
    if(request.status === 200){
    //1.创建script标签
    const script = document.createElement("script");
    //2.将request的内容加入script标签
    script.innerHTML = request.response;
    //3.插入script标签
    div.appendChild(script);
    }else{
    alert("加载失败");
    }
request.send();//readyState = 2
}
}}


const start3 = document.querySelector(".loadHtml");
start3.onclick = ()=>{

const div = document.querySelector("htmldemo");
const request = new XMLHttpRequest();
request.open("GET","/demoHtml.html");//readyState = 1
request.onreadystatechange = ()=>{
if(request.readyState === 4 && request.status === 200){
    //1.创建style标签
    const html = document.createElement("html");
    //2.将request的内容加入style标签
    html.innerHTML = request.response;
    //3.插入style标签
    div.appendChild(html);
    }else{
    alert("加载失败");
    }
request.send();//readyState = 2
}
}

*/
var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号 比如\nnode server.js 8888 这样')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url 
  var queryString = ''
  if(pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/

  console.log('有个人发请求过来啦！路径（带查询参数）为：' + pathWithQuery)

  if(path === '/index.html'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')

    let string = fs.readFileSync("src/index.html").toString();
    //请求当前目录下的index.html,可以和路径名称不对应

    //载入第一个分页
    const page1 = fs.readFileSync("db/page1.json").toString();
    const object = JSON.parse(page1);
    const result = object.string.toString();

    //将占位符用page1的内容替代
    string = string.replace("${}",`<p>${result}</p>`);

    response.write(string);
    response.end()
  } else if(path === '/main.js'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
    response.write(fs.readFileSync("src/main.js"));
    response.end()
  } else if(path === '/demoCss.css'){
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/css;charset=utf-8');
    response.write(fs.readFileSync("src/demoCss.css"));
    response.end()
  } else if(path === '/demoJs.js'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
    response.write(fs.readFileSync("src/demoJs.js"))
    response.end()
  }else if(path === '/demoHtml.html'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(fs.readFileSync("src/demoHtml.html"))
    response.end()
  }else if(path === '/demoJSON.json'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/json;charset=utf-8')
    response.write(fs.readFileSync("src/demoJSON.json"))
    response.end()
  }else if(path === '/demoXml.xml'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/xml;charset=utf-8')
    response.write(fs.readFileSync("src/demoXml.xml"))
    response.end()
  }else if(path === 'db/page2.json'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/json;charset=utf-8')
    response.write(fs.readFileSync("db/page2.json"))
    response.end()
  } else if(path === 'db/page3.json'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/json;charset=utf-8')
    response.write(fs.readFileSync("db/page3.json"))
    response.end()
  } else {
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(`你访问的页面不存在`)
    response.end()
  }

  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)


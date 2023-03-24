const http = require('http');
// 프로미스 방식
const fs = require('fs').promises;
console.log(fs);
// 요청이 들어오면 fs모듈로 HTML파일을 읽는다.
http.createServer(async (req, res) => {
  try {
    const data = await fs.readFile('./server.html');
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    res.end(data);
  } catch (err) {
    console.error(err);
    res.writeHead(500, {'Content-Type' : 'text/plain; charset=utf-8'});
    res.end(err.message);
  }
})
.listen(8080, () => {
  console.log('8080번 포트에 서버 대기중');
});
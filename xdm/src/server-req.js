const http = require('http');
const url = require('url');

const PORT = 8888

const users = []

const app = http.createServer((request, response) => {
  const reqUrl = url.parse(request.url, true)
  console.log(reqUrl);
  const method = request.method
  switch (reqUrl.pathname) {
    case '/user' :
      switch (method){
        case 'GET': {
          const username = reqUrl.query.name
          const user = users.find(u => u.name === username)
          response.end(JSON.stringify(user))
          break;
        }
        case 'POST':
          let str = ''
          request.on('data', (data) => {
            str += data.toString('utf-8')
          })
          request.on('end', () => {
            let user;
            try {
              user = JSON.parse(str)
            } catch (e) {
              response.statusCode = 400
              response.end(JSON.stringify(e.message))
            }
            users.push(user)
            response.end(JSON.stringify({
              status: 'success'
            }))
          })
          break
      }
  }
})

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
})
const http = require('http');

let count = 0
const PORT = 3030

const server = http.createServer((request, response) => {
  const contentType = request.headers['content-type']

  switch (contentType) {
    case 'text/plain':
      response.setHeader("Content-Type", "text/plain")
      let str = ''
      request.on('data', (data) => {
        console.log(2)
        str += data.toString('utf-8')
      })
      request.on('end', () => {
        response.end(`you sent plain text ${str}`)
      })
      console.log(1);
      break;
    case 'application/json': {
      let str = ''
      request.on('data', (data) => {
        let jsonReqBody;
        try {
          jsonReqBody = JSON.parse(data)
        } catch (e) {
          response.statusCode = 400
          response.end(JSON.stringify({ err: 'you sent a bad request' }))
        }
        response.end(JSON.stringify(jsonReqBody))
      })
      break;  
    }
    default:
      response.end('not support content type')
  }
})

server.listen(PORT, () => {console.log(`server is running at http://localhost:${PORT}`)})


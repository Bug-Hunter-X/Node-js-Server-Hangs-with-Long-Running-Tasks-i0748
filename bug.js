const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running task
  let count = 0;
  const intervalId = setInterval(() => {
    count++;
    console.log('Long-running task count:', count);
    if (count === 5) {
      clearInterval(intervalId);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Task completed!');
    }
  }, 1000);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
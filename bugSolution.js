const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running task
  let count = 0;
  const intervalId = setInterval(() => {
    try {
      count++;
      console.log('Long-running task count:', count);
      if (count === 5) {
        clearInterval(intervalId);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Task completed!');
      }
      // Simulate an error
      // if (count === 3) { throw new Error('Simulated error'); }
    } catch (error) {
      console.error('Error in long-running task:', error);
      clearInterval(intervalId);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }
  }, 1000);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
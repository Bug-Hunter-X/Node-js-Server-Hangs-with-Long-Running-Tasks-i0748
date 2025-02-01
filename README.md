# Node.js Server Hangs with Long-Running Tasks

This repository demonstrates a common issue in Node.js where servers can hang or crash due to unhandled exceptions within long-running tasks or event loops.  The `bug.js` file shows the problematic code. The `bugSolution.js` file provides a solution to resolve the issue.

## Problem

The server uses `setInterval` to simulate a long-running task.  If any error occurs during this task (not shown in this example), it can disrupt the event loop and prevent the server from responding to other requests.  This can lead to a hung server or a crash.

## Solution

The solution involves using appropriate error handling mechanisms, such as `try...catch` blocks, to gracefully handle exceptions within long-running tasks and prevent the entire server from crashing.
// Create Web Server
// Create a web server that listens on port 3000. It should respond to a GET request to /comments with a JSON response that represents an array of comments.
// The comments array should have a length of 10. Each comment should have an id, author, and message property.
// The id should be a unique number. The author should be the name of a person. The message should be a random sentence or paragraph of text.
// You can use the chance npm package to help you generate random data.
// For example, the JSON response could look like this:
// [
//   {
//     "id": 1,
//     "author": "Alice",
//     "message": "This is a comment."
//   },
//   {
//     "id": 2,
//     "author": "Bob",
//     "message": "This is another comment."
//   }
// ]
// You can use the express npm package to create the web server.

// Require the express module
const express = require('express');

// Create a new web server
const app = express();

// Define a route for GET /comments
app.get('/comments', (req, res) => {
  // Create an array of comments
  const comments = [
    {
            id: 1,
            author: 'Alice',
            message: 'This is a comment.'
          },
          {
            id: 2,
            author: 'Bob',
            message: 'This is another comment.'
          },
          {
            id: 3,
            author: 'Charlie',
            message: 'This is yet another comment.'
          },
          {
            id: 4,
            author: 'David',
            message: 'This is a different comment.'
          },
          {
            id: 5,
            author: 'Eve',
            message: 'This is a unique comment.'
          },
          {
            id: 6,
            author: 'Frank',
            message: 'This is a random comment.'
          },
          {
            id: 7,
            author: 'Grace',
            message: 'This is a special comment.'
          },
          {
            id: 8,
            author: 'Hank',
            message: 'This is an interesting comment.'
          },
          {
            id: 9,
            author: 'Ivy',
            message: 'This is a fascinating comment.'
          },
          {
            id: 10,
            author: 'Jack',
            message: 'This is a final comment.'
          }
        ];
      
        // Send the comments array as a JSON response
        res.json(comments);
      });
      
      // Start the web server and listen on port 3000
      app.listen(3000, () => {
        console.log('Server is listening on port 3000');
      });
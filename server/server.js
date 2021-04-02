import 'dotenv/config';
import express from 'express';
import cors from 'cors'; // secure web applications on a domain level so we can write middleware

const app = express();
const PORT = 2300;

/* sample data */
// let users = {
//   1: {
//     id: '1',
//     username: 'Kevin Park',
//   },
//   2: {
//     id: '2',
//     username: 'John Smith',
//   },
// };
 
// let messages = {
//   1: {
//     id: '1',
//     text: 'Hello World',
//     userId: '1',
//   },
//   2: {
//     id: '2',
//     text: 'Cheers',
//     userId: '2',
//   },
// };


// READ: when get request to root '/' path is made, responds with 'GET HTTP method on users resource'
app.get('/users', (req, res) => {
  return res.send('GET HTTP method on users resource');
});
// READ ADVANCED: read whole list of users
app.get('/users', (req, res) => {
  return res.send(Object.values(users));
});
// READ ADVANCED: single user by identifier
app.get('/users/:userId', (req, res) => {
  return res.send(users[req.params.userId]);
});

// CREATE: 
app.post('/users', (req, res) => {
  return res.send('POST HTTP method on users resource');
});

// UPDATE 
app.put('/users', (req, res) => {
  return res.send('PUT HTTP method on users resource');
});

// UPDATE WITH ID
app.put('/users/:userId', (req, res) => {
  return res.send(
    // callback function holds the URI's parameter in the request object's properties
    `PUT HTTP method on user/${req.params.userId} resource`,
  );
});

// DELETE WITH ID
app.delete('/users/:userId', (req, res) => {
  return res.send(
    // callback function holds the URI's parameter in the request object's properties
    `DELETE HTTP method on user/${req.params.userId} resource`,
  );
});

// app is listening on PORT
app.listen(PORT, () =>
  console.log(`my SERVER is listening on port ${PORT}!`),
);
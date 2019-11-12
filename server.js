// var express = require('express');
// var router = express.Router();


// // this should show the specific page clicked
// router.get('/monsters/:routeName', function (req, res) {
//   var monster = dataFile.monsters[req.params.routeName];
//   res.send(`
//   <link rel="stylesheet" type="text/css"
//   href="/css/style.css">
//   <h1>${monster.name}</h1>
//   <h2>${monster.location}</h2>
//   <p>${monster.descrip}<p>
//   <script src="/reload/reload.js"></script>
//   `);
// })

// var express = require('express');
// var router = express.Router();
// // ... Importations and configurations
// router.param('postId', function (request, response, next) {
//   // Find post by ID
//   // Save post to request
//   request.post = {
//     name: 'PHP vs. Node.js',
//     url: ' http://webapplog.com/php-vs-node-js '
//   };
//   return next();
// });

// router
//   .route('/posts/:postId')
//   .all(function (request, response, next) {
//     // This will be called for request with any HTTP method
//   })
//   .post(function (request, response, next) {
//   })
//   .get(function (request, response, next) {
//     response.json(request.post);
//   })
//   .put(function (request, response, next) {
//     // ... Update the post
//     response.json(request.post);
//   })
//   .delete(function (request, response, next) {
//     // ... Delete the post
//     response.json({ 'message': 'ok' });
//   }) 
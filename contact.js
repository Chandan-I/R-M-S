// const express = require('express');
// const bodyParser = require('body-parser');
// const { MongoClient } = require('mongodb');
// const app = express();
// const port = 8000;
// app.use(bodyParser.urlencoded({ extended: true }));

// // MongoDB connection URL and database name
// const url = 'mongodb://localhost:27017';
// const dbName = 'world';

// // Create a new MongoClient
// const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect(err => {
//   if (err) {
//     console.error('Failed to connect to MongoDB', err);
//     process.exit(1);
//   }
//   console.log('Connected successfully to MongoDB');

//   const db = client.db(dbName);
//   const bookingsCollection = db.collection('bookings');

//   app.post('/submit', async (req, res) => {
//     const { Name, number: mobileNumber, email, Matter, message } = req.body;
//     try {
//       await bookingsCollection.insertOne({
//         name: Name,
//         email: email,
//         mobile_number: mobileNumber,
//         table_number: Matter,
//         date_of_birth: message, // Assuming this is the intended field
//         time: new Date() // You may replace this with the appropriate field from the request body
//       });
//       res.send('YOUR DATA IS SAVED SUCCESSFULLY');
//     } catch (err) {
//       console.error(err);
//       res.status(500).send(' AN ERROR OCCURRED WHILE SAVING YOUR DATA ');
//     }
//   });

//   app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
//   });
// });

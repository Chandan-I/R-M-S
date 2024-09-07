const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

const db = new Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "Vikram7#",
  port: 5432,
});

db.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => console.error('Connection error', err.stack));

app.post('/submit', async (req, res) => {
  const { firstName, email, mobileNumber, tableNumber, date: dateOfBirth, time } = req.body;

  console.log('Received form data:', req.body);

  // Validate mobile number
  if (!mobileNumber || !/^\d{10}$/.test(mobileNumber)) {
    return res.status(400).send('Invalid mobile number');
  }

  try {
    await db.query(
      'INSERT INTO bookings (name, email, mobile_number, table_number, date_of_birth, time) VALUES ($1, $2, $3, $4, $5, $6)',
      [firstName, email, mobileNumber, tableNumber, dateOfBirth, time]
    );
    console.log('Successfully inserted into database');
    res.send('YOU BOOKED YOUR TABLE SUCCESSFULLY');
  } catch (err) {
    console.error('Error inserting into database:', err);
    res.status(500).send('AN ERROR OCCURRED WHILE BOOKING YOUR TABLE');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});





// const express = require('express');
// const bodyParser = require('body-parser');
// const { Client } = require('pg');
// const emailjs = require('emailjs-com');
// const app = express();
// const port = 3000;

// app.use(bodyParser.urlencoded({ extended: true }));

// const db = new Client({
//   user: "postgres",
//   host: "localhost",
//   database: "world",
//   password: "Vikram7#",
//   port: 5432,
// });

// db.connect()
//   .then(() => console.log('Connected to PostgreSQL database'))
//   .catch(err => console.error('Connection error', err.stack));

// app.post('/submit', async (req, res) => {
//   const { firstName, email, mobileNumber, tableNumber, date: dateOfBirth, time } = req.body;

//   console.log('Received form data:', req.body);

//   // Validate mobile number
//   if (!mobileNumber || !/^\d{10}$/.test(mobileNumber)) {
//     return res.status(400).send('Invalid mobile number');
//   }

//   try {
//     await db.query(
//       'INSERT INTO bookings (name, email, mobile_number, table_number, date_of_birth, time) VALUES ($1, $2, $3, $4, $5, $6)',
//       [firstName, email, mobileNumber, tableNumber, dateOfBirth, time]
//     );
//     console.log('Successfully inserted into database');
    
//     // Send confirmation email to the user
//     const emailParams = {
//       user_name: firstName,
//       user_email: email,
//       table_number: tableNumber,
//       booking_date: dateOfBirth,
//       booking_time: time
//     };
    
//     emailjs.send('service_2q3du8p', 'template_ihwh5uc', emailParams, 'YOUR_USER_ID')
//       .then(response => {
//         console.log('Email successfully sent:', response.status, response.text);
//       })
//       .catch(error => {
//         console.error('Error sending email:', error);
//       });
      
//     res.send('YOU BOOKED YOUR TABLE SUCCESSFULLY');
//   } catch (err) {
//     console.error('Error inserting into database:', err);
//     res.status(500).send('AN ERROR OCCURRED WHILE BOOKING YOUR TABLE');
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });


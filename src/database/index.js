import mysql from 'mysql';

const db = mysql.createConnection({
  host: 'us-cdbr-iron-east-05.cleardb.net',
  user: 'b01344181d33d6',
  password: 'fa6422f8',
  db: 'heroku_123c7439e7f2cbd',
  port: 3306
});

db.on('ready', () => console.log('Database is connected')).on('error', err => {
  console.log('Error in connecting to database');
  console.log(err.message);
});

db.connect(err => {
  if (err) {
    console.log('Error in connecting to database');
    console.log(err.message);
  } else {
    console.log('Success in connecting to database');
  }
});

db.query('USE heroku_123c7439e7f2cbd');

export default db;

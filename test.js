const FlatFileDB = require('./db');
const db = new FlatFileDB(path.join(__dirname, 'database.json'));

try {
  // Create a new record
  db.create('1', { name: 'Alice', age: 30 });
  console.log('Record created:', db.read('1'));

  // Update the record
  db.update('1', { name: 'Alice', age: 31 });
  console.log('Record updated:', db.read('1'));

  // Read all records
  console.log('All records:', db.getAll());

  // Delete the record
  db.delete('1');
  console.log('Record deleted:', db.read('1'));
} catch (error) {
  console.error(error.message);
}

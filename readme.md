```markdown
# FlatFileDB

FlatFileDB is a simple Node.js module for a flat-file database. It uses JSON files to store data and provides basic CRUD (Create, Read, Update, Delete) operations.

## Installation

1. Clone the repository or download the code.
2. Navigate to the project directory.

```sh
cd flat-file-db
```

3. Initialize the project and install dependencies.

```sh
npm init -y
```

## Usage

### Importing and Initializing

First, require the module and initialize it with the path to the database file.

```js
const FlatFileDB = require('./db');
const path = require('path');
const db = new FlatFileDB(path.join(__dirname, 'database.json'));
```

### Creating a Record

To create a new record, use the `create` method with an ID and the record data.

```js
db.create('1', { name: 'Alice', age: 30 });
console.log('Record created:', db.read('1'));
```

### Reading a Record

To read a record, use the `read` method with the record ID.

```js
const record = db.read('1');
console.log('Record read:', record);
```

### Updating a Record

To update an existing record, use the `update` method with the record ID and the new data.

```js
db.update('1', { name: 'Alice', age: 31 });
console.log('Record updated:', db.read('1'));
```

### Deleting a Record

To delete a record, use the `delete` method with the record ID.

```js
db.delete('1');
console.log('Record deleted:', db.read('1'));
```

### Getting All Records

To get all records, use the `getAll` method.

```js
const allRecords = db.getAll();
console.log('All records:', allRecords);
```

## Example

Here's a full example of how to use FlatFileDB:

```js
const FlatFileDB = require('./db');
const path = require('path');
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
```

## License

This project is licensed under the MIT License.
```

This `README.md` provides an overview of the FlatFileDB module, instructions for installation, and examples of how to use the various methods provided by the module.
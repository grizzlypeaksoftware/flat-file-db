const fs = require('fs');
const path = require('path');

class FlatFileDB {
  constructor(dbFilePath) {
    this.dbFilePath = dbFilePath;
    if (!fs.existsSync(dbFilePath)) {
      fs.writeFileSync(dbFilePath, JSON.stringify({}));
    }
  }

  _readDatabase() {
    const data = fs.readFileSync(this.dbFilePath);
    return JSON.parse(data);
  }

  _writeDatabase(data) {
    fs.writeFileSync(this.dbFilePath, JSON.stringify(data, null, 2));
  }

  create(id, record) {
    const db = this._readDatabase();
    if (db[id]) {
      throw new Error(`Record with id ${id} already exists.`);
    }
    db[id] = record;
    this._writeDatabase(db);
  }

  read(id) {
    const db = this._readDatabase();
    return db[id] || null;
  }

  update(id, record) {
    const db = this._readDatabase();
    if (!db[id]) {
      throw new Error(`Record with id ${id} does not exist.`);
    }
    db[id] = record;
    this._writeDatabase(db);
  }

  delete(id) {
    const db = this._readDatabase();
    if (!db[id]) {
      throw new Error(`Record with id ${id} does not exist.`);
    }
    delete db[id];
    this._writeDatabase(db);
  }

  getAll() {
    return this._readDatabase();
  }
}

module.exports = FlatFileDB;

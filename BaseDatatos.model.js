const mongoose = require('mongoose')
const { dbCon } = require('./db');


/** call */
const colection = require('./colection.schema');

/** instance */
const model = {
  Colection: dbCon.model('colection', colection)
}

/** export */
module.exports = model
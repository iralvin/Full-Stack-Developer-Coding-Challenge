const Contact = require('../model/contact');
const { MONGO_DATABASE } = process.env;

let contactsCollection;
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(MONGO_DATABASE, function (err, client) {
  contactsCollection = client.db('rocket').collection('contacts');
});

const getContacts = (req, res, next) => {
  contactsCollection
    .find()
    .toArray()
    .then((contacts) => {
      res.send(contacts);
    });
};

module.exports = { getContacts };

const db = require("../database/dbConfig.js");

module.exports = {
  get,
  insert,
  update,
  remove,
  getById
};

function get() {
  return db("campaigns");
}

function getById(id) {
  return db("campaigns").where({ id }).first();
}

function insert(campaign) {
  return db("campaigns")
    .insert(campaign, "id")
    .then(([id]) => get(id));
}

function update(id, changes) {
    return db("campaigns")
      .where("id", id)
      .update(changes)
      .then(count => (count > 0 ? get(id) : null));
}

function remove(id) {
    return db("campaigns")
      .where("id", id)
      .del();
}
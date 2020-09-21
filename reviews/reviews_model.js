const db = require("../database/dbConfig.js");

module.exports = {
  insert,
  getById,
  get,
  remove
};


function get() {
    return db("reviews");
}

function getById(campaign_id) {
  return db("reviews").where({ campaign_id }).first();
}

function insert(campaign) {
  return db("reviews")
    .insert(campaign, "id")
    .then(([id]) => get(id));
}

function remove(id) {
  return db("reviews")
    .where("id", id)
    .del();
}


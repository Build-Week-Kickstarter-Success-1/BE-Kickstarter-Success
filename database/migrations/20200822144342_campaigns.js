exports.up = function(knex) {
  return knex.schema.createTable('campaigns', campaigns => {
    campaigns.increments();

    campaigns
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    campaigns.integer("monetary_goal").unsigned().notNullable();
    campaigns.text("description").notNullable();
    campaigns.integer("campaign_length").unsigned().notNullable();
    campaigns.text("catagory").notNullable();
  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('campaigns');
};

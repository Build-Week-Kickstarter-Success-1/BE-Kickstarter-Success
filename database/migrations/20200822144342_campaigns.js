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
    campaigns.text("title").notNullable();
    campaigns.text("description").notNullable();
    campaigns.text("launch_date").notNullable();
    campaigns.text("finish_date").notNullable();
    campaigns.text("category").notNullable();
  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('campaigns');
};
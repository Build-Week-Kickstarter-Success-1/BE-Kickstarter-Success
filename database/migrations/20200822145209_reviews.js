exports.up = function(knex) {
    return knex.schema.createTable('reviews', reviews => {
      reviews.increments();

      reviews
        .integer('campaign_id')
        .unsigned()
        .notNullable()
        .unique()
        .references('id')
        .inTable('campaigns')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      reviews.integer("review").unsigned().notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('reviews');
  };

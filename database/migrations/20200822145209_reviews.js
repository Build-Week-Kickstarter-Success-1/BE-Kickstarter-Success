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

      reviews.integer("prediction").unsigned();
      reviews.integer("probability_of_success").unsigned();
      reviews.text("monetary_feedback").unsigned();
      reviews.text("title_feedback").unsigned();
      reviews.text("description_feedback").unsigned();
      reviews.text("campaign_time_feedback").unsigned();
      reviews.text("month_feedback").unsigned();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('reviews');
  };

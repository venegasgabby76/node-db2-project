exports.up = async function (knex) {
  //translates to "CREATE TABLE cars (...)"
  await knex.schema.createTable("cars", (table) => {
    // translates to "id" INTERGER NOT NULL UNIQUE PRIMARY KEY
    // table.integer("id").notNull().unique().primary()
    table.increments("id");
    table.integer("VIN").notNull()
    table.text("Make").notNull().unique()
    table.text("Model").notNull().unique()
    table.integer("Mileage").notNull().unique()
    table.text("Clean").notNull().unique()
    table.text("Salvage").notNull().unique()
  });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("cars")
};

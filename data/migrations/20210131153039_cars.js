
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
      tbl.increments("id");
      tbl.string("VIN", 25).unique().notNullable;
      tbl.string("make").notNullable;
      tbl.string("model").notNullable;
      tbl.string("milage").notNullable;
      tbl.string("transmission").notNullable;
      tbl.string("title").notNullable;
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExisits("cars");
};

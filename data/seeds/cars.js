exports.seed = function (knex) { 
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: '123', make: 'Honda', model: 'Accord' , milage: '20,000', transmission:'', title:'' },
        { VIN: '1234', make: 'Toyota', model: 'Camry', milage: '2,300', transmission:'', title:'' },
        { VIN: '12345', make: 'Mazda', model: 'CX-30', milage: '84,345', transmission:'', title:'' },
        { VIN: '123456', make: 'Subaru', model: 'Impreza', milage: '5,000', transmission:'', title:'' },
      ]);
    });
};
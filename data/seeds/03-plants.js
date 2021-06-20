exports.seed = function(knex) {
  return knex('plants').insert([
    {
      'nickname': 'Sunflower',
      'species': 'Helianthus annuus',
      'h20_frequency': 'an inch of water per week during growing season',
      'plant_img': 'https://images.unsplash.com/photo-1551945326-df678a97c3af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
      // 'user_id': 1
    }
  ])
};

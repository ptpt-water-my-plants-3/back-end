exports.seed = function(knex) {
  return knex('plants').insert([
    {
      'nickname': 'Sunflower',
      'species': 'Helianthus annuus',
      'h20_frequency': 'an inch of water per week during growing season',
      // 'user_id': 1
    }
  ])
};

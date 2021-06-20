exports.seed = function(knex) {
  return knex('plants').insert([
    {
      'nickname': 'Sunflower',
      'species': 'Helianthus annuus',
      'h20_frequency': 'an inch of water per week during growing season',
      'plant_img': 'https://images.unsplash.com/photo-1551945326-df678a97c3af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
      // 'user_id': 1
    },
    {
      'nickname': 'Lily',
      'species': 'Lilium Candidum L',
      'h20_frequency': 'Watering about once a week and spritzing leaves with water throughout the summer will help keep your peace lily hydrated',
      'plant_img': 'https://images.unsplash.com/photo-1561186548-0c154609e33e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80'
    },
    {
      'nickname': 'Lavender',
      'species': 'Lavandula Spica L',
      'h20_frequency': 'Water once or twice a week after planting until plants are established. Water mature plants every two to three weeks until buds form, then once or twice weekly until harvest',
      'plant_img': 'https://images.unsplash.com/photo-1534974576697-331d2db9c9ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    }
  ])
};

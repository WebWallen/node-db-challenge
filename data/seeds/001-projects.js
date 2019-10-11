exports.seed = function(knex) {
  return knex('projects').insert([
    { name: 'Conquer Sprint Challenge', description: 'Doing it right meow', completed: 'false'}, // 1
    { name: 'Make Shelter Dog Website', description: 'All the woofers', completed: 'false'}, // 2
    { name: 'Create Weight Lifting App', description: 'Gonna be a Jacked O-Lantern for Halloween', completed: 'false'} // 3
  ]);
};
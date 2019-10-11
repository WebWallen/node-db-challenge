
exports.up = function(knex) {
    return knex.schema
      .createTable('projects', tbl => {
          tbl.increments(); // unique id
          tbl.string('name', 255).notNullable();
          tbl.text('description');
          tbl.string('completed').notNullable();
      })
  
      .createTable('resources', tbl => {
        tbl.increments(); // unique id
        
        tbl
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('id') // this + below = attaches to foreign key
            .inTable('projects') // ^
            .onUpdate('CASCADE')
            .onDelete('RESTRICT');

        tbl.string('name', 258).unique().notNullable();
        tbl.text('description');
      })    
  
      .createTable('tasks', tbl => {
          tbl.increments(); // unique id
  
          tbl
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('id') // this + below = attaches to foreign key
            .inTable('projects') // ^
            .onUpdate('CASCADE')
            .onDelete('RESTRICT');
            
          tbl.integer('task_number');
          tbl.string('description', 500).notNullable();
          tbl.text('notes');
          tbl.string('completed').notNullable;
      })
  };
  
  exports.down = function(knex) {
    return knex.schema 
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects');
  };
  
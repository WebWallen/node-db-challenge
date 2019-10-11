const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    findResources,
    findTasks
}

function find() {
    return db('projects');
};

function findById(id) {
    return db('projects')
        .where({ id })
        .first();
};

function findResources(projectId) {
    return db('resources')
        .join('projects', 'projects.id', 'resources.project_id')
        .select('projects.name', 'resources.id', 'resources.name', 'resources.description')
        .where({ project_id: projectId });
};

function findTasks(projectId) {
    return db('tasks')
        .join('projects', 'projects.id', 'tasks.project_id')
        .select('projects.name', 'tasks.id', 'tasks.task_number', 'tasks.description', 'tasks.notes')
        .where({ project_id: projectId })
}
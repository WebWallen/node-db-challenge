const express = require('express');

const Projects = require('./project-model');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.find() 
    .then(projects => res.json(projects))
    .catch(err => res.status(500).json({ message: err }))
});

router.get('/:id', (req, res) => {
    Projects.findById(req.params.id) 
    .then(project => {
        if (project) {
            res.json(project);
            if (project.completed === 1) return 'true'
            else return 'false'
        } else {
            res.status(404).json({ message: 'No such project' })
        }
    })
    .catch(err => res.status(500).json({ message: err }))
})

router.get('/:id/resources', (req, res) => {
    Projects.findResources(req.params.id)
    .then(resources => res.json(resources))
    .catch(err => res.status(500).json({ message: err }))
})

router.get('/:id/tasks', (req, res) => {
    Projects.findTasks(req.params.id) 
    .then(tasks => {
        if (tasks) {
            res.json(tasks)
            if (task.completed === 1) return 'true'
            else return 'false'
        } 
        else {
            res.json(404).json({ message: 'No such task' })
        }
    })
    .catch(err => res.status(500).json({ message: err }))
});

module.exports = router;
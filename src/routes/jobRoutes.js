// src/routes/jobRoutes.js
const express = require('express');
const Job = require('../models/Job');
const router = express.Router();

// GET all jobs
router.get('/', async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET a single job by ID
router.get('/:id', async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) return res.status(404).json({ message: 'Job not found' });
        res.json(job);
    } catch (err) {
        res.status(400).json({ message: 'Invalid job ID' });
    }
});

// POST a new job
router.post('/', async (req, res) => {
    const { title, company, type, location, description } = req.body;
    
    // Validate required fields
    if (!title || !company || !type || !location || !description) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const job = new Job(req.body);
    try {
        const savedJob = await job.save();
        res.status(201).json(savedJob);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
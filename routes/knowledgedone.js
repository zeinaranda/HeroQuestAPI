const express = require('express');
const router = express.Router();
const { KnowledgeDone } = require('../models');
const Validator = require('fastest-validator');

const v = new Validator();

// Define validation schema
const schema = {
    quizDone: 'boolean',
    point: { type: 'number', optional: true },
    koin: { type: 'number', optional: true },
    knowledgeId: { type: 'number', optional: true },    
    userId: { type: 'number', optional: true }

};

router.post('/', async (req, res) => {
    // Validate request body
    const validationResult = v.validate(req.body, schema);

    if (validationResult.length > 0) {
        return res.status(400).json(validationResult);
    }

    try {
        // Create question in the database
        const knowledgedone = await KnowledgeDone.create(req.body);
        return res.json(knowledgedone);
    } catch (error) {
        console.error('Error creating question:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/:userId', async(req, res) => {
    const userId = req.params.userId;
    const knowledgedone = await KnowledgeDone.findAll({ where: { userIdId: userId } });
    return res.json(knowledgedone || {});
});

module.exports = router;

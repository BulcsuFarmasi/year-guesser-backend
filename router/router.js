import express from 'express'
import QuestionController from '../controllers/question-controller.js'

const router = express.Router()

const questionController = new QuestionController() 

router.post('/question', async (request, response) => {
    
    await questionController.saveQuestion(request.body);
    response.status(200).json({"creation": "success"})
})

router.get("/question", async (request, response) => {
    const question = await questionController.getQuestion(request.body)
    response.status(200).json(question)
})

export default router;
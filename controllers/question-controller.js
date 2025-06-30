import QuestionRepository from "../repositories/question-repository.js";

export default class QuestionController {
    #repository = new QuestionRepository()

    async saveQuestion(question) {
        await this.#repository.saveQuestion(question)
    }

    async getQuestion(questionsObject) {
        const { questionIds } = questionsObject
        const questions = await this.#repository.getQuestions(questionIds)

        if (questions.length == 0) {
            return;
        } 

        const randomIndex = Math.floor(Math.random() * questions.length)

        return questions[randomIndex];
        
    }
}
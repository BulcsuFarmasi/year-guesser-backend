import { ObjectId } from "mongodb";
import getDatabase from "../database/database-connection.js";

export default class QuestionRepository {

    #collection = "questions"

    constructor() {
        this.#initDatabase()
    } 

    async #initDatabase() {
        this.#collection = (await getDatabase()).collection(this.#collection)
    }



    async saveQuestion(question) {
        this.#collection.insertOne(question)
    }

    async getQuestions(questionIds) {
        const objectQuestionIds = questionIds.map(questionId => ObjectId.createFromHexString(questionId));
        
        const questions = await this.#collection.find({ _id: { $nin: objectQuestionIds } }).toArray();
        questions.forEach(question => {
            question.id = question._id.toHexString()
            delete question._id
        });
        
        return questions;

    }
}
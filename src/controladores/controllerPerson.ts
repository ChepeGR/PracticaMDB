import {Request, Response} from "express";
import Person from "../clases/Person";

class controllerPerson {

    async getAllPerson(request: Request, response: Response){
        try {
            const person = await Person.find();
            response.json(person);
        } catch (error) {
            response.status(500).json({ message: 'Error: getAllPerson' });
        }
    }

    async getPersonByName(request: Request, response: Response){
        const personId = request.params.id;
        try {
            const personName = await Person.findById(personId);
            if (personName) {
                response.json(personName);
            } else {
                response.status(404).json({ message: 'Person not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: getPersonByName' });
        }
    } 


    async createPerson(request: Request, response: Response){
        const {name, lastName} = request.body;

        const newPerson = new Person({
            name,
            lastName,
        })
        try {
            const createdPerson = await newPerson.save();
            response.json(createdPerson);
        } catch (error) {
            response.status(500).json({ message: 'Error: createPerson' });
        }
    }

    async updatePerson(request: Request, response: Response){
        const personId = request.params.id;
        const { name, lastName } = request.body;

        try {
            const newPerson  = await Person.findByIdAndUpdate(
                personId,
                { name, lastName },
                { new: true }
            );

            if (newPerson) {
                response.json(newPerson);
            } else {
                response.status(404).json({ message: 'Person not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: updateLibro' });
        }
    }

    async deletePerson(request: Request, response: Response){
        const personId = request.params.id;

        try {
            const deletedPerson = await Person.findByIdAndDelete(personId);

            if (deletedPerson) {
                response.json(deletedPerson);
            } else {
                response.status(404).json({ message: 'Person not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Error: deletePerson Error' });
        }
    }
}
export default new controllerPerson();
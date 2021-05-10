import Util from '../helpers/Util';
import AnimalService  from '../services/animalService';

const util = new Util();

export default class Animal {
    static async CreateAnimal(req,res) {
        try{
            const animal = {
                name: req.body.name,
                description: req.body.description,
                class: req.body.class
            }
            const newAnimal = await AnimalService.createAnimal(animal);
            util.setSuccess(201,'You have successfuly create a anima', newAnimal);
            return util.send(res);
        }catch(error){
            util.setError(500,console.log(error.message));
            return util.send(res);
        }
    }
    static async retrieveAnimal(req,res) {
        try {
            const animals = await AnimalService.retrieveAnimals();
            util.setSuccess(200,"you have successfully retrieved all animals", animals);
            return util.send(res)
        } catch (error) {
            util.setError(500,console.log(error.message));
            return util.send(res)
        }
    }
    static async findAnimal(req,res){
        try {
            const {id} = req.params;
            const animal = await AnimalService.findAnimalById(id);
            util.setSuccess(200, 'You have successfully retrieved a animal!',animal);
            util.send(res);
        } catch (error) {
            util.setError(500,console.log(error.message));
            return util.send(res)
        }
    }
    static async deleteAnimal(req,res){
        try {
            const {id} = req.params;
            const animal = await AnimalService.deleteAnimal(id);
            util.setSuccess(201, 'You have successfully deleted a animal!',animal);
            util.send(res);
        } catch (error) {
            util.setError(500,console.log(error.message));
            return util.send(res)
        }
    }
    static async updateAnimal(req,res){
        try {
            const animal = {
                name: req.body.name,
                description: req.body.description,
                class: req.body.class
            }
            const  { id } = req.params;
            const updateAnimal = await AnimalService.updateAnimalAt(animal,{id:id});

            util.setSuccess(201,'Animal updated successfully', updateAnimal);
            return util.send(res);
        } catch (error) {
            util.setError(500,console.log(error.message));
            return util.send(res)
        }
    }
}
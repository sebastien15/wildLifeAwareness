import User from '../models/User';

class AnimalService{
    static createUser(newAnimal) {
        return Animal.create(newAnimal);
    }
    static retrieveAnimals(){
        return Animal.findAll();
    }
    static findAnimalById(modelId){
        return Animal.findOne({
            where: {id:modelId},
        });
    }
    static updateAnimalAt(set,prop){   
        return Animal.update(set,{
            where:prop,
        });
    }
    static deleteAnimal(modelId) {
        return Animal.destroy(
            {
                where: {id:modelId}
            }
        );
    }
}

export default AnimalService;
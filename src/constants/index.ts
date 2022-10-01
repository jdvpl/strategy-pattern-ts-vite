import { Animal } from "../patterns/strategy/classes/animals";
import { IAnimalSound } from "../patterns/strategy/interfaces";

export const animal1 = new Animal("Perro", "Gauuu");
export const animal2 = new Animal("Gato", "Miauu");

function animalSound(animal: IAnimalSound) {
  animal.emitSound();
}

animalSound(animal1);
animalSound(animal2);

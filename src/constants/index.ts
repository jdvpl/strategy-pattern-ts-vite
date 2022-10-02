import { SuperLibFactory } from "../patterns/factory/interfaces";
import { SuperLib } from "../patterns/factory/lib/superLib";
import { Animal } from "../patterns/strategy/classes/animals";
import { IAnimalSound } from "../patterns/strategy/interfaces";

// factory methos
export const animal1 = new Animal("Perro", "Gauuu");
export const animal2 = new Animal("Gato", "Miauu");

function animalSound(animal: IAnimalSound) {
  animal.emitSound();
}

// patron fctory sirve como emboltorio para evitar romper la condtruccion de objetos
/* Creating a new instance of the SuperLibFactory class and calling the create method on it. */
const lib = new SuperLibFactory().create("KakarotoLib", { classeAlta: true });

/* Calling the emitSound method on the animal1 object. */
animalSound(animal1);
animalSound(animal2);

console.log(lib.name);

import { IAnimalSound } from "../interfaces";

export class Animal implements IAnimalSound {
  name: string;
  sound: string;
  constructor(name: string, sound: string) {
    this.name = name;
    this.sound = sound;
  }
  emitSound() {
    console.log(this.sound);
  }
}

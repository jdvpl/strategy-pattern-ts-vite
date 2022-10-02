import { SuperLib } from "../lib/superLib";

/* The SuperLibFactory class creates instances of the SuperLib class. */
export class SuperLibFactory {
  create(name: string, options: {}) {
    const id = Math.random().toString(32).slice(2);
    return new SuperLib(id, name, options);
  }
}

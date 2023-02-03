import { IPerson } from "../interfaces/IPerson";
import { Clinic } from "./Clinic";
import { Queue } from "./Queue";

export class Burnaby {
  readonly region = {
    clinic1: new Clinic(20, "1", new Queue(), 50, {
      streetAddress: "1234, some road",
      city: "burnaby",
    }),
  };
}

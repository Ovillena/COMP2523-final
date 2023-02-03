import { ILocation } from "./Ilocation";
import { IPerson } from "./IPerson";

export interface IClinic<T> {
  houseHoldId: number;
  location: ILocation;
  members: IPerson[];
}

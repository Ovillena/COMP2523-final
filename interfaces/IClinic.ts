import { IQueue } from "./IQueue";
import { ILocation } from "./Ilocation";
import { IPerson } from "./IPerson";

export interface IClinic {
  clinicId: number;
  staffSize: number;
  blockNum: string;
  queue: IQueue<IPerson>;
  currentIntake: number;
  location: ILocation;
}

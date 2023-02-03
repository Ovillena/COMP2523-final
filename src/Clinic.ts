import { IClinic } from "../interfaces/IClinic";
import { ILocation } from "../interfaces/Ilocation";
import { IPerson } from "../interfaces/IPerson";
import { IQueue } from "../interfaces/IQueue";
import { Queue } from "./Queue";

export class Clinic implements IClinic {
  clinicId: number;
  private staffSize: number;
  blockNum: string;
  private queue: IQueue<IPerson>;
  currentIntake: number;
  location: ILocation;

  constructor(
    staffSize: number,
    blockNum: string,
    queue: IQueue<IPerson>,
    intake: number,
    location: ILocation
  ) {
    this.clinicId = Math.floor(Math.random() * 10) + 1;
    this.staffSize = staffSize;
    this.blockNum = blockNum;
    this.queue = queue;
    this.currentIntake = intake;
    this.location = location;
  }

  get staff() {
    return this.staffSize;
  }

  get queueList() {
    return this.queue.getQueueList;
  }

  set staffChange(newStaffSize) {
    this.staffSize = newStaffSize;
  }

  addToQueue(person: IPerson) {
    this.queue.enqueue(person);
  }

  removeFromQueue(person?: IPerson) {
    this.queue.dequeue(person);
  }
}

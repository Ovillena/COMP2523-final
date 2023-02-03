import { IQueue } from "../interfaces/IQueue";

export class Queue<T> implements IQueue<T> {
  private storage = [];

  constructor(private capacity: number = 500) {}

  enqueue(entity: T): void {
    if (this.size() > this.capacity) {
      throw new Error("Too many ppl in da Q");
    }
    this.storage.push(entity);
  }
  dequeue(entity?: T): void {
    this.storage.shift();
  }
  size(): number {
    this.storage.length;
  }
  getCurrentWaitTime(): string {
    const wait = this.size() * 15;
    return `The current wait time for this Queue is ${wait} minutes`;
  }

  getQueueList() {
    return this.storage;
  }
}

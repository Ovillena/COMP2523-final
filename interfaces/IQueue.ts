export interface IQueue<T> {
  enqueue(entity: T): void;
  dequeue(entity?: T): void;
  size(): number;
  getCurrentWaitTime(size: number);
  getQueueList();
}

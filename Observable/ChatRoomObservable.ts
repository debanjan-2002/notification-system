import IObservable from "./ObservableInterface";
import IObserver from "../Observer/ObserverInterface";

export default class ChatRoomObservable implements IObservable {
    observerList: IObserver[];
    message: string;

    constructor() {
        this.observerList = [];
        this.message = "";
    }

    add(observer: IObserver): void {
        this.observerList.push(observer);
    }
    remove(observer: IObserver): void {
        this.observerList = this.observerList.filter(ob => ob !== observer);
    }
    notify(): void {
        this.observerList.forEach(observer => observer.update());
    }
    setData(message: string): void {
        this.message = message;
        this.notify();
    }
    getData(): string {
        return this.message;
    }
}

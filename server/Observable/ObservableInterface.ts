import IObserver from ".././Observer/ObserverInterface";

export default interface IObservable {
    add(observer: IObserver): void;
    remove(observer: IObserver): void;
    notify(): void;
    getData(): string;
    setData(message: string): void;
}

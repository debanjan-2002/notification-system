import IObserver from "./ObserverInterface";
import IObservable from "../Observable/ObservableInterface";

export default class MobileObserver implements IObserver {
    observable: IObservable;

    constructor(observable: IObservable) {
        this.observable = observable;
    }
    update(): void {
        console.log("Message for mobile!");
        console.log(this.observable.getData());
    }
}

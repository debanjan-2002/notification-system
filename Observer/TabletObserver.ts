import IObserver from "./ObserverInterface";
import IObservable from "../Observable/ObservableInterface";

export default class TabletObserver implements IObserver {
    observable: IObservable;

    constructor(observable: IObservable) {
        this.observable = observable;
    }
    update(): void {
        console.log("Message for tablet!");
        console.log(this.observable.getData());
    }
}

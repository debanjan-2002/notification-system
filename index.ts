import IObserver from "./server/Observer/ObserverInterface";
import MobileObserver from "./server/Observer/MobileObserver";
import TabletObserver from "./server/Observer/TabletObserver";

import { chatRoom } from "./server/chatRoom";

const observer1: IObserver = new MobileObserver(chatRoom);
const observer2: IObserver = new TabletObserver(chatRoom);

chatRoom.add(observer1);
chatRoom.add(observer2);

// chatRoom.notify();
chatRoom.setData("New message!");
chatRoom.setData("New message2!");

chatRoom.remove(observer1);
chatRoom.setData("Updated message!");
// chatRoom.remove(observer2);

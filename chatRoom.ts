import IObservable from "./Observable/ObservableInterface";
import ChatRoomObservable from "./Observable/ChatRoomObservable";

export const chatRoom: IObservable = new ChatRoomObservable();

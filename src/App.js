import { useEffect } from "react";
import {io} from "socket.io-client"
import Axios from "axios"
const socket = io("http://localhost:80")


function App() {

  useEffect(() => {
    /*
    Axios.get("http://localhost:80/").then((response) => {
      console.log(response.data)
    })*/
    socket.on("RECEIVE_TEST", data => {
      console.log(data)
    })
    socket.on("RECEIVE", data => {
      console.log(data)
    })
  },[])

  const sendRoomMessage = () => {
    socket.emit("SEND_TEST","こんにちは")
  }

  const sendMessage = () => {
    socket.emit("getMessage","こんばんは")
  }

  const joinRoom = () => {
    socket.emit("JOIN_ROOM")
  }

  const leaveRoom = () => {
    socket.emit("LEAVE_ROOM")
  }

  return (
    <div className="App">
      <button onClick={sendRoomMessage}>メッセージを送る</button>
      <button onClick={sendMessage}>メッセージを送る</button>
      <button onClick={joinRoom}>ルームに参加</button>
      <button onClick={leaveRoom}>ルームを退出</button>
    </div>
  );
}

export default App;

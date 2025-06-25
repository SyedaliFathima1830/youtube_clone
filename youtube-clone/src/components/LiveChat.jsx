import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);
  console.log(chatMessage);

  useEffect(() => {
    const i = setInterval(() => {
      console.log("apipolling");

      dispatch(
        addMessage({
          name: "fathima",
          message: "hey this is meee",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);
  return (
    <div>
    <div className="w-full h-[450px] ml-2 border bg-gray-100 p-2 border-black overflow-y-scroll flex flex-col-reverse ">
      {chatMessage.map((c, index) => (
        <ChatMessage key={index} name={c.name} message={c.message} />
      ))}
      
    </div>
    <div className="">yours</div>
    </div>
    
  );
};

export default LiveChat;

import usericon from "../assets/user.png";

const ChatMessage = ({name,message})=>{
return (
    <div className="flex"> 
      <img src={usericon} alt=""className="h-7 px-2" />  
      <span className="font-bold pr-1" >{name}</span>
      <span>{message}</span>

    </div>
)
}
export default ChatMessage
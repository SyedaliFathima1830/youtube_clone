import menuicon from "../assets/burger-menu.svg";
import youtubeicon from "../assets/youtube.svg";
import usericon from '../assets/user.png';
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const Header = () => {
  const dispatch =useDispatch();
  const toggleMenuHandler =()=>{
    dispatch(toggleMenu())
  }
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow w-screen ">
      <div className="flex col-span-1 ">
        <img onClick={()=>toggleMenuHandler()} src={menuicon} alt="menu icon" className="h-8 cursor-pointer " />
        <img src={youtubeicon} alt="youtube icon" className="h-8 mx-1" />
      </div>

      <div className="col-span-12">
        <input type="text" className="w-1/2 px-5  border py-2 border-gray-300 rounded-l-full text-black  " />
        <button className=" border border-gray-300 px-5 py-2 rounded-r-full text-black bg-gray-100">🔍</button>
      </div>

      <div className="col-span-1">
        <img src={usericon} alt="user" className="h-8 "/>
      </div>
    </div>
  );
};
export default Header;

import menuicon from "../assets/burger-menu.svg";
import youtubeicon from "../assets/youtube.svg";
import usericon from "../assets/user.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { PROXY_URL, SUGGESTION_API } from "../utils/constants";
import { CiSearch } from "react-icons/ci";
import { cacheResults } from "../utils/searchSlice";
const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions,setSuggestions] = useState([]);
  const [showSuggestion,setShowSuggestion]=useState(false);
  const searchCache = useSelector((store)=>store.search || {});
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {

      if(searchCache[searchText]){
setSuggestions(searchCache[searchText])
      }else{
        fetchApicall()
        //update cache in redux
//do it in fun
      }
    }
    
     , 300);
    //need to clear , every time the comp is re render destroy the timer and call again
//if the search term is already cashed dont mmake pi calls
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);
  const fetchApicall = async () => {
    const request = await fetch(`${PROXY_URL}${SUGGESTION_API + searchText}`);
    const json = await request.json();
    
    console.log(json);
    setSuggestions(json[1])
    dispatch(cacheResults({
      [searchText]:json[1]
    }))
    // make an api call after every key press
    //if the diff between 2 api calls is 200ms
    //decline the api call
  };
  /**
   * key stroke - i
   * render the component
   * call the useeffect
   * start timer - make api call after 200ms
   *
   * key stroke -ip
   * clear timer
   * re render the componenet
   * call use effect
   * start timer - make api call after 200 ms = this timer is new so need to clear the old
   */

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow w-screen ">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleMenuHandler()}
          src={menuicon}
          alt="menu icon"
          className="h-8 cursor-pointer "
        />
        <img src={youtubeicon} alt="youtube icon" className="h-8 mx-1" />
      </div>

      <div className="col-span-12">
        <input
          type="text"
          className="w-1/2 px-5  border py-2 border-gray-300 rounded-l-full text-black  "
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={()=>setShowSuggestion(true)}
          onBlur={()=>setShowSuggestion(false)}
        />
        <button className=" border border-gray-300 px-5 py-2 rounded-r-full text-black bg-gray-100">
          🔍
        </button>

        <div className="fixed bg-white px-4 w-[24rem] rounded-2xl shadow shadow-gray-100 ">
          <ul className="px-2 py-3  ">
          {  showSuggestion &&  
            (suggestions.map((s,index)=>(
             <li key={index} className="flex p-1"> <CiSearch className="mx-1" /> {s} </li>
            )))
           }
              
           
          </ul>
        </div>
      </div>

      <div className="col-span-1">
        <img src={usericon} alt="user" className="h-8 " />
      </div>
    </div>
  );
};
export default Header;

import { Outlet } from "react-router-dom";
import MainContent from "./MainContent";
import SideBar from "./Sidebar";
const Body = ()=>{
    
    return(
        <div className="flex 
        ">
           < SideBar/>
           <Outlet/>

        </div>
    )
}
export default Body;
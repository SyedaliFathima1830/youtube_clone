import MainContent from "./MainContent";
import SideBar from "./Sidebar";
const Body = ()=>{
    return(
        <div className="flex">
           < SideBar/>
           <MainContent/>

        </div>
    )
}
export default Body;
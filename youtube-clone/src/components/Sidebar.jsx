import { AiFillHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
const SideBar = () => {
  return (
    <div className="w-45 p-5 shadow-lg">
      <div className="">

        <div className="flex items-center gap-1 text-black"> 
          <div><AiFillHome/></div>
          <div>Home</div>
        </div>
        <div className="flex items-center gap-1 text-black"> 
          <div><MdOutlineExplore/></div>
          <div>Explore</div>
        </div>
        <div className="flex items-center gap-1 text-black"> 
          <div><MdOutlineSubscriptions/></div>
          <div>Subscription</div>
        </div>
        
      </div>

      <div>
      <div className="flex items-center gap-1 text-black"> 
          <div><MdVideoLibrary/></div>
          <div>Library</div>
        </div>
        <ul>
          <li>History</li>
          <li>Watch Later</li>
          <li>Liked Videos</li>
          
        </ul>
      </div>

      <div>
        <h1>SUBSCRIPTIONS</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
          <li>Shows</li>
        </ul>
      </div>
      <div>
        <h1>More From Youtube</h1>
        <ul>
          <li>Youtube Premium</li>
          <li>Movies & Shows</li>
          <li>Gaming</li>
        </ul>
      </div>


    </div>
  );
};
export default SideBar;

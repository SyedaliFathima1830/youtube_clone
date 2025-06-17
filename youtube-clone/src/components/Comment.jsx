import { FaUserCircle } from "react-icons/fa";
const Comment =({data})=>{
    const {name,comment} =data 
    return(
        <>
        <div className="flex  bg-gray-100 my-2 rounded-md" >
            <div className="py-5 px-3">
            <FaUserCircle/>
            </div>
        
           <div className="">
           <h3>{name}</h3>
           <h4>{comment}</h4>
           </div>
           

        </div>
        </>
    )
}

export default Comment 
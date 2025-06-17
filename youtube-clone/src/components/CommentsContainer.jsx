
import CommentList from "./CommentList"
const commentsData = [
    {
        name:"fathima",
        comment:"lorem ipsm",
        replies:[
            {
                name:"user1",
                comment:"lorem ipsm",
                replies:[
        
                ]
            },
            {
                name:"user2",
                comment:"lorem ipsm",
                replies:[
                    {
                        name:"user3",
                        comment:"lorem ipsm",
                        replies:[
                
                        ]
                    }
        
                ]
            }

        ]
    },
    {
        name:"new user",
        comment:"lorem ipsm",
        replies:[

        ]
    },
    {
        name:"new user",
        comment:"lorem ipsm",
        replies:[

        ]
    }
]


const CommentContainer = ()=>{
    return(
        <>
        <div>Comments</div>
    <CommentList comments={commentsData}/>
    </>

    )
    
}

export default CommentContainer;
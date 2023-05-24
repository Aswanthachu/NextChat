import { CreateUsernameResponse, graphQLContext } from "../../utils/types";

const resolvers={
    Query:{
        searchUsers:()=>{

        },
    },
    Mutation:{
        createUsername:(_:any,args:{username:string},context:graphQLContext)=>{
            const {username}=args;

            console.log("hiii");
            
            const {session,prisma}=context;
            console.log(username,context);

            console.log(username,context);
            
            
            // if(!session?.user){
            //     return {
            //         error
            //     }
            // }
        },
    },
}

export default resolvers;
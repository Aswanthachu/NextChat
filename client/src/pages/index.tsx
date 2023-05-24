import Auth from "@/components/Auth/Auth";
import Chat from "@/components/Chat/Chat";
import { NextPage, NextPageContext } from "next"
import {getSession, signIn,signOut,useSession} from "next-auth/react";

const Home :NextPage = () => {
  const {data:session} =useSession();
  const reloadSession=()=>{}
  console.log(session);
  
  return (
    <div>
      {session?.user?.username ? <Chat /> : <Auth session={session} reloadSession={reloadSession}/>}
    </div>
  )
}

export async function getServerSideProps(context:NextPageContext) {
  const session=await getSession(context);

  return{
    props:{
      session,
    }
  }
  
}

export default Home;

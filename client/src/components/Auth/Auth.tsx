import { useMutation } from "@apollo/client";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

import UserOptions from "../../graphql/operations/user";
import { CreateUsernameData, CreateUsernameVariables } from "@/utils/types";

interface IAuthProps {
  session: Session | null;
  reloadSession: () => void;
}

const Auth: React.FunctionComponent<IAuthProps> = ({
  session,
  reloadSession,
}) => {

  const [username,setUsername]=useState('');
  const [createUsername,{data,loading,error}]=useMutation<CreateUsernameData,CreateUsernameVariables>(UserOptions.Mutations.createUsername)

  const onSubmit=async()=>{
    try {
      if(!username) return;
      await createUsername({variables:{username}})
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);
  
  return (
    <>
      {session ? (
        <div className="w-full h-screen flex flex-col justify-center items-center gap-5 max-w-xs mx-auto text-center space-y-4">
          <h1 className="text-3xl font-bold w-full">Create a User Name</h1>
          <input placeholder="Enter a username" value={username} onChange={(e)=>setUsername(e.target.value)} className="border p-2 rounded focus:outline-none w-full"/>
          <button onClick={onSubmit} className="border py-1 px-5 rounded-xl font-semibold w-full">Save</button>
        </div>
      ) : (
        <div className="w-full h-screen flex flex-col justify-center items-center gap-8">
          <h1 className="text-4xl font-bold">Imessage</h1>
          <button
            onClick={() => signIn("google")}
            className="border p-3 rounded-lg font-medium flex items-center gap-2"
          >
            <Image
              src="/images/googlelogo.png"
              alt="google"
              width="30"
              height="30"
            />
            Continue with Google
          </button>
        </div>
      )}
    </>
  );
};

export default Auth;

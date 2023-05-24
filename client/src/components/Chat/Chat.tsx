import { signOut } from 'next-auth/react';

interface IChatProps {
}

const Chat: React.FC<IChatProps> = (props) => {
  return (
    <div>
      Chat
      <button onClick={()=>signOut()}>Sign Out</button>
    </div>
  );
};

export default Chat;

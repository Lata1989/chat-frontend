import React from "react";
import { ChatData } from "../context/ChatContext";

const Header = () => {
  const { chats } = ChatData();
  return (
    <div>
      <p className="text-lg mb-6">Hola! Como te puedo ayudar?</p>
      {chats && chats.length === 0 && (
        <p className="text-lg mb-6">Crea un nuevo chat para continuar.</p>
      )}
    </div>
  );
};

export default Header;

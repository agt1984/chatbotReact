import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  //funcion para despues de que da el nombre
  const afterNameMessage = () => {
    const message = createChatBotMessage("Dejame saber tu edad para poder sugerirte algo");
    updateState(message);
  };

  //funcion para la accion inicial del bot
  const initialAction = () => {
    const message = createChatBotMessage("Teclea tu nombre para comenzar");
    updateState(message);
  };

  const updateState = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message], //mensaje principal y los mensajes previos
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initialAction,
            afterNameMessage
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;

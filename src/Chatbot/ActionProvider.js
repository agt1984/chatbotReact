import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const initialAction = () => {
        const message = createChatBotMessage('Teclea tu nombre para comenzar.');
        updateState(message, "age")
    }

    const afterNameMessage = () => {
        const message = createChatBotMessage("Dejame saber tu edad para escojerte una moto o bici ideal.")
        updateState(message, "preference")
    }

    const afterAgeMessage = () => {
        const message = createChatBotMessage("prefieres una experiencia rapida y emocioante o algo mas suave o tranquilo?", {
            widget: "startSlow"
        })
        updateState(message)
    }

    const finalResult = (name, age, preference, vehicle) => {
        const message = createChatBotMessage(`Bien, ${name}! basado en tu edad ${age} y vehiculo de preferencia ${preference}, Yo te recomiendo '${vehicle}.' Disfruta la cabalgada!`, {
            widget: "finalImage"
        })
        updateState(message)
    }

    const updateState = (message, checker) => {
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
            checker,
        }))
    }

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        initialAction,
                        afterNameMessage,
                        afterAgeMessage,
                        finalResult
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;
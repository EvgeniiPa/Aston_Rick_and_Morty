import React, { FC } from 'react';


type ButtonFormProps = {
    type: "submit" | "reset" | "button" | undefined,
    children: React.ReactNode,
    className:string
    
}
const ButtonForm: FC<ButtonFormProps> = ({ type, children,className,...props }) => {

    return (
        <button className={className} type={type} {...props}>{children}</button>
    );
};

export default ButtonForm;
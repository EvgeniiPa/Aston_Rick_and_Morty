import React, { FC } from 'react';


type ButtonFormProps = {
    type: "submit" | "reset" | "button" | undefined,
    children: React.ReactNode,
}
const ButtonForm: FC<ButtonFormProps> = ({ type, children,...props }) => {

    return (
        <button type={type} {...props}>{children}</button>
    );
};

export default ButtonForm;
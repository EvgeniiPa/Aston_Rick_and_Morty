import React, { FC } from 'react';


type ButtonFormProps = {
    type: "submit" | "reset" | "button" | undefined,
    children: React.ReactNode,
    className: string,
    handleClick?: () => void,
    


}
const ButtonForm: FC<ButtonFormProps> = ({ type, handleClick,children, className, ...props }) => {

    return (
        <button className={className} onClick={handleClick} type={type} {...props}>{children}</button>
    );
};

export default ButtonForm;
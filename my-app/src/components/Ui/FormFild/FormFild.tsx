import React, { FC, ReactNode } from 'react';

type FormFildProps = {
    label: string,
    children: React.ReactNode
    errorMessage?: string
}

const FormFild: FC<FormFildProps> = ({ label, children,errorMessage }) => {
    return (
        <label>
            <span>{label}</span>
            {children}
            <span style={{color:'red'}}>{errorMessage}</span>
        </label>
    );
};

export default FormFild;
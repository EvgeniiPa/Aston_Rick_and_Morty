import React, { FC, ReactNode } from 'react';

type FormFildProps = {
    label: string,
    children: React.ReactNode
}

const FormFild: FC<FormFildProps> = ({ label, children }) => {
    return (
        <label>
            <span>{label}</span>
            {children}
        </label>
    );
};

export default FormFild;
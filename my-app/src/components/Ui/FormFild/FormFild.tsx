import React, { FC, ReactNode } from 'react';

type FormFildProps = {
    label: string,
    children: React.ReactNode
    errorMessage?: string
    colorErrorMes?:string
}

const FormFild: FC<FormFildProps> = ({ label, children,  colorErrorMes, errorMessage }) => {
    return (
        <>

            <label>
                <span>{label}</span>
                {children}
            </label>
            <span className={colorErrorMes}>{errorMessage}</span>
        </>
    );
};

export default FormFild;
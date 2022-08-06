import React, { ReactNode } from "react"

type Props = {
    children: ReactNode;
}

export const H1: React.FC<Props> = ({ children }) => <h1>{children}</h1>;

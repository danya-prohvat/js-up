import { FC } from "react";

export const Title: FC<{title: string}> = ({title}) => {

    return (
        <h1>{title}</h1>
    );
};
'use client'

import React, { FC, useEffect, useState } from "react";
import styles from './rule.module.css'

interface CodeProps {
    styles: any
    styleGroup: string
    property: string
    value: string
}

export const Code: FC<CodeProps> = ({property, value: valueMain, styles, styleGroup}) => {

    return (
        <>
            {`.${styleGroup} {`} <br />
            {styles.map(({style, value, main}: any, idx: number) => 
                <>
                    {!main ? 
                        <>&nbsp; {style}: {value}; <br /></>
                    : 
                        <>&nbsp; {property}: {valueMain}; <br /></>
                    }
                </>
            )} 
            {' }'} <br />
        </>
    );
};
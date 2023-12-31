'use client'

import { FC, useState } from "react";
import styles from './rule.module.css'
import { Code } from "./Code";
import copyIcon from '@assets/imgs/copy-icon.png';
import Image from "next/image";

type IRule = {
    property: string
    values: string[]
    styles: any
    mark: 'flex' | 'grid'
}

export const Rule: FC<IRule> = ({property, values, mark, styles: styleList}) => {
    const [currentRule, setCurrentRule] = useState(0);

    const copyButton = () => {
        navigator.clipboard.writeText(`${property}: ${values[currentRule]};`)
    }

    const mainStylesObj = {}
    const mainStyles = styleList.parent.filter((style: any) => !style.main)
    mainStyles.forEach((item: any) => {
        //@ts-ignore
        mainStylesObj[item.style] = item.value
    })

    const childActiveStylesObj = {}
    const childActiveStyles = styleList.childActive.filter((style: any) => !style.main)
    childActiveStyles.forEach((item: any) => {
        //@ts-ignore
        childActiveStylesObj[item.style] = item.value
    })

    const childStylesObj = {}
    const childStyles = styleList.child.filter((style: any) => !style.main)
    childStyles.forEach((item: any) => {
        //@ts-ignore
        childStylesObj[item.style] = item.value
    })

    const parentStyle = {}
    const childStyle = {}
    const childActiveStyle = {}

    //@ts-ignore
    if (styleList.parent.some(style => style.main)) parentStyle[property] = values[currentRule]
    //@ts-ignore
    if (styleList.child.some(style => style.main)) childStyle[property] = values[currentRule]
    //@ts-ignore
    if (styleList.childActive.some(style => style.main)) childActiveStyle[property] = values[currentRule]

    return (
        <div className={styles.rule}>
            <h2 className={styles.ruleH2}>{property}</h2>
            <ul className={styles.ruleUl}>
                {values.map((value, idx) => 
                    <li onClick={() => setCurrentRule(idx)} className={`${styles.ruleLi} ${idx === currentRule && styles.ruleLi__active}`}  key={idx}>
                        <h6 className={styles.ruleH6}>{value.toUpperCase()}</h6>
                    </li>
                )}
            </ul>
            <div className={styles.code}>
                <div className={styles.codePlayground}>
                    <div style={{...mainStylesObj, ...parentStyle}} className={styles.parent}>
                        {mark === 'flex' ? <>
                            <div style={{...childStylesObj, ...childStyle}} className={styles.codePlaygroundBlock}>1</div>
                            <div style={{...childActiveStylesObj, ...childStylesObj, ...childActiveStyle}} className={styles.codePlaygroundBlock}>2</div>
                            <div style={{...childStylesObj, ...childStyle}} className={styles.codePlaygroundBlock}>3</div>
                            <div style={{...childStylesObj, ...childStyle}} className={styles.codePlaygroundBlock}>4</div>
                        </> : <>
                            <div style={{...childStylesObj, ...childStyle}} className={styles.codePlaygroundBlock}>1</div>
                            <div style={{...childActiveStylesObj, ...childStylesObj, ...childActiveStyle}} className={styles.codePlaygroundBlock}>2</div>
                            <div style={{...childStylesObj, ...childStyle}} className={styles.codePlaygroundBlock}>3</div>
                            <div style={{...childStylesObj, ...childStyle}} className={styles.codePlaygroundBlock}>4</div>
                            <div style={{...childStylesObj, ...childStyle}} className={styles.codePlaygroundBlock}>5</div>
                            <div style={{...childStylesObj, ...childStyle}} className={styles.codePlaygroundBlock}>6</div>
                            <div style={{...childStylesObj, ...childStyle}} className={styles.codePlaygroundBlock}>7</div>
                            <div style={{...childStylesObj, ...childStyle}} className={styles.codePlaygroundBlock}>8</div>
                            <div style={{...childStylesObj, ...childStyle}} className={styles.codePlaygroundBlock}>9</div>
                        </>}
                    </div>
                </div>
                <div className={styles.codeExample}>
                    <code className={styles.codeTag}>

                        {styleList.parent.length ?                       
                            <Code value={values[currentRule]} property={property} styleGroup='parent' styles={styleList.parent} />
                        : ''}
                        {styleList.child.length ?
                            <Code value={values[currentRule]} property={property} styleGroup='child' styles={styleList.child} />
                        : ''}
                        {styleList.childActive.length ? 
                            <Code value={values[currentRule]} property={property} styleGroup='childActive' styles={styleList.childActive} />
                        : ''}

                        <div onClick={copyButton} className={styles.codeCopy}>
                            <Image src={copyIcon} width={30} height={30} alt="copy icon"/>
                        </div>
                    </code>
                </div>
            </div>
        </div>
    );
};
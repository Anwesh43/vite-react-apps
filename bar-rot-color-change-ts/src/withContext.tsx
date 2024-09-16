
import * as React from "react";
import { useAnimatedScale, useDimension } from "./hooks";

const withContext = (MainComponent : React.FC<any>) => {
    return (props : any) => {
        const {w, h} = useDimension()
        const {scale, start : onClick, i} = useAnimatedScale()
        const newProps = {
            ...props,
            w,
            h, 
            scale, 
            i,
            onClick 
        }
        return <MainComponent {...newProps}></MainComponent>
    }
} 

export default withContext
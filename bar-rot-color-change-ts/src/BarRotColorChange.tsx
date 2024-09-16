import { useStyle } from "./hooks";
import withContext from "./withContext";

interface BRCCProps {
    w : number, 
    h : number, 
    i : number, 
    onClick : () => void, 
    scale : number, 
}

const BarRotColorChange : React.FC<BRCCProps> = (props : BRCCProps) => {
    const {barStyle} = useStyle(props.i, props.w, props.h, props.scale)
    return (
        <div onClick = {onClick} style = {barStyle()}>

        </div>
    )
}

export default BRCCProps

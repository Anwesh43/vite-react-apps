import {useState, useEffect, CSSProperties} from 'react'

const colors : Array<string> = [
    "#1A237E",
    "#EF5350",
    "#AA00FF",
    "#C51162",
    "#00C853"
]
export const useAnimatedScale = (scGap : number = 0.01, delay : number = 20) => {
    const [scale, setScale] = useState<number>(0)
    const [animated, setAnimated] = useState<boolean>(false)
    const [i, setI] = useState<number>(0)
    return {
        i, 
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prev : number) => {
                        if (prev > 1) {
                            setAnimated(false)
                            clearInterval(interval)
                            setI(i % colors.length)
                            return 0
                        }
                        return prev + scGap 
                    })
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        const resizeListener = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        window.addEventListener('resize', resizeListener, false)
        return () => {
            window.removeEventListener('resize', resizeListener)
        }
    })
    return {
        w, 
        h, 
    }
}

export const useStyle = (i : number, w : number, h : number, scale : number) =>{
    const background = colors[i]
    const position = 'absolute'
    const size = Math.min(w, h) / 12 
    return {
        barStyle() : CSSProperties {
            const width = `${size}px`
            const top = `${w / 2 - size / 2}px`
            const height = `${size}px`
            const left = `${h / 2 - size / 2}px`
            return {
                position, 
                background,
                top,
                left, 
                width, 
                height, 
            }
        } 
    }
}
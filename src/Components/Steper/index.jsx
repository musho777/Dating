import './style.css'
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import LinearProgress from '@mui/material/LinearProgress'

export default function Steper({ progress }) {
    const [progressPercent, setProgressPercent] = useState(progress)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        setProgressPercent(progressPercent + 20)
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <Box sx={screenWidth <= 425 ? { width: '80%', margin: '10px 0' } : { width: '300px', margin: '10px 0' }}>
            <LinearProgress color="secondary" variant="determinate" value={progressPercent} />
        </Box>
    )
}

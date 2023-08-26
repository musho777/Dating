import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import './style.css'

export default function Steper({ progress }) {
    return (
        <Box sx={{ width: '300px', margin: '25px 0' }}>
            {progress > 0 && <LinearProgress color="secondary" variant="determinate" value={progress} />}
        </Box>
    );
}

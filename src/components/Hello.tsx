import { Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

const Hello = () => {
    const onClick = () => {
        alert('hello')
    }
    const [text, setText] = useState('');
    useEffect(() => {
        setText('Hello, React')
    }, [])
    return (
        <Stack onClick={onClick} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography component={'span'} variant='body1' >{text}</Typography>
        </Stack>
    )
}

export default Hello

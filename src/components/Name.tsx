import { Box, InputLabel, TextField } from '@mui/material';
import React, { useState } from 'react'

const Name = () => {
    const [name, setName] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    return (
        <Box style={{ padding: '16px', backgroundColor: 'gray' }}>
            <InputLabel htmlFor='name'>이름</InputLabel>
            <TextField id='name' className='input-name' type='text' onChange={onChange} value={name} variant='outlined' color='primary' size='small' />
        </Box>
    )
}

export default Name

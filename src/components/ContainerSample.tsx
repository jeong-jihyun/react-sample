import { Box, Stack, Typography } from '@mui/material';
import React from 'react'

interface Props {
    title: string
    children: React.ReactNode
}

const Container = (props: Props) => {
    const { title, children } = props;

    return (
        <Stack sx={{ backgroundColor: 'gray' }}>
            <Typography component={'span'} variant='body2'>{title}</Typography>
            <Box>{children}</Box>
        </Stack>
    )
}
const Parent = () => {
    return (<Container title='Hello'><Typography component={'p'} variant='body1'>이부분이 배경색으로 둘러싸여 있습니다.!!</Typography></Container>)
}

export default Parent

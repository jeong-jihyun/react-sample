import { Typography } from '@mui/material'
import React from 'react'

interface Props {
    context: string
}

const Text = (props: Props) => {
    const { context } = props
    return <Typography component={'p'} className='text'>{context}</Typography>
}

const Message = () => {
    const context1 = 'This is parent component'
    const context2 = 'Message uses Text component'
    return (
        <div>
            <Text context={context1} />
            <Text context={context2} />
        </div>
    )
}


export default Message

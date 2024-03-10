import { Typography, Button } from '@mui/material'
import React, { useReducer } from 'react'

type Action = 'INCREMENT' | 'DECREMENT' | 'DOUBLE' | 'RESET'

const reducer = (currentCount: number, action: Action) => {
    switch (action) {
        case 'INCREMENT':
            return currentCount + 1
        case 'DECREMENT':
            return currentCount - 1
        case 'DOUBLE':
            return currentCount * 2
        case 'RESET':
            return 0
        default:
            return currentCount
    }
}
interface IProps {
    initialValue: number
}

const Counter = (props: IProps) => {
    const { initialValue } = props;

    const [count, dispatch] = useReducer(reducer, initialValue)
    return (
        <div>
            <Typography component={'p'}>{count}</Typography>
            <Button variant='contained' color='info' size='small' onClick={() => dispatch('DECREMENT')}>-</Button>
            <Button variant='contained' color='info' size='small' onClick={() => dispatch('INCREMENT')}>+</Button>
            <Button variant='contained' color='info' size='small' onClick={() => dispatch('DOUBLE')}>x2</Button>
            <Button variant='contained' color='info' size='small' onClick={() => dispatch('RESET')}>Reset</Button>
        </div>
    )
}

export default Counter

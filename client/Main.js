import React, { useState } from 'react'
import socket from './socket'

const Main = () => {
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        socket.emit('new-message', message)
        setMessage('')
    }
    return <div>
        Hello, World
        <form onSubmit={handleSubmit}>
            <input value={message} onChange={(e) => setMessage(e.target.value)}/>
            <button type='submit'>Send</button>
        </form>
    </div>
}

export default Main
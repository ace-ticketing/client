import { useState } from 'react';

export default () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (event) => {
        event.preventDefault();
        console.log({ email, password })

    }

    return (
        <form onSubmit={onSubmit}>
            <h1>Signup</h1>
            <div className='form-group'>
                <lable>Email Address</lable>
                <input className='form-control'
                    value={email}
                    onChange={e => setEmail(e.target.value)}></input>
            </div>
            <div className='form-group'>
                <lable>Password</lable>
                <input type='password' className='form-control'
                    value={password}
                    onChange={e => setPassword(e.target.value)}></input>
            </div>
            <button className='btn btn-primary'>Sigh Up</button>
        </form>
    )
}
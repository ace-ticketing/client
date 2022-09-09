import { useState } from 'react';
import useRequest from '../../hooks/use-request';

export default () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { doRequest, errors } = useRequest({
        url: '/api/users/signup',
        method: 'post',
        body: {
            email,
            password
        }
    })

    const onSubmit = async (event) => {
        event.preventDefault();
        doRequest()
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
            {errors}
            <button className='btn btn-primary'>Sigh Up</button>
        </form>
    )
}
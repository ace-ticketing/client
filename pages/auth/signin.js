import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

export default () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { doRequest, errors } = useRequest({
        url: '/api/users/signin',
        method: 'post',
        body: {
            email,
            password
        },
        onSuccess: () => Router.push('/')
    })

    const onSubmit = async (event) => {
        event.preventDefault();
        doRequest()
    }

    return (
        <form onSubmit={onSubmit}>
            <h1>Sign In</h1>
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
            <button className='btn btn-primary'>Sign In</button>
        </form>
    )
}
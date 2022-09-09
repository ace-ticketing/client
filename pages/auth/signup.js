import { useState } from 'react';
import axios from 'axios';

export default () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    const onSubmit = async (event) => {
        event.preventDefault();
        console.log({ email, password })
        try {
            const response = await axios.post('/api/users/signup', {
                email, password
            })
            console.log(response.data)
        } catch (error) {
            setErrors(error.response.data.errors)
        }
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
            {errors.length > 0 && <div className='alert alert-danger'>
                <h4>Ooops...</h4>
                <ul className='my-0'>
                    {errors.map(error => <li key={error.message}>{error.message}</li>)}
                </ul>
            </div>}
            <button className='btn btn-primary'>Sigh Up</button>
        </form>
    )
}
import React from 'react'


//Component

const Login = (props) => {
    const { change, submit, errors } = props;
    const { username, password, disabled } = props.values;


    const onChange = (evt) => {
        const {name, value, type} = evt.target;
        change(name, value, type);
        
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }
    

    return(


        <div>
         <h1>Login</h1>
            <div>{errors.username}</div>
            <div>{errors.password}</div>
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input type="text" 
                    name="username" 
                    value={username} 
                    onChange={onChange}
                    />
                </label>
                <label>Password:
                    <input type="password" 
                    name="password" 
                    value={password} 
                    onChange={onChange}
                    />
                </label>
                <button id='submit' disabled={disabled}>submit</button>
                <button id='create-account' disabled={disabled}>Create Account</button>
            </form>
           
        </div>
    )
};

//Export

export default Login;

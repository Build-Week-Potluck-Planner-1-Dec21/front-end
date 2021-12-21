import React from 'react'


//Component

const Login = (props) => {

    const { change, submit, errors } = props;
    // const { username, password, disabled } = props.values;


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
            <div>Errors here</div>
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input type="text" 
                    name="username" 
                    onChange={onChange}
                    />
                </label>
                <label>Password:
                    <input type="password" 
                    name="password" 
                    onChange={onChange}
                    />
                </label>
                <button id='submit' >submit</button>
                <button id='create-account' >Create Account</button>
            </form>
           
        </div>
    )
};

//Export

export default Login;

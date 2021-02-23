import React from 'react'

import FormInput from '../form-input/FormInput.component'
import CustomButton from '../custom-button/CustomButton.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({ email: '', password: '' })
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }



    render() {
        return (
            <div className="sign-in">
                <h1>I already have an account</h1>
                <span>Sign in With email and password</span>

                <form action="" onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="email"
                        required

                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in With Google</CustomButton>
                    </div>

                </form>
            </div>
        )
    }


}


export default SignIn
import React from "react";
import Header from "Layouts/common/Header";
import {Button, Link, Logo} from "Components";
import Form from "Blocks/Form";
import styles from '../Auth.module.css';
import validationSchema from "Validators";
import {useDispatch} from "react-redux";
import {userActions} from "Redux/actions";
import {useNavigate} from "react-router-dom";

const { Item } = Form;

const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitFunc = data => {
        dispatch(userActions.addNewUser(data));
        navigate('/auth/sign-in');
    }

    return (
        <div className='margin-bottom-xl-500'>
            <Header color='primary' className='d-flex jc-between align-items-center margin-bottom-xl-500'>
                <Logo/>
                <Link to='/auth/sign-in'>
                    <Button>Sign in</Button>
                </Link>
            </Header>
            <div className="container d-flex align-items-center direction-column">
                <h2 className='text-center text-color-400 margin-bottom-xl-300'><b
                    className='text-color-900 text-weight-400'>Rival</b>CMS</h2>
                <Form
                    className={`${styles.form} align-items-end`}
                    initialValues={{fullName: '', email: '', password: ''}}
                    validationSchema={validationSchema.signUpForm}
                    onSubmit={submitFunc}
                >
                    <Item
                        inputType='text'
                        label='Full name'
                        name='fullName'
                        icon='user'
                        required
                        autocomplete='full name'
                    />
                    <Item
                        inputType='text'
                        label='Email address'
                        name='email'
                        icon='mail'
                        autocomplete='email'
                    />
                    <Item
                        inputType='password'
                        label='Password'
                        name='password'
                        icon='lock'
                        autocomplete='new-password'
                    />
                    <Button type='submit' color='accent' size='middle'>Register</Button>
                </Form>
            </div>
        </div>
        )
};

export default Register;

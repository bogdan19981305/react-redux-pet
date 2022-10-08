import React from "react";
import Header from "Layouts/Header";
import {Button, Link, Logo} from "Components";
import Form from "Blocks/Form";
import styles from './Register.module.css';

const { Item } = Form;

const Register = () => (
    <div className='margin-bottom-xl-500'>
        <Header color='primary' className='d-flex jc-between align-items-center margin-bottom-xl-500'>
            <Logo />
            <Link to='/auth/sign-in'>
                <Button>Sign in</Button>
            </Link>
        </Header>
        <div className="container d-flex align-items-center direction-column">
            <h2 className='text-center text-color-400 margin-bottom-xl-300'> <b className='text-color-900 text-weight-400'>Rival</b>CMS</h2>
            <Form
                className={`${styles.form} align-items-end`}
            >
                <Item
                    inputType='text'
                    label='Full name'
                    icon='user'
                />
                <Item
                    inputType='text'
                    label='Email address'
                    icon='mail'
                />
                <Item
                    inputType='text'
                    label='Password'
                    icon='lock'
                />
                <Button color='accent' size='middle'>Register</Button>
            </Form>
        </div>
    </div>
);

export default Register;

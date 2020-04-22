import {Checkbox, Form, Input} from "antd";
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {Button} from "../../../components";
import React from "react";
import {Link} from 'react-router-dom'
import Block from "../../../components/Block";

const onFinish = values => {
    console.log('Received values of form: ', values);
};

class LoginForm {
    render() {
        return (
            <div>
                <div className="auth__top">
                    <h2>Войти в аккаунт</h2>
                    <p>Пожалуйста, войдите в свой аккаунт</p>
                </div>
                <Block>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input
                                size="large"
                                prefix={<UserOutlined className="site-form-item-icon"/>}
                                placeholder="Username"/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input
                                size="large"
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                        </Form.Item>

                        <Form.Item>
                            <Button size="large" type="primary" htmlType="submit" className="login-form-button">
                                Войти в аккаунт
                            </Button>
                        </Form.Item>

                        <Form.Item>
                            <Link href="#" to="/register">Зарегистрироваться</Link>
                        </Form.Item>
                    </Form>
                </Block>
            </div>
        )
    }
}

export default LoginForm;
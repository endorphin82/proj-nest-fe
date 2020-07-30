import React, {FormEvent} from 'react';
import {Form, Input, Button, Checkbox} from 'antd';
import {Link} from 'react-router-dom';

import Icon from '@ant-design/icons';
import './styles.scss';

// interface ILoginFormProps {
//     handleSubmit(values: ILoginArguments): void,
//
//     handleError(error: any): void,
// }

export default function LoginForm() {
  function onSubmit(e: FormEvent): void {
    e.preventDefault();
    // props.form.validateFields((error: any, values: any) => {
    //     if (error) {
    //         return props.handleError(error);
    //     }
    //     props.handleSubmit(values);
    // });
  }

  return (
    // @ts-ignore
    <Form onSubmit={onSubmit} className="login-form">
      {/*<h3 className="main-label">LOG IN</h3>*/}
      <Form.Item
        rules={[{required: true, message: 'Please input your email!'}]}
      >
        <Input
          type="email"
          prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
          placeholder="Email"
        />
      </Form.Item>

      <Form.Item>
        <Input
          // @ts-ignore
          prefix={<Icon type="lock" theme="filled" style={{color: 'rgba(0,0,0,.25)'}}/>}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Link to="/forgot" className="login-form-forgot">
          Forgot password
        </Link>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Link to="/signup">register now!</Link>
      </Form.Item>
    </Form>
  )
}

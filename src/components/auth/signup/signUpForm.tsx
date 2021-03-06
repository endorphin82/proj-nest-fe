import React, {FormEvent} from 'react';
import {Form, Input, Button, Select} from 'antd';
import './styles.scss';
import {Link} from 'react-router-dom';
import Icon from '@ant-design/icons';
import { LockOutlined, MailOutlined, UserOutlined, IdcardOutlined, ManOutlined, WomanOutlined } from '@ant-design/icons';

const {Option} = Select;

interface ISignUpFormProps {
  handleSubmit(values: any): void;

  handleError(error: any): void;
}

// @ts-ignore
export default function SignUpForm() {
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
    <Form onSubmit={onSubmit} className="signup-form" layout="horizontal">
      {/*<h3 className="main-label">SIGN UP</h3>*/}
      <Form.Item>
        <Input
          type="text"
          // @ts-ignore
          prefix={<UserOutlined theme="filled" style={{color: 'rgba(0,0,0,.25)'}}/>}
          placeholder="First Name"
        />
      </Form.Item>
      <Form.Item>
        <Input
          type="text"
          // @ts-ignore
          prefix={<IdcardOutlined theme="filled" style={{color: 'rgba(0,0,0,.25)'}}/>}
          placeholder="Last Name"
        />
      </Form.Item>
      <Form.Item>

        <Select placeholder="Select gender">
          <Option
            value="male"><ManOutlined style={{color: 'rgba(0,0,0,.25)'}}/> Male</Option>
          <Option value="female"><WomanOutlined style={{color: 'rgba(0,0,0,.25)'}}/> Female</Option>
        </Select>
      </Form.Item>
      <Form.Item>

        <Input
          type="email"
          // @ts-ignore
          prefix={<MailOutlined theme="filled" style={{color: 'rgba(0,0,0,.25)'}}/>}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item>

        <Input.Password
          // @ts-ignore
          prefix={<LockOutlined theme="filled" style={{color: 'rgba(0,0,0,.25)'}}/>}
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Input.Password
          // @ts-ignore
          prefix={<LockOutlined theme="filled" style={{color: 'rgba(0,0,0,.25)'}}/>}
          placeholder="Confirm Password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="signup-form-button">
          Sign Up
        </Button>
        Or <Link to="/">Log In</Link>
      </Form.Item>
    </Form>
  )
}

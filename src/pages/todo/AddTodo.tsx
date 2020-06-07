import React from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../domain/action';

const AddTodo: React.FC = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const handleAddTodo = (values: any) => {
        dispatch(addTodo({ title: values.title }));
        form.resetFields();
    };
    return (
        <div>
            <Form onFinish={handleAddTodo} form={form}>
                <Form.Item label="Todo" name="title">
                    <Input></Input>
                </Form.Item>
                <Form.Item>
                    <Button type={'primary'} htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AddTodo;

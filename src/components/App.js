import React from 'react';

import { Button } from 'element-react/next';
import { Input }  from 'element-react/next';
import { Form }   from 'element-react/next';

class App extends React.Component {
    constructor(props) {
        super(props);
              
        this.state = {
            form: {
                name: '',
                recipient: '',
                sender: '',
                region: '',
                date1: null,
                date2: null,
                type: [],
                resource: '',
                desc: ''
            },
            rules: {
                recipient: [
                    { type: 'email', required: true, message: "Please input recipient's email address", trigger: 'blur' }
                ],
                sender: [
                    { type: 'email', required: true, message: "Your email address", trigger: 'blur' }
                ],
                region: [
                    { required: true, message: 'Please select Activity zone', trigger: 'change' }
                ],
                date1: [
                    { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
                ],
                date2: [
                    { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }
                ],
                type: [
                    { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
                ],
                resource: [
                    { required: true, message: 'Please select activity resource', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: 'Please input message', trigger: 'blur' }
                ]
            }
        };
    }

    
              
    handleSubmit(e) {
        e.preventDefault();
              
        this.refs.form.validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    }
              
    handleReset(e) {
        e.preventDefault();
              
        this.refs.form.resetFields();
    }
              
    onChange(key, value) {
        this.setState({
            form: Object.assign({}, this.state.form, { [key]: value })
        });
    }
              
    render() {
        return (
            <Form labelPosition='top' style={{fontFamily: 'Helvetica Neue'}} ref="form" className="en-US" model={this.state.form} rules={this.state.rules} labelWidth="120">
                <Form.Item label="To" prop="recipient">
                    <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'recipient')}></Input>
                </Form.Item>

                <Form.Item label="From" prop="sender">
                    <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'sender')}></Input>
                </Form.Item>
                
                <Form.Item label="Message" prop="desc">
                    <Input type="textarea" value={this.state.form.desc} onChange={this.onChange.bind(this, 'desc')}></Input>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" onClick={this.handleSubmit.bind(this)}>Create</Button>
                    <Button onClick={this.handleReset.bind(this)}>Reset</Button>
                </Form.Item>
            </Form>
        )           
    }
}

export default App;
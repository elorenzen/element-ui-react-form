import React from 'react';

import { Button, 
         Layout,
         Input,
         Form,
         Card } from 'element-react/next';


class App extends React.Component {
    constructor(props) {
        super(props);
              
        this.state = {
            form: {
                name: '',
                recipient: '',
                sender: '',
                desc: ''
            },
            rules: {
                recipient: [
                    { type: 'email', required: true, message: "Please input recipient's email address", trigger: 'blur' }
                ],
                sender: [
                    { type: 'email', required: true, message: "Your email address", trigger: 'blur' }
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
            <div> Basic Info
                <Layout.Row>
                    <Layout.Col span="14" offset="5">
                        <Card>
                            <Form labelPosition='top' style={{fontFamily: 'Helvetica Neue'}} ref="form" className="en-US" model={this.state.form} rules={this.state.rules}>
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
                        </Card>
                    </Layout.Col>
                </Layout.Row>
            </div>
        )           
    }
}

export default App;
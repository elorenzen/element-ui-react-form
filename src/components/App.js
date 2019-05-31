import React from 'react';

import { DatePicker } from 'element-react/next';
import { TimePicker } from 'element-react/next';
import { Checkbox }   from 'element-react/next';
import { Select }     from 'element-react/next';
import { Switch }     from 'element-react/next';
import { Button }     from 'element-react/next';
import { Layout }     from 'element-react/next';
import { Input }      from 'element-react/next';
import { Radio }      from 'element-react/next';
import { Form }       from 'element-react/next';

class App extends React.Component {
    constructor(props) {
        super(props);
              
        this.state = {
            form: {
                name: '',
                region: '',
                date1: null,
                date2: null,
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            rules: {
                name: [
                    { required: true, message: 'Please input Activity name', trigger: 'blur' }
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
                    { required: true, message: 'Please input activity form', trigger: 'blur' }
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
            <Form ref="form" className="en-US" model={this.state.form} rules={this.state.rules} labelWidth="120">
                <Form.Item label="Activity name" prop="name">
                    <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')}></Input>
                </Form.Item>
                <Form.Item label="Activity zone" prop="region">
                    <Select value={this.state.form.region} placeholder="Activity zone" onChange={this.onChange.bind(this, 'region')}>
                        <Select.Option label="Zone 1" value="shanghai"></Select.Option>
                        <Select.Option label="Zone 2" value="beijing"></Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Activity time" required={true}>
                    <Layout.Col span="11">
                        <Form.Item prop="date1" labelWidth="0px">
                            <DatePicker
                                value={this.state.form.date1}
                                placeholder="Pick a date"
                                onChange={this.onChange.bind(this, 'date1')}
                            />
                        </Form.Item>
                    </Layout.Col>
                    <Layout.Col className="line" span="2">-</Layout.Col>
                    <Layout.Col span="11">
                        <Form.Item prop="date2" labelWidth="0px">
                            <TimePicker
                                value={this.state.form.date2}
                                selectableRange="18:30:00 - 20:30:00"
                                placeholder="Pick a time"
                                onChange={this.onChange.bind(this, 'date2')}
                            />
                        </Form.Item>
                    </Layout.Col>
                </Form.Item>
                <Form.Item label="Instant delivery" prop="delivery">
                    <Switch value={this.state.form.delivery} onChange={this.onChange.bind(this, 'delivery')}></Switch>
                </Form.Item>
                <Form.Item label="Activity type" prop="type">
                    <Checkbox.Group value={this.state.form.type} onChange={this.onChange.bind(this, 'type')}>
                        <Checkbox label="Online activities" name="type"></Checkbox>
                        <Checkbox label="Promotion activities" name="type"></Checkbox>
                        <Checkbox label="Offline activities" name="type"></Checkbox>
                        <Checkbox label="Simple brand exposure" name="type"></Checkbox>
                    </Checkbox.Group>
                </Form.Item>
                <Form.Item label="Resources" prop="resource">
                    <Radio.Group value={this.state.form.resource} onChange={this.onChange.bind(this, 'resource')}>
                        <Radio value="Sponsor"></Radio>
                        <Radio value="Venue"></Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Activity form" prop="desc">
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
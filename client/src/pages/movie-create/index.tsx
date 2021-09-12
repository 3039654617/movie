import React, { useState } from 'react'
import './index.less'
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    Switch,
    message,
} from 'antd';
import store from '@/redux/store';
import action from '@/redux/action';
import { add } from '@/api/movie';
import { iMovie } from '@/common/type';

type SizeType = Parameters<typeof Form>[0]['size'];

const MovieCreate: React.FC<{}> = (props) => {
    const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
    const onFormLayoutChange = ({ size }: { size: SizeType }) => {
        setComponentSize(size);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo, 1111);
    };

    const onFinish = async (values: iMovie) => {
        // store.dispatch(action.)
        const type = values.types;
        const arrTypes: any = [type];
        // const types = arrTypes.push(type)
        console.log({...values}, type, arrTypes);
        
        const res = await add({...values, types: arrTypes});
        // console.log(res);
        
        if(res.status === 200) {
            message.info(`${values.name}电影添加成功`);
        }
    };


    return (
        <>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                onValuesChange={onFormLayoutChange}
                size={componentSize as SizeType}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item label="表单大小">
                    <Radio.Group>
                        <Radio.Button value="small">小号</Radio.Button>
                        <Radio.Button value="default">默认</Radio.Button>
                        <Radio.Button value="large">大号</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    name="poster"
                    label="海报宣传"
                    rules={[{ required: true, message: '请传宣传图' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="name"
                    label="电影名"
                    rules={[{ required: true, message: '请填电影名' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="isComing"
                    label="即将上映"
                    valuePropName="checked"
                    rules={[{ required: true, message: '是否上映' }]}
                >
                    <Switch />
                </Form.Item>
                <Form.Item
                    name="types"
                    label="类型"
                    rules={[{ required: true, message: '请选择类型' }]}
                >
                    <Select>
                        <Select.Option value="xiju">喜剧</Select.Option>
                        <Select.Option value="kongfu">动作</Select.Option>
                        <Select.Option value="love">爱情</Select.Option>
                        <Select.Option value="kongbu">恐怖</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="areas"
                    label="地点"
                    rules={[{ required: true, message: '请选择地点' }]}
                >
                    <Cascader
                        options={[
                            {
                                value: '贵州',
                                label: '贵州',
                                children: [
                                    {
                                        value: '贵阳',
                                        label: '贵阳',
                                    },
                                    {
                                        value: '遵义',
                                        label: '遵义',
                                    },
                                ],
                            },
                            {
                                value: '四川',
                                label: '四川',
                                children: [
                                    {
                                        value: '成都',
                                        label: '成都',
                                    },
                                    {
                                        value: '广安',
                                        label: '广安',
                                    },
                                ],
                            },
                            {
                                value: '山东',
                                label: '山东',
                                children: [
                                    {
                                        value: '济南',
                                        label: '济南',
                                    },
                                    {
                                        value: '泰安',
                                        label: '泰安',
                                    },
                                ],
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    name="description"
                    label="描述"
                    rules={[{ required: true, message: '请填电影描述' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item label="Button">
                    <Button type="primary" htmlType="submit">Button</Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default MovieCreate;
import React, { useState } from 'react'
import './index.less'
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
} from 'antd';

type SizeType = Parameters<typeof Form>[0]['size'];

const MovieCreate: React.FC<{}> = (props) => {
    const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
    const onFormLayoutChange = ({ size }: { size: SizeType }) => {
        setComponentSize(size);
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
            >
                <Form.Item label="表单大小" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">小号</Radio.Button>
                        <Radio.Button value="default">默认</Radio.Button>
                        <Radio.Button value="large">大号</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="海报宣传">
                    <Input />
                </Form.Item>
                <Form.Item label="电影名">
                    <Input />
                </Form.Item>
                <Form.Item label="即将上映" valuePropName="checked">
                    <Switch />
                </Form.Item>
                <Form.Item label="类型">
                    <Select>
                        <Select.Option value="demo">Demo</Select.Option>
                        <Select.Option value="demo">Do</Select.Option>
                        <Select.Option value="demo">emo</Select.Option>
                        <Select.Option value="demo">Deo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="地点">
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
                                ],
                            },
                        ]}
                    />
                </Form.Item>
               
                <Form.Item label="Button">
                    <Button>Button</Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default MovieCreate;
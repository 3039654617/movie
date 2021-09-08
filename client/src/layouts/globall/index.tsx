import React, {useState} from 'react';
import { Layout } from 'antd';
import './index.less';
import { Link } from 'umi';
import {BellOutlined} from '@ant-design/icons'
import header from '../../../public/assets/header.png'

const { Header, Content, Footer } = Layout;

const IndexPage: React.FC<{}> = (props: any) => {
  const [state, setstate] = useState('red')
  return (
    <Layout className="layout">
      <Header style={{ zIndex: 9999 }}>
        <div className="header">
          <div className="logo" />
          <ul>
            <li>
              <Link to={'/'}>首页</Link>
            </li>
            <li>
              <Link to={''}>交易处理</Link>
            </li>
            <li>
              <Link to={''}>数据服务</Link>
            </li>
            <li>
              <Link to={''}>管理咨询</Link>
            </li>
            <li>
              <Link to={''}>系统产品</Link>
            </li>
            <li>
              <Link to={'/contact'}>联系我们</Link>
            </li>
            {props.location.pathname === '/first' && (
              <li>
                <Link to={'/user'}>登录</Link>
              </li>
            )}
            {props.location.pathname !== '/first' && (
              <li>
                <span><BellOutlined style={{color: `${state}`}}/></span>
                <span style={{marginLeft: '20px'}}>
                  <img src={header} alt="头像加载失败"/>
                </span>
              </li>
            )}
          </ul>
        </div>
      </Header>
      <Content>
        <div className="site-layout-content-globall">{props.children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }} className='globall-bottom'>
        <div></div>
      </Footer>
    </Layout>
  );
};
export default IndexPage;

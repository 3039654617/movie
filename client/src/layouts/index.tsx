import './index.less'
import React from 'react';
import { router } from 'umi'
import logo from '../assets/logo.png'
import { Provider } from 'react-redux';
import store from '@/redux/store';
import locale from 'antd/lib/date-picker/locale/en_US';


const BasicLayout: React.FC = (props: any) => {
  const onClickP = (pIndex: number) => {
    const flag = document.documentElement.querySelectorAll('p');
    switch (flag[pIndex]?.outerText) {
      case '关于电影':
        const flagUl = document.documentElement.querySelectorAll('ul')[0];
        flagUl.style.opacity = flagUl.style.opacity === '0' ? '1' : '0';
      // if(flagUl.style.display = 'block')
      // console.log(flagUl.style);

    }
  }
  const onClickLi = (liIndex: number) => {
    const flag = document.documentElement.querySelectorAll('li');
    // console.log(flag);

    switch (flag[liIndex]?.outerText) {
      case '电影系统':
        for (let i = 0; i < flag.length; i++) {
          flag[i].className = ''
        }
        flag[liIndex].className = 'selected'
        // console.log(flag[liIndex]);

        router.push('/first');
        break;
      case '电影列表':
        for (let i = 0; i < flag.length; i++) {
          flag[i].className = ''
        }
        flag[liIndex].className = 'selected'
        // console.log(flag[liIndex]);

        router.push('/movie');
        break;
      case '增加电影':
        for (let i = 0; i < flag.length; i++) {
          flag[i].className = ''
        }
        flag[liIndex].className = 'selected'
        router.push('/create/0');
        break;
      // default:
      // router.push('./');
    }

  }
  return (
    <Provider store={store}>
      <div className='layout'>
        <div className="header">
          <div className='logo'>
            <img src={logo} alt="logo加载失败" />
          </div>
          <div className="right">欢迎来到一个充满神话的世界...</div>
        </div>
        <div className="body">
          <div className="menu-list">
            <p onClick={() => {
              onClickP(0)
              
            }}>关于电影</p>
            <ul>
              <li 
                onClick={() => {
                  onClickLi(0)
                }}
                className={props.location.pathname  === '/first' ? 'selected' : ''}
              >
                电影系统
              </li>
              <li 
                onClick={() => {
                  onClickLi(1)
                }}
                className={props.location.pathname  === '/movie' ? 'selected' : ''}
              >电影列表</li>
              <li 
                onClick={() => {
                  onClickLi(2)
                }}
                className={props.location.pathname  === '/create' ? 'selected' : ''}
              >增加电影</li>
            </ul>
          </div>
          <div className="content">
            {props.children}
          </div>
        </div>
      </div>

    </Provider>
  );
};

export default BasicLayout;

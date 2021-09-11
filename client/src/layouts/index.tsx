import './index.less'
import React from 'react';
import { Link, router } from 'umi'
import logo from '../assets/logo.png'


const BasicLayout: React.FC = (props) => {
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
        for(let i = 0; i < flag.length; i++) {
          flag[i].className = ''
        }
        flag[liIndex].className = 'selected'
        // console.log(flag[liIndex]);
        
        router.push('./first');
        break;
      case '电影列表':
        for(let i = 0; i < flag.length; i++) {
          flag[i].className = ''
        }
        flag[liIndex].className = 'selected'
        // console.log(flag[liIndex]);
        
        router.push('./movie');
        break;
      case '增加电影':
        for(let i = 0; i < flag.length; i++) {
          flag[i].className = ''
        }
        flag[liIndex].className = 'selected'
        router.push('./create');
        break;
      // default:
        // router.push('./');
    }
    
  }
  return (
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
           <li onClick={() => {
             onClickLi(0)
            }}>电影系统</li>
             <li onClick={() => {
              onClickLi(1)
             }}>电影列表</li>
             <li onClick={() => {
              onClickLi(2)
             }}>增加电影</li>
           </ul>
         </div>
         <div className="content">
           {props.children}
         </div>
       </div>
    </div>
  );
};

export default BasicLayout;

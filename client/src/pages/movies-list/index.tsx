import React, { useEffect, useState } from 'react';
import {Table, Alert} from 'antd'
import './index.less'
import { conditionMovie } from '@/api/movie';
import action from '../../redux/action'
import store from '../../redux/store'

 const TableList:React.FC<{}> = (props) => {
  const [dataSource, setDataSource] = useState([]);
  
  const getMovies = () => {
    store.dispatch(action.fetchMovies({
      limit: 8
    }) as any)
    const data = store.getState().reducer.data;
    const list = data.map((item, index) => {
      const isComing = item.isComing === true ? '上' : '不上';
      return {...item, key: index, isComing}
    })
    // conditionMovie({limit: 0}).then(res => {
      // const list = res.data.data.data.map((item, index) => {
        // const isComing = item.isComing === true ? '上' : '不上';
        // return {...item, key: index, isComing}
    // })
    // console.log(res.data.data.data, typeof(res.data.data.data));
    setDataSource(list)
    // if(typeof(res.data.data.data) ===  'object') {
      // const dafaultData = new Array(9).fill({
          // areas: ['中国大陆'],
          // description: "迪迦奥特曼第3部最好看",
          // isComing: '不上',
          // name: "迪迦奥特曼第3部",
          // poster: "111",
          // types: ['玄幻'],
          // _id: "611e6aa19a560429f436793c",
      // })
      
    // setDataSource(dafaultData as any)
      // }
    // })
  }

  useEffect(() => {
    getMovies();  
  }, [])
  
  const columns = [
    {
      title: '海报宣传',
      dataIndex: 'poster',
      key: 'poster',
    },
    {
      title: '电影名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '即将上映',
      dataIndex: 'isComing',
      key: 'isComing',
    },
    {
      title: '类型',
      dataIndex: 'types',
      key: 'types',
    },
    {
      title: '地区',
      dataIndex: 'areas',
      key: 'areas',
    },
    {
      title: '描述',
      dataIndex: 'description',
      key: 'description'
    }
  ];
  return (
    <div>
      <div className='tips'>
        <Alert
          message=""
          description="数据库还没有数据，快快去添加吧"
          type="error"
          closable={true}
          onClose={() => {
          }}
        />
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}


export default TableList;

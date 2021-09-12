import React, { useEffect, useState } from 'react';
import {Table, Alert} from 'antd'
import './index.less'
import { conditionMovie } from '@/api/movie';
import action from '../../redux/action'
import store from '../../redux/store'
import { connect } from 'react-redux'
import { IMovieState } from '@/common/type'
import {router} from 'umi'

interface state {
  state: IMovieState
}

interface events {
  onload: () => void
}
const TableList:React.FC = (props: any) => {
  const [dataSource, setDataSource] = useState([]);
  console.log(props);
   
  const getMovies = async () => {
    const data = store.getState().reducer.data;
    const list = data.map((item: { isComing: boolean; }, index: any) => {
    const isComing = item.isComing === true ? '上' : '不上';
      return {...item, key: index, isComing}
    })
    setDataSource(list)
  }
   
   
   
    
    // conditionMovie({limit: 0}).then(res => {
      // const list = res.data.data.data.map((item, index) => {
        // const isComing = item.isComing === true ? '上' : '不上';
        // return {...item, key: index, isComing}
    // })
    // console.log(res.data.data.data, typeof(res.data.data.data));
    // setDataSource(list)
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
  // }
  const init = () => {
    props.onload && props.onload();
  }
  useEffect(() => {
    init()
  }, [init])

  useEffect(() => {
    getMovies();  
  }, [store.getState().reducer.data])
  
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
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      render: (text: any, record: { _id: string; }) => {
        return (
          <div className='operation'>
            <span 
              style={{cursor: 'pointer'}}
              onClick={() => {
                router.push(`/create/${record._id}`)
              }}
            >
              编辑
            </span>
            <span 
              style={{marginLeft: '1vw', cursor: 'pointer'}}
              onClick={() => {
                props.delete && props.delete(record._id)
              }}
            >
              删除
            </span>
          </div>
        )
      }
    }
  ];

  const pagination = () => {
    
    return {
      current: props.condition.page,
      total: props.total,
      pageSize: props.condition.limit
    }
  }

  return (
    <div>
      <div className='tips'>
        {
          false && <Alert
          message=""
          description="数据库还没有数据，快快去添加吧"
          type="error"
          closable={true}
          onClose={() => {
          }}
        />
        }
      </div>
      <Table 
        dataSource={dataSource} 
        columns={columns} 
        pagination={pagination()}
        onChange={props.onChange}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return state.reducer
}

const mapStateToEvents = (dispatch) => {
  return {
    onload() {
      dispatch(action.fetchMovies({
        limit: 10,
        page: 1
      }) as any)
    },
    delete(id: string) {
      store.dispatch(action.deleteMovie(id) as any)
    },
    onChange(pagin: any) {
      console.log(pagin, pagin.limit, pagin.page);
      
      store.dispatch(action.fetchMovies({
        limit: pagin.pageSize,
        page: pagin.current
      }) as any)
    }
  }
}

export default connect(mapStateToProps, mapStateToEvents)(TableList);
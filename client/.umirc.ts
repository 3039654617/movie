import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', redirect: '/first' },
        { 
          path: '/first',
          name: '首页', 
          component: '../pages/first-page/index' 
        },
        { 
          path: '/movie', 
          name: '添加',
          component: '../pages/movies-list/index' 
        },
        { 
          path: '/create/:id', 
          // exact: false,
          name: '添加',
          component: '../pages/movie-create/index' 
        }
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: false,
      title: 'client',
      dll: false,
      
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
  cssLoaderOptions: {
    localIdentName: '[local]'
  },
  proxy: {
    '/api': {
      // target: 'http://11.11.75.41:10007',
      target: 'http://localhost:3000',
      // target: 'http://192.168.0.189',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
}

export default config;

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  constructor() {
  }

  listOfPosition: ['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'];

  menuList: any = [
    {
      title: '注册',
      options: [
        '求职者注册', '企业注册'
      ]
    },
    {
      title: '登录',
      options: [
        '求职者登录', '企业登录'
      ]
    }, {
      title: '微信登录',
      options: [
        '求职者登录', '企业登录'
      ]
    }
  ];
  searchList: string[];
  searchText: any = '';
  navList: string[] = ['全部职位分类', '找工作', '找人才', '求职管理', '最新招聘', '597专访', '597猎头', '597云课堂'];
  sideNavList: string[] = [
    '销售、客服、市场、公关',
    '人力、行政、财务、管理',
    '生产、制造、质控',
    '互联网、游戏、软件',
    '通信、硬件、电子电器',
    '汽车、机械',
    '房地产、建筑、物业、装饰',
    '金融、银行、保险',
    '广告、设计、传媒',
    '餐饮、百货、生活服务',
    '医疗、医药',
    '教育、培训、专业服务',
    '能源、化工、服装、环保',
    '进出口、采购、物流、司机',
    '农林牧渔、其他'
  ];
  // 存放轮播图地址集合
  carouselBaseUrl: any = '../../assets/images/carousel/';
  carouselUrls: string[] = ['carousel1.gif', 'carousel2.gif', 'carousel3.gif'];
  loginTabs: string[] = ['求职者登录', '企业登录'];
  activeLoginTab: any = 0;
  // 用户信息
  user: any = {username: '', password: ''};
  passwordVisible: boolean;
  autoLogin: boolean;
  newsTabs: string[] = ['热门招聘', '最新职位', '最新兼职', '最新实习'];
  newsItems: any[] = [{title: '', options: []}];

  ngOnInit() {
    /*判断是否自动登录*/
    if (localStorage.getItem('autoLogin')) {
      this.autoLogin = JSON.parse(localStorage.getItem('autoLogin'));
    } else {
      const autoLogin = false;
      localStorage.setItem('searchList', JSON.stringify(autoLogin));
      this.autoLogin = autoLogin;
    }
    // TODO: 根据当前登录人来获取最近搜索项
    if (localStorage.getItem('searchList')) {
      this.searchList = JSON.parse(localStorage.getItem('searchList'));
    } else {
      const searchList = ['司机', '普工', '会计', '文员', '销售', '物流', '营业员', '车工', '保安', '学徒', '兼职'];
      localStorage.setItem('searchList', JSON.stringify(searchList));
      this.searchList = searchList;
    }
    // 构造newsItems
    this.newsTabs.forEach((item, index) => {
      const newsItem = {
        title: item,
        options: []
      };
      for (let i = 0; i < 5; i++) {
        newsItem.options[i] = [];
        for (let j = 0; j < 4; j++) {
          newsItem.options[i][j] = item + i + j;
        }
      }
      this.newsItems[index] = newsItem;
    });
    // TODO: 密码是否可见
    this.passwordVisible = false;
  }

  onSearch(fromLink?) {
    if (fromLink) {
      this.searchText = fromLink;
    } else {
      if (this.searchText) {
        if (!this.searchList.includes(this.searchText)) {
          this.searchList.unshift(this.searchText);
        }
      }
    }
    // TODO:搜索请求
  }

  onActive(index) {
    console.log(index);
    this.activeLoginTab = index;
  }

  login() {
    // TODO:登录请求 登录成功后并本地缓存登录角色。
  }
}

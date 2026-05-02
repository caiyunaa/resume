export const resume = {
  name: '黄彩云',
  title: '前端开发',
  degree: '本科',
  city: '浙江',
  phone: '191-5245-3449',
  email: '2924647177@qq.com',

  social: [
    { label: 'GitHub', url: 'https://github.com/caiyunaa', icon: 'git-branch' },
    { label: 'GitCode', url: 'https://gitcode.com/Hcaiyun', icon: 'git-branch' },
    { label: 'Gitee', url: 'https://gitee.com/huangcaiyunyun', icon: 'git-fork' },
    { label: '企业 GitLab', url: 'https://git.proxy.yimiyisu.com/', icon: 'building-2' },
  ],

  education: {
    school: '广西科技师范学院',
    degree: '本科',
    period: '2022.09 ~ 2026.06',
    courses: ['数据结构', '数据库原理', 'Web开发技术', '大数据处理'],
    awards: [
      '全国大学生软件创新大赛华南赛区二等奖',
      '第六届广西大学生人工技能设计大赛大数据赛道三等奖',
      '广西大学生软件测试技能大赛校级三等奖',
      '数学建模竞赛校赛三等奖',
    ],
  },

  experience: {
    company: '杭州一米一粟信息科技有限公司',
    role: '前端开发实习生',
    period: '2025.8 ~ 至今',
    skills: [
      { category: '前端基础', items: ['HTML5', 'CSS3', 'JavaScript(ES6+)', '闭包/原型链/异步编程'] },
      { category: 'Vue生态', items: ['Vue2/Vue3', 'Options/Composition API', 'Vuex/Pinia', 'Vue Router'] },
      { category: '工程化', items: ['Webpack', 'Vite', 'Git分支管理', 'ESLint+Prettier'] },
      { category: '多端开发', items: ['uni-app', '微信小程序', 'H5/APP/小程序适配'] },
      { category: 'UI框架', items: ['Element UI', 'Vant', 'Ant Design', '组件二次封装'] },
      { category: '可视化', items: ['ECharts', '数据可视化场景'] },
      { category: '设计能力', items: ['即时设计', '基础UI设计'] },
      { category: 'AI工具', items: ['Cursor', 'Claude'] },
      { category: '业务领域', items: ['ERP', 'CRM', 'OA', '低代码平台'] },
    ],
  },

  projects: [
    {
      name: '商家卡券系统（SaaS低代码）',
      role: '前端',
      period: '2026.2 ~ 至今',
      description: '面向中小商家的轻量化卡券营销系统，支持双端管理后台+移动端H5兑换，采用低代码设计思想降低商家使用门槛。',
      stack: ['Vue2', 'JavaScript', 'Element UI', 'Vant', 'Webpack'],
      highlights: [
        '独立负责商品管理、卡券中心、订单系统三大核心模块前端开发',
        '设计可复用的表单配置组件，支持动态字段渲染，减少重复代码30%',
        '实现移动端适配方案，解决多机型兼容性问题',
        '参与需求评审，与后端协作定义API接口规范',
      ],
    },
    {
      name: '银行积分商城系统（电商方向）',
      role: '前端',
      period: '2025.9 ~ 至今',
      description: '为银行客户提供的积分兑换商城，已正式上线，日均访问量巨大。',
      stack: ['Vue2', 'Vant', 'Axios'],
      highlights: [
        '负责商城首页、商品详情、购物车、订单流程等核心功能维护与迭代',
        '优化页面加载性能，通过路由懒加载、图片懒加载等手段提升首屏速度',
        '响应式布局，适配不同设备',
        '修复线上Bug，持续优化用户体验',
      ],
    },
    {
      name: '可视化海报设计器（低代码组件方向）',
      role: '前端',
      period: '2025.10 ~ 2025.11',
      description: '基于Vue 3开发的在线海报设计工具，支持多种元素编辑和导出功能，为用户提供直观易用的设计体验。',
      stack: ['Vue3', 'ECharts', 'Leafer UI', 'Vite', 'JavaScript'],
      highlights: [
        '负责扩展组件库，新增图标组件、基础图形组件、ECharts图表组件等10+组件类型',
        '实现图表组件数据绑定功能，支持动态数据可视化展示',
        '实现多种元素的编辑功能，如艺术字、图片、二维码、富文本等',
        '修复线上Bug，持续优化用户界面和交互流程',
      ],
    },
    {
      name: 'ERP/CRM/OA综合管理系统',
      role: '前端（在校开源项目）',
      period: '2024.03 ~ 2025.08',
      description: '基于Vue3重构传统Layui后台，为中小企业提供开源管理解决方案，已有真实企业用户投入使用。',
      stack: ['Vue3', 'JavaScript', 'Vuex', 'Axios', 'Ant Design'],
      highlights: [
        '参与系统架构设计，负责ERP库存管理、CRM客户管理模块开发',
        '实现动态表单配置功能，支持业务字段自定义扩展',
        '编写技术文档，协助部署上线',
      ],
      link: 'https://gitee.com/dromara/skyeye',
    },
    {
      name: '智慧课堂双端系统',
      role: '前端（在校项目）',
      period: '2025.03 ~ 2025.05',
      description: '支持教师端PC管理+学生端移动学习的教学管理系统。',
      stack: ['Vue3', 'uni-app', 'WebSocket'],
      highlights: [
        '独立完成PC端教学管理后台开发，包括课程管理、作业发布、成绩统计模块',
        '使用uni-app开发移动端学习助手，支持视频播放、在线答题、学习打卡',
        '实现WebSocket实时通信，支持课堂即时互动功能',
      ],
    },
  ],

  evaluation: [
    {
      title: '实战经验丰富',
      description: '半年企业实习经验，参与SaaS、电商、低代码等多领域项目开发',
      icon: 'briefcase',
    },
    {
      title: '技术能力全面',
      description: '熟悉Vue2/3全栈开发，具备多端适配、性能优化、组件封装能力',
      icon: 'cpu',
    },
    {
      title: '业务理解深入',
      description: '熟悉电商、ERP、CRM业务流程，能快速理解需求并落地',
      icon: 'target',
    },
    {
      title: '学习能力强',
      description: '主动学习Vue3新特性，关注前端工程化最佳实践',
      icon: 'book-open',
    },
    {
      title: '代码质量意识',
      description: '注重代码规范，追求可维护、可扩展的代码架构',
      icon: 'code',
    },
  ],
}

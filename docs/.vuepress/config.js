const path=require("path")
const rootPath=path.dirname(__dirname)
const { sideBarTool } = require(path.join(__dirname, './utils/index.js'))

// 需要排除的一些目录
let unDirIncludes = ['node_modules', '@pages', 'public']
// 只需要处理后缀的文件类型
let SuffixIncludes = ['md', 'html']
    //使用方法生生成侧边栏
// 侧边栏
let sidebar = sideBarTool.genSideBarGroup(rootPath, unDirIncludes, SuffixIncludes, {})
console.log(sidebar);
module.exports = {
  title: 'LighWar\'s Record',
  description: 'An interesting record',
  theme: 'vdoing',
  base:'/note/',
  head: [
    ['link', { rel: 'icon', href: '/images/logo.jpg' }]
  ],
  plugins:[

    ['vuepress-plugin-code-copy', true],
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',{
        theme: ['haru1','blackCat', 'whiteCat',  'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
        clean: false,
        messages: { 
          welcome: 'lightWar欢迎!', home: 'V我50,带你回家', theme: '好吧，希望你能喜欢我的其他小伙伴。', close: '你不喜欢我了吗？痴痴地望着你。'
        },
        messageStyle: { right: '68px', bottom: '290px' },
        width: 250,
        height: 320
      }
    ],
    ["ribbon-animation", {
      size: 90,   // 默认数据
      opacity: 0.3,  //  透明度
      zIndex: -1,   //  层级
      opt: {
        // 色带HSL饱和度
        colorSaturation: "80%",
        // 色带HSL亮度量
        colorBrightness: "60%",
        // 带状颜色不透明度
        colorAlpha: 0.65,
        // 在HSL颜色空间中循环显示颜色的速度有多快
        colorCycleSpeed: 6,
        // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
        verticalPosition: "center",
        // 到达屏幕另一侧的速度有多快
        horizontalSpeed: 200,
        // 在任何给定时间，屏幕上会保留多少条带
        ribbonCount: 10,
        // 添加笔划以及色带填充颜色
        strokeSize: 0,
        // 通过页面滚动上的因子垂直移动色带
        parallaxAmount: -0.5,
        // 随着时间的推移，为每个功能区添加动画效果
        animateSections: true
      },
      ribbonShow: true, //  点击彩带  true显示  false为不显示
      ribbonAnimationShow: true  // 滑动彩带
    }]
,
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",{
        audios: [
          // 本地文件示例
          {
            name: '春涧',
            artist: '一只小猪',
            url: '/bgm/3.mp3',
            cover: '/bgm/1.png'
          }, {
            name: '起风了',
            artist: '屠龙少年',
            url: '/bgm/2.mp3',
            cover: '/bgm/1.png'
          },
        ]
      }
    ],

     [
      "vuepress-plugin-cursor-effects",
      {
        size: 2,                    // size of the particle, default: 2
        shape: 'circle',  // shape of the particle, default: 'star'
        zIndex: 999999999           // z-index property of the canvas, default: 999999999
      }
    ],

  ],
  themeConfig: {
    logo: '/images/logo.jpg',
    displayAllHeaders:true,
    smoothScroll:true,
    sidebar:sidebar,
    homePageImgApi: "https://api.ixiaowai.cn/api/api.php",
  },
  port:8888,

}

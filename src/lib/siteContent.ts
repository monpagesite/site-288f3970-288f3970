// Site content for カフェ
export const siteContent = {
  meta: {
    title: 'カフェ — 都市中的精致避世空间',
    description: '手工烘焙单品咖啡 × 主厨每日限量甜点 × 私享包场体验。预约制精品咖啡馆，每日限额12组客人。',
    lang: 'zh',
  },

  nav: {
    links: [
      { label: '首页', href: '#hero' },
      { label: '我们的理念', href: '#story' },
      { label: '菜单', href: '#menu' },
      { label: '预订', href: '#booking' },
      { label: '空间', href: '#space' },
      { label: '联系我们', href: '#contact' },
    ],
    cta: '立即预订',
  },

  hero: {
    overline: '都市中的精致避世空间',
    headline: ['每一杯咖啡，', '都值得预约期待'],
    subtext: '手工烘焙单品咖啡 × 主厨每日限量甜点 × 私享包场体验。在这里，时间为品质而停留。',
    cta: '立即预订席位',
    trustIndicator: '每日限额12组客人 · 提前预约优先',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80',
    imageAlt: '精致咖啡空间',
    badge: {
      text: '精选产地豆 · 现场烘焙',
      icon: 'coffee',
    },
  },

  story: {
    label: '我们的理念',
    headline: '咖啡，是一门关于时间与温度的艺术',
    paragraphs: [
      'カフェ由咖啡师主理人创立于2021年，源于一个简单信念：每一杯咖啡都应该是一次值得等待的体验。我们从全球精选产地直采咖啡豆，在店内完成烘焙，确保每一颗豆子在最佳赏味期内被冲煮。',
      '主厨每日清晨手作限量甜点，从法式可颂到日式生乳卷，每一款都遵循传统工艺与当季食材的完美平衡。我们相信，真正的品质无需过度装饰，细节本身会说话。',
      '这里不只是一间咖啡馆，更是都市中的一处精神栖息地。我们限制每日接待人数，只为确保每位客人都能享受到足够的空间、时间与专注的服务。预约制让我们能为每一次到访做好充分准备。',
    ],
    signature: '— 主理人 陈晨',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1600&q=80',
        alt: '咖啡师倾注拿铁艺术',
      },
      {
        src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
        alt: '精致糕点横截面',
      },
    ],
  },

  menu: {
    label: '菜单',
    headline: '精选手工咖啡与甜点',
    categories: [
      {
        id: 'pour-over',
        name: '手冲咖啡',
        items: [
          {
            name: '埃塞俄比亚 耶加雪菲',
            description: '明亮柑橘调，茉莉花香，干净尾韵',
            price: '¥48',
            image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=200&q=80',
            featured: true,
          },
          {
            name: '哥伦比亚 慧兰',
            description: '焦糖甜感，坚果回甘，平衡醇厚',
            price: '¥42',
            image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=200&q=80',
            featured: false,
          },
          {
            name: '巴拿马 瑰夏',
            description: '热带水果，蜂蜜甜，复杂层次',
            price: '¥88',
            image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=200&q=80',
            featured: false,
            limited: true,
          },
          {
            name: '肯尼亚 AA',
            description: '黑莓酸质，红酒体，强烈风味',
            price: '¥52',
            image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?auto=format&fit=crop&w=200&q=80',
            featured: false,
          },
        ],
      },
      {
        id: 'espresso',
        name: '意式浓缩',
        items: [
          {
            name: '招牌拿铁',
            description: '双倍浓缩，丝滑奶泡，完美融合',
            price: '¥38',
            image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=200&q=80',
            featured: true,
          },
          {
            name: '卡布奇诺',
            description: '经典配比，浓郁咖啡香，绵密奶泡',
            price: '¥36',
            image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=200&q=80',
            featured: false,
          },
          {
            name: '澳白咖啡',
            description: '浓缩与牛奶的极简平衡',
            price: '¥36',
            image: 'https://images.unsplash.com/photo-1579992357668-df0c3b3edbb5?auto=format&fit=crop&w=200&q=80',
            featured: false,
          },
          {
            name: '手作焦糖玛奇朵',
            description: '自制焦糖，多层次口感',
            price: '¥42',
            image: 'https://images.unsplash.com/photo-1568305090046-e9a4e6a5f45b?auto=format&fit=crop&w=200&q=80',
            featured: false,
          },
        ],
      },
      {
        id: 'signature',
        name: '创意特调',
        items: [
          {
            name: '橙香冷萃',
            description: '18小时冷萃，新鲜橙皮，清爽微甜',
            price: '¥46',
            image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=200&q=80',
            featured: true,
          },
          {
            name: '抹茶欧蕾',
            description: '京都宇治抹茶，职人石磨研磨',
            price: '¥42',
            image: 'https://images.unsplash.com/photo-1536013992268-f0b4cca0d6c0?auto=format&fit=crop&w=200&q=80',
            featured: false,
          },
          {
            name: '玫瑰拿铁',
            description: '保加利亚玫瑰，天然花香',
            price: '¥44',
            image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=200&q=80',
            featured: false,
          },
          {
            name: '伯爵奶盖',
            description: '特选伯爵茶，绵密咸奶盖',
            price: '¥40',
            image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=200&q=80',
            featured: false,
          },
        ],
      },
      {
        id: 'pastry',
        name: '甜点轻食',
        items: [
          {
            name: '法式可颂',
            description: '64层酥皮，法国进口黄油，每日限量',
            price: '¥28',
            image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=200&q=80',
            featured: true,
          },
          {
            name: '日式生乳卷',
            description: '北海道鲜奶油，轻盈绵软',
            price: '¥35',
            image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=200&q=80',
            featured: false,
          },
          {
            name: '巴斯克芝士蛋糕',
            description: '半熟焦香，浓郁芝士风味',
            price: '¥38',
            image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=200&q=80',
            featured: true,
          },
          {
            name: '手作司康配黄油酱',
            description: '英式传统配方，温热享用',
            price: '¥32',
            image: 'https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?auto=format&fit=crop&w=200&q=80',
            featured: false,
          },
          {
            name: '主厨每日特制',
            description: '季节限定，当日询问',
            price: '时价',
            image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=200&q=80',
            featured: false,
            limited: true,
          },
        ],
      },
      {
        id: 'experience',
        name: '限定课程',
        items: [
          {
            name: '手冲咖啡工作坊',
            description: '2小时私教课程，含咖啡豆礼盒',
            price: '¥680',
            image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=200&q=80',
            featured: true,
          },
          {
            name: '拉花艺术体验',
            description: '90分钟实践课程，小班教学',
            price: '¥480',
            image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=200&q=80',
            featured: false,
          },
          {
            name: '品鉴套餐课程',
            description: '4款精品豆对比品鉴，含轻食',
            price: '¥580',
            image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=200&q=80',
            featured: false,
          },
        ],
      },
    ],
  },

  booking: {
    label: '预订席位',
    headline: '为每一次相遇，留出专属时间',
    subtext: '我们采用预约制，确保每位客人都能享受安静、舒适的品鉴时光。请提前预订，我们将为您准备最佳座位。',
    features: [
      {
        icon: 'users',
        title: '每日限额',
        description: '最多12组客人，保证服务品质',
      },
      {
        icon: 'clock',
        title: '灵活时段',
        description: '10:00-22:00，2小时时段可选',
      },
      {
        icon: 'sparkles',
        title: '包场服务',
        description: '支持活动包场，需提前7日预约',
      },
    ],
    form: {
      namePlaceholder: '您的姓名',
      phonePlaceholder: '联系电话',
      datePlaceholder: '预约日期',
      timePlaceholder: '时段选择',
      guestsPlaceholder: '人数',
      messagePlaceholder: '特殊需求（选填）',
      submit: '确认预订',
    },
    notice: '提交后，我们将在1小时内通过电话确认预订详情',
  },

  space: {
    label: '空间氛围',
    headline: '一处可以安静下来的角落',
    subtext: '精心设计的空间，让每个细节都传递温暖与品质',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1600&q=80',
        alt: '咖啡馆内部空间',
        caption: '温润木质与柔和光线',
      },
      {
        src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=80',
        alt: '吧台工作区',
        caption: '专业设备与匠心工艺',
      },
      {
        src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=80',
        alt: '座位区',
        caption: '舒适座椅与私密空间',
      },
      {
        src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1600&q=80',
        alt: '细节装饰',
        caption: '每一处都值得停留',
      },
    ],
  },

  contact: {
    label: '联系我们',
    headline: '期待与您相遇',
    address: {
      title: '地址',
      line1: '上海市静安区愚园路XXX号',
      line2: '近江苏路口，2号线静安寺站步行8分钟',
    },
    hours: {
      title: '营业时间',
      weekday: '周二至周五 10:00 - 22:00',
      weekend: '周六至周日 10:00 - 23:00',
      closed: '周一休息',
    },
    contact: {
      title: '联系方式',
      phone: '预约专线：021-XXXX-XXXX',
      email: '邮箱：hello@kafecafe.com',
      wechat: '微信：kafecafe_sh',
    },
    social: [
      { platform: 'instagram', handle: '@kafe.shanghai', url: '#' },
      { platform: 'wechat', handle: 'kafecafe_sh', url: '#' },
      { platform: 'xiaohongshu', handle: 'カフェ上海', url: '#' },
    ],
    mapEmbed: 'https://www.openstreetmap.org/export/embed.html?bbox=121.43%2C31.21%2C121.45%2C31.23&layer=mapnik',
  },

  footer: {
    tagline: 'カフェ — 都市中的精致避世空间',
    copyright: '© 2024 カフェ. 保留所有权利。',
    links: [
      { label: '隐私政策', href: '#' },
      { label: '使用条款', href: '#' },
    ],
  },
} as const;

export type SiteContent = typeof siteContent;

// Site content for lounge X
export const siteContent = {
  meta: {
    title: 'lounge X — 都会の中の上質な隠れ家',
    description: '自家焙煎スペシャルティコーヒー × シェフの日替わり限定スイーツ × プライベート空間。上質なラウンジ空間でのくつろぎの時間。',
    lang: 'ja',
  },

  logo: {
    subtitle: '都会の中の上質な隠れ家',
  },

  nav: {
    links: [
      { label: 'ホーム', href: '#hero' },
      { label: '私たちの想い', href: '#story' },
      { label: 'メニュー', href: '#menu' },
      { label: '空間', href: '#space' },
      { label: 'お問い合わせ', href: '#contact' },
    ],
    cta: 'お問い合わせ',
  },

  hero: {
    overline: '都会の中の上質な隠れ家',
    headline: ['一杯一杯のコーヒーに、', '価値がある'],
    subtext: '自家焙煎スペシャルティコーヒー × シェフの日替わり限定スイーツ × プライベート空間。ここでは、時間が品質のために流れる。',
    cta: 'もっと詳しく',
    trustIndicator: '厳選産地豆 · 店内焙煎',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80',
    imageAlt: '上質なラウンジ空間',
    badge: {
      text: '厳選産地豆 · 店内焙煎',
      icon: 'coffee',
    },
  },

  story: {
    label: '私たちの想い',
    headline: 'コーヒーは、時間と温度の芸術',
    paragraphs: [
      'lounge Xは2021年、バリスタオーナーによって創業されました。「すべてのコーヒーは、待つ価値のある体験であるべき」というシンプルな信念から生まれました。世界中の厳選された産地から直接コーヒー豆を調達し、店内で焙煎。すべての豆が最高の状態で抽出されることを保証しています。',
      'シェフが毎朝手作りする限定スイーツは、フランス菓子から日本の生クリームロールまで、伝統的な技法と旬の食材の完璧なバランスを追求しています。本当の品質は過度な装飾を必要としません。細部がすべてを語ります。',
      'ここは単なるラウンジではなく、都会の中の精神的な憩いの場です。すべてのお客様に十分なスペース、時間、そして心のこもったサービスを提供できます。上質な空間で、心ゆくまでおくつろぎください。',
    ],
    signature: '— オーナー 陳 晨',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1600&q=80',
        alt: 'バリスタがラテアートを注ぐ様子',
      },
      {
        src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
        alt: '上質なペストリーの断面',
      },
    ],
  },

  menu: {
    label: 'メニュー',
    headline: '厳選ハンドドリップコーヒーとスイーツ',
    categories: [
      {
        id: 'pour-over',
        name: 'ハンドドリップ',
        items: [
          {
            name: 'エチオピア イルガチェフェ',
            description: '明るい柑橘系、ジャスミンの香り、クリーンな後味',
            price: '¥48',
            image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=200&q=80',
            featured: true,
          },
          {
            name: 'コロンビア ウィラ',
            description: 'キャラメルの甘み、ナッツの余韻、バランスの良いコク',
            price: '¥42',
            image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=200&q=80',
            featured: false,
          },
          {
            name: 'パナマ ゲイシャ',
            description: 'トロピカルフルーツ、蜂蜜の甘み、複雑なレイヤー',
            price: '¥88',
            image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=200&q=80',
            featured: false,
            limited: true,
          },
          {
            name: 'ケニア AA',
            description: 'ブラックベリーの酸味、赤ワインのボディ、力強い風味',
            price: '¥52',
            image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?auto=format&fit=crop&w=200&q=80',
            featured: false,
          },
        ],
      },
      {
        id: 'espresso',
        name: 'エスプレッソ',
        items: [
          {
            name: 'シグネチャーラテ',
            description: 'ダブルショット、滑らかなミルクフォーム、完璧な融合',
            price: '¥38',
            image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=200&q=80',
            featured: true,
          },
          {
            name: 'カプチーノ',
            description: 'クラシックな配合、豊かなコーヒーの香り、きめ細かいフォーム',
            price: '¥36',
            image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=200&q=80',
            featured: false,
          },
          {
            name: 'フラットホワイト',
            description: 'エスプレッソとミルクの究極のバランス',
            price: '¥36',
            image: 'https://images.unsplash.com/photo-1579992357668-df0c3b3edbb5?auto=format&fit=crop&w=200&q=80',
            featured: false,
          },
          {
            name: '手作りキャラメルマキアート',
            description: '自家製キャラメル、多層的な味わい',
            price: '¥42',
            image: 'https://images.unsplash.com/photo-1568305090046-e9a4e6a5f45b?auto=format&fit=crop&w=200&q=80',
            featured: false,
          },
        ],
      },
      {
        id: 'signature',
        name: 'シグネチャードリンク',
        items: [
          {
            name: 'オレンジコールドブリュー',
            description: '18時間抽出、フレッシュオレンジピール、爽やかな甘み',
            price: '¥46',
            image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=200&q=80',
            featured: true,
          },
          {
            name: '抹茶オレ',
            description: '京都宇治抹茶、職人による石臼挽き',
            price: '¥42',
            image: 'https://images.unsplash.com/photo-1536013992268-f0b4cca0d6c0?auto=format&fit=crop&w=200&q=80',
            featured: false,
          },
          {
            name: 'ローズラテ',
            description: 'ブルガリアローズ、天然の花の香り',
            price: '¥44',
            image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=200&q=80',
            featured: false,
          },
          {
            name: 'アールグレイミルクティーフォーム',
            description: '厳選アールグレイ、きめ細かい塩ミルクフォーム',
            price: '¥40',
            image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=200&q=80',
            featured: false,
          },
        ],
      },
      {
        id: 'pastry',
        name: 'スイーツ＆軽食',
        items: [
          {
            name: 'フランス産クロワッサン',
            description: '64層のパイ生地、フランス産バター使用、毎日限定',
            price: '¥28',
            image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=200&q=80',
            featured: true,
          },
          {
            name: '日本風生クリームロール',
            description: '北海道産生クリーム、ふわふわ食感',
            price: '¥35',
            image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=200&q=80',
            featured: false,
          },
          {
            name: 'バスクチーズケーキ',
            description: '半熟の焦げ香、濃厚なチーズの風味',
            price: '¥38',
            image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=200&q=80',
            featured: true,
          },
          {
            name: '手作りスコーン バター添え',
            description: '英国伝統レシピ、温かいうちにお召し上がりください',
            price: '¥32',
            image: 'https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?auto=format&fit=crop&w=200&q=80',
            featured: false,
          },
          {
            name: 'シェフの本日のスペシャル',
            description: '季節限定、当日お尋ねください',
            price: '時価',
            image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=200&q=80',
            featured: false,
            limited: true,
          },
        ],
      },
      {
        id: 'experience',
        name: '限定ワークショップ',
        items: [
          {
            name: 'ハンドドリップワークショップ',
            description: '2時間プライベートレッスン、コーヒー豆ギフト付き',
            price: '¥680',
            image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=200&q=80',
            featured: true,
          },
          {
            name: 'ラテアート体験',
            description: '90分実践レッスン、少人数制',
            price: '¥480',
            image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=200&q=80',
            featured: false,
          },
          {
            name: 'テイスティングコース',
            description: '4種類のスペシャルティ豆比較試飲、軽食付き',
            price: '¥580',
            image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=200&q=80',
            featured: false,
          },
        ],
      },
    ],
  },

  space: {
    label: '空間',
    headline: 'ディテールに宿る哲学',
    subtext: 'ラウンジ空間を形作るすべての要素は、意図的に配置されています。落ち着いた照明、厳選された音楽、上質な素材。すべての細部が、お客様に忘れられない体験を提供するために存在しています。',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=80',
        alt: '上質なラウンジインテリア',
        caption: '洗練されたデザインと快適性の融合',
      },
      {
        src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=800&q=80',
        alt: '窓際のプライベート席',
        caption: '自然光が差し込む特別な空間',
      },
      {
        src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80',
        alt: 'バリスタカウンター',
        caption: '職人技を間近で体験',
      },
    ],
  },

  contact: {
    label: 'お問い合わせ',
    headline: 'ご来店をお待ちしております',
    subtext: 'お気軽にお問い合わせください。特別なご要望にも対応いたします。',
    address: {
      title: '住所',
      line1: '〒150-0001',
      line2: '東京都渋谷区神宮前 3-4-5',
    },
    hours: {
      title: '営業時間',
      weekday: '平日: 10:00 - 21:00',
      weekend: '週末: 9:00 - 22:00',
      closed: '定休日: 火曜日',
    },
    contact: {
      title: 'お問い合わせ',
      phone: '03-1234-5678',
      email: 'info@loungex.jp',
      wechat: 'loungeX_tokyo',
    },
    social: [
      {
        platform: 'Instagram',
        handle: '@loungex_tokyo',
        url: 'https://instagram.com/loungex_tokyo',
      },
      {
        platform: 'Twitter',
        handle: '@loungeX_jp',
        url: 'https://twitter.com/loungeX_jp',
      },
      {
        platform: 'Facebook',
        handle: 'loungeXTokyo',
        url: 'https://facebook.com/loungeXTokyo',
      },
    ],
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.370853990647!2d139.7093286!3d35.6717698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQwJzE4LjQiTiAxMznCsDQyJzMzLjYiRQ!5e0!3m2!1sen!2sjp!4v1234567890',
  },

  footer: {
    tagline: '一杯一杯のコーヒーに、価値がある',
    links: [
      { label: 'ホーム', href: '#hero' },
      { label: '私たちの想い', href: '#story' },
      { label: 'メニュー', href: '#menu' },
      { label: '空間', href: '#space' },
      { label: 'お問い合わせ', href: '#contact' },
    ],
    copyright: '© 2024 lounge X. すべての権利を保有します。',
  },
};

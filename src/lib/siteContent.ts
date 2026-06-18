// Site content for カフェ
export const siteContent = {
  meta: {
    title: 'カフェ — 都会の中の上質な隠れ家',
    description: '自家焙煎スペシャルティコーヒー × シェフの日替わり限定スイーツ × プライベート貸切体験。完全予約制の上質なカフェ空間、1日12組様限定。',
    lang: 'ja',
  },

  nav: {
    links: [
      { label: 'ホーム', href: '#hero' },
      { label: '私たちの想い', href: '#story' },
      { label: 'メニュー', href: '#menu' },
      { label: '予約', href: '#booking' },
      { label: '空間', href: '#space' },
      { label: 'お問い合わせ', href: '#contact' },
    ],
    cta: 'ご予約',
  },

  hero: {
    overline: '都会の中の上質な隠れ家',
    headline: ['一杯一杯のコーヒーに、', '予約する価値がある'],
    subtext: '自家焙煎スペシャルティコーヒー × シェフの日替わり限定スイーツ × プライベート貸切体験。ここでは、時間が品質のために流れる。',
    cta: 'ご予約はこちら',
    trustIndicator: '1日12組様限定 · 事前予約優先',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80',
    imageAlt: '上質なカフェ空間',
    badge: {
      text: '厳選産地豆 · 店内焙煎',
      icon: 'coffee',
    },
  },

  story: {
    label: '私たちの想い',
    headline: 'コーヒーは、時間と温度の芸術',
    paragraphs: [
      'カフェは2021年、バリスタオーナーによって創業されました。「すべてのコーヒーは、待つ価値のある体験であるべき」というシンプルな信念から生まれました。世界中の厳選された産地から直接コーヒー豆を調達し、店内で焙煎。すべての豆が最高の状態で抽出されることを保証しています。',
      'シェフが毎朝手作りする限定スイーツは、フランス菓子から日本の生クリームロールまで、伝統的な技法と旬の食材の完璧なバランスを追求しています。本当の品質は過度な装飾を必要としません。細部がすべてを語ります。',
      'ここは単なるカフェではなく、都会の中の精神的な憩いの場です。1日の来客数を制限することで、すべてのお客様に十分なスペース、時間、そして心のこもったサービスを提供できます。完全予約制により、すべての訪問に万全の準備をしています。',
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

  booking: {
    label: 'ご予約',
    headline: 'すべての出会いに、特別な時間を',
    subtext: '当店は完全予約制を採用しており、すべてのお客様に静かで快適なひとときをお楽しみいただけます。事前にご予約いただければ、最高のお席をご用意いたします。',
    features: [
      {
        icon: 'users',
        title: '1日限定',
        description: '最大12組様まで、サービス品質を保証',
      },
      {
        icon: 'clock',
        title: 'フレキシブルな時間帯',
        description: '10:00-22:00、2時間枠からお選びいただけます',
      },
      {
        icon: 'sparkles',
        title: '貸切サービス',
        description: 'イベント貸切対応、7日前までのご予約が必要',
      },
    ],
    form: {
      namePlaceholder: 'お名前',
      phonePlaceholder: 'お電話番号',
      emailPlaceholder: 'メールアドレス',
      datePlaceholder: 'ご希望日',
      timePlaceholder: 'ご希望時間',
      guestsPlaceholder: '人数',
      messagePlaceholder: 'ご要望やアレルギー情報など',
      submitButton: '予約を確定する',
      successMessage: 'ご予約ありがとうございます！24時間以内にご連絡いたします。',
      errorMessage: '送信中にエラーが発生しました。もう一度お試しください。',
    },
    timeSlots: [
      '10:00 - 12:00',
      '12:00 - 14:00',
      '14:00 - 16:00',
      '16:00 - 18:00',
      '18:00 - 20:00',
      '20:00 - 22:00',
    ],
    partySize: [
      { value: '1', label: '1名様' },
      { value: '2', label: '2名様' },
      { value: '3', label: '3名様' },
      { value: '4', label: '4名様' },
      { value: '5', label: '5名様' },
      { value: '6', label: '6名様' },
      { value: '7+', label: '7名様以上（貸切）' },
    ],
  },

  space: {
    label: '空間',
    headline: '細部までこだわった憩いの場',
    description: '北欧デザインと日本の美意識が融合した空間。自然光が差し込む大きな窓、職人による手作りの家具、慎重に選ばれた音楽。すべてがあなたの体験を豊かにします。',
    features: [
      {
        icon: 'home',
        title: '親密な雰囲気',
        description: '最大32席、各席に十分なプライベート空間',
      },
      {
        icon: 'wifi',
        title: '高速Wi-Fi',
        description: '仕事や勉強にも最適な静かな環境',
      },
      {
        icon: 'music',
        title: 'キュレーションされた音楽',
        description: 'ジャズからクラシックまで、厳選されたプレイリスト',
      },
      {
        icon: 'camera',
        title: 'インスタ映え',
        description: '自然光と美しいインテリア、撮影歓迎',
      },
      {
        icon: 'leaf',
        title: 'グリーン装飾',
        description: '厳選された観葉植物が空間を彩ります',
      },
      {
        icon: 'accessibility',
        title: 'バリアフリー',
        description: '車椅子対応、快適にご利用いただけます',
      },
    ],
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=800&q=80',
        alt: '温かみのある照明のカフェインテリア',
      },
      {
        src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
        alt: '窓際の快適な座席エリア',
      },
      {
        src: 'https://images.unsplash.com/photo-1559496417-e7f25c0f07f6?auto=format&fit=crop&w=800&q=80',
        alt: 'ミニマルなカウンターデザイン',
      },
      {
        src: 'https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&w=800&q=80',
        alt: '温かみのある木製家具と装飾',
      },
    ],
  },

  contact: {
    label: 'お問い合わせ',
    headline: 'お気軽にご連絡ください',
    subtext: 'ご質問、プライベートイベント、コラボレーションのご相談など、喜んで対応させていただきます。',
    address: {
      title: '所在地',
      line1: '東京都渋谷区代々木1-2-3',
      line2: '代々木ビル 1F',
    },
    hours: {
      title: '営業時間',
      weekday: '火曜日〜金曜日：10:00 - 22:00',
      weekend: '土曜日・日曜日：09:00 - 23:00',
      closed: '定休日：月曜日',
    },
    contact: {
      title: 'お問い合わせ',
      phone: '+81 3-1234-5678',
      email: 'hello@cafe-tokyo.jp',
      wechat: 'Line ID: @cafetokyo',
    },
    social: [
      { handle: '@cafe.tokyo', url: 'https://instagram.com/cafe.tokyo' },
      { handle: 'Facebook', url: 'https://facebook.com/cafe.tokyo' },
      { handle: '@cafe_tokyo', url: 'https://twitter.com/cafe_tokyo' },
    ],
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8277649933296!2d139.70171431525845!3d35.68123998019419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd0d6b1ba1f%3A0x1c32a1f665e6b8e2!2z5Luj44CF5pyo!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp',
  },

  footer: {
    tagline: '都会の中の上質な隠れ家。自家焙煎のスペシャルティコーヒーと手作りスイーツで、特別なひとときをお届けします。',
    links: [
      { label: 'プライバシーポリシー', href: '#privacy' },
      { label: '利用規約', href: '#terms' },
      { label: '採用情報', href: '#careers' },
    ],
    copyright: '© 2024 カフェ. All rights reserved.',
  },
};

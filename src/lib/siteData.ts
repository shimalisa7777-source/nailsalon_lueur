export const salon = {
  name: "Nail Salon Lueur",
  nameJa: "ネイルサロン ルミエール",
  area: "大宮駅徒歩圏内",
  address: "〒000-0000 埼玉県さいたま市大宮区〇〇 0-0-0",
  hours: "10:00〜21:00",
  closed: "不定休",
  payment: "現金・クレジットカード・PayPay",
};

export const instagramUrl = "https://www.instagram.com/";

export const links = {
  line: "https://line.me/ja/",
  minimo: "https://minimodel.jp/",
  hotpepper: "https://beauty.hotpepper.jp/",
  map: "https://www.google.com/maps",
  instagram: instagramUrl,
};

export type MenuItem = { name: string; price: string; desc: string };

export const menus: Record<"gel" | "sculp" | "esthe", { label: string; items: MenuItem[] }> = {
  gel: {
    label: "ジェル",
    items: [
      { name: "シンプル", price: "¥6,000", desc: "ワンカラー・ラメグラデーションなど、上品でシンプルなデザイン" },
      { name: "定額デザイン", price: "¥9,000", desc: "季節感やトレンドを取り入れた定額デザイン" },
      { name: "付け放題", price: "¥10,000", desc: "持ち込みデザインやアートを楽しみたい方向け" },
    ],
  },
  sculp: {
    label: "スカルプ",
    items: [
      { name: "シンプル", price: "¥10,000〜", desc: "長さ出しを含むシンプルデザイン" },
      { name: "定額デザイン", price: "¥12,000〜", desc: "長さ出しとデザインを組み合わせた定額メニュー" },
      { name: "付け放題", price: "¥14,000〜", desc: "持ち込みデザインや華やかなアートを楽しみたい方向け" },
    ],
  },
  esthe: {
    label: "エステ",
    items: [
      { name: "ハーブピーリング", price: "¥12,000〜", desc: "肌のざらつきやくすみが気になる方向け" },
      { name: "毛穴ケア", price: "¥8,800〜", desc: "毛穴汚れや黒ずみが気になる方向け" },
      { name: "フェイシャルトリートメント", price: "¥9,900〜", desc: "肌状態に合わせたフェイシャルケア" },
    ],
  },
};

export const gallery = [
  { title: "Simple", label: "Popular", img: "/images/na1.png", desc: "オフィスにもなじむ上品なワンカラー" },
  { title: "Nuance", label: "", img: "/images/na2.png", desc: "淡い色味と抜け感のあるニュアンスデザイン" },
  { title: "Long Nail", label: "Recommend", img: "/images/na3.png", desc: "スカルプ・長さ出しで華やかな指先へ" },
  { title: "Magnet", label: "New", img: "/images/na4.jpg", desc: "光の角度で表情が変わる人気デザイン" },
  { title: "French", label: "", img: "/images/na5.jpg", desc: "清潔感のある大人フレンチ" },
  { title: "Beauty Care", label: "", img: "/images/na6.jpg", desc: "ネイルと一緒に整えるビューティーケア" },
];

export const faqs = [
  { q: "初めてでも予約できますか？", a: "もちろん大歓迎です。ご新規様はminimoまたはホットペッパーからご予約いただけます。" },
  { q: "持ち込みデザインは可能ですか？", a: "はい、お好きな画像をお持ちください。ご来店前にLINEで共有いただくとスムーズです。" },
  { q: "長さ出しやスカルプはできますか？", a: "対応しております。爪の状態に合わせてご提案いたします。" },
  { q: "フィルインはできますか？", a: "フィルインにも対応しています。爪に優しい施術を心がけています。" },
  { q: "エステメニューだけでも予約できますか？", a: "はい、エステ単体のご予約も可能です。お気軽にご相談ください。" },
  { q: "支払い方法は何がありますか？", a: "現金・クレジットカード・PayPayがご利用いただけます。" },
  { q: "当日予約はできますか？", a: "空き状況によりお受けできる場合があります。LINEまたは専用ページからご確認ください。" },
  { q: "キャンセルや変更はできますか？", a: "前日までにLINE、またはご予約時のページからご連絡をお願いいたします。" },
];

export const nav = [
  { label: "Concept", href: "#concept" },
  { label: "Menu", href: "#menu" },
  { label: "Design", href: "#design" },
  { label: "Reservation", href: "#reservation" },
  { label: "Access", href: "#access" },
];
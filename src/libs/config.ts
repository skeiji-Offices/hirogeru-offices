

const config = {
    // 1. 基本情報
    appName: "OfficeS（オフィスエス）",
    appDescription: "IT業界と宿泊業界で培った豊富な経験を活かし、企業のIT課題解決をサポートするITコンサルティングサービス。",
    domainName: "offices.hirogeru.net",

    // 2. 配色 (DaisyUI / Tailwind)
    colors: {
        theme: "light",
        main: "#667eea", // Extracted theme color
        toast: "#667eea",
    },

    // 3. SEO設定 & 認証関係
    auth: {
        loginUrl: "/api/auth/signin",
        callbackUrl: "/dashboard",
    },

    // コンテンツセクション
    hero: {
        title: "OfficeS（オフィスエス）",
        description: "IT業界と宿泊業界で培った豊富な経験を活かし、企業のIT課題解決をサポートします。",
        buttonText: "お問い合わせ",
        image: "",
        badge: "✨ 信頼と実績のITコンサルティング"
    },

    features: [
        {
            title: "ITコンサルティング",
            description: "企業のIT課題解決をトータルサポート。技術選定から導入、運用まで一貫して支援します。"
        },
        {
            title: "宿泊業界の経験",
            description: "豊富な業界経験を活かした専門的なアプローチで、宿泊施設特有の課題に対応します。"
        },
        {
            title: "製造業参画",
            description: "2025年6月より製造業の情報システムプロジェクトに参画。幅広い業界への対応力を強化しています。"
        }
    ],

    portfolio: {
        title: "開発実績 / Lab",
        description: "最新の技術スタック（Next.js + Antigravity）を活用して開発したWEBアプリケーションの実験・制作事例です。",
        items: [
            {
                title: "Task Breaker AI",
                description: "大きなタスクをAIが自動で小さく実行可能なアクションステップに分解。日々の生産性を向上させるタスク管理アシスタント。",
                link: "https://task-breaker-eight.vercel.app",
                image: "/images/portfolio/task-breaker-v3.png",
            },
            {
                title: "Mandala Chart Helper",
                description: "目標達成のためのフレームワーク「マンダラチャート」を直感的に作成・管理できるWEBツール。思考の整理と行動計画をサポート。",
                link: "https://mandala-chart-helper.vercel.app",
                image: "/images/portfolio/mandala-chart-v2.jpg",
            },
        ],
    },

    representative: {
        name: "代表　佐藤啓治",
        message: "東北・岩手からの参画となりますが、これまでの経験を活かし、貴プロジェクトの成功に貢献できるよう尽力いたします。"
    },

    contact: {
        email: "info@hirogeru.net",
        phone: "070-4696-8212",
        note: "無料相談実施中 – まずはお気軽にご相談ください"
    },

    footer: {
        copyright: "© OfficeS. All rights reserved."
    }
};

export default config;
/* ========================================
   Portfolio Content Data — data.js
   修改此檔案即可更新所有頁面內容
   ======================================== */

var PORTFOLIO = {

    /* ── 導覽列 ── */
    nav: {
        brand: 'LaiYC'
    },

    /* ── Hero ── */
    hero: {
        kicker:    ['AI 應用規劃師', '技術轉譯者', '落地型 PM'],
        nameFirst: 'Yen&#8209;Chiang',
        nameLast:  'Lai',
        nameNick:  '(John)',
        nameZh:    '賴彥江',
        tagline: [
            '具備系統思維與技術轉譯能力的落地型專家',
            '擅長透過 AI 自動化編排組織效能，將複雜戰略轉化為具體商業產值'
        ],
        photo:    'assets/images/profile.png',
        photoAlt: 'Yen-Chiang Lai',
        metrics: [
            { n: '1,000', unit: 'h',  label: '年度工時釋放' },
            { from: '5.2', to: '7.7', label: 'AI 認知分數提升'  },
            { n: '68K+',              label: '內容累積瀏覽'  }
        ],
        ctas: [
            { text: '查看作品', href: '#projects', type: 'primary' },
            { text: '聯絡我 →', href: '#contact',  type: 'text'    }
        ]
    },

    /* ── 關於我 ── */
    about: {
        posLabel: 'AI 應用規劃師 · 技術轉譯者 · 落地型 PM',
        quote: '「消除商務決策與技術開發間的資訊對等偏差，確保投資能轉化為可量化的數值。」',
        bio: [
            '作為一名具備工程底蘊與系統分析思維的實踐者，我專注於在複雜的商業環境中定位「槓桿點」。我的價值在於讓技術、流程與商業目標能夠真正對齊。',
            '在 ASUS、雄獅旅遊與騰雲科技期間，分別掌握了產品製造流程與軟體維運的穩定性要求。在綠岩能源期間，更是親自一條龍完成從發現、發想到開發交付，透過觀察行政與財會部門的重複性痛點，親手利用 AI 工具建立自動化架構。'
        ],
        values: [
            { title: '實戰戰績', desc: '主導企業級 AI 導入，成功釋放 **1,000+ 小時**行政產值' },
            { title: '決策轉譯', desc: '60 頁技術研究濃縮 3 頁高階管理決策摘要。主講 AI 提升同仁認知 **5.2 → 7.7**' },
            { title: '風險預判', desc: '具備在專案初期識別系統架構性風險的鑑別力，並提出建議' }
        ],
        education: [
            { period: '2020–2022', text: '國立成功大學 資源工程學系', degree: '碩士', logo: 'assets/images/ncku-logo1.jpg' },
            { period: '2016–2020', text: '國立成功大學 資源工程學系', degree: '學士', logo: 'assets/images/ncku-logo1.jpg' }
        ]
    },

    /* ── 專案 ── */
    projects: [
        {
            n: '01',
            img: 'assets/images/proj-01-n8n.jpg',
            title: 'n8n AI 內容自動化管線',
            desc: '利用 n8n 結合 GenAI API（wavespeed.ai / fal.ai）打造全自動化內容管線，實現從影片生成到 YouTube 上傳的端對端自動化。',
            tags: ['n8n', 'GenAI', 'API', 'YouTube'],
            impact: { value: '3.4萬', desc: 'YouTube 觀看 · 3 週 · NT$1,000 成本' }
        },
        {
            n: '02',
            img: 'assets/images/proj-02-ai-tools.jpg',
            title: '企業 AI 自動化工具套件',
            desc: '以敏捷方式低成本交付 5+ 項影響力工具，包含 OCR 票據自動化、合約資料萃取、LINE 名片共享系統。',
            tags: ['OCR', 'Python', 'LINE API', 'AI'],
            impact: { value: '1,000+', desc: '年省工時（小時）' }
        },
        {
            n: '03',
            title: '能源展產品互動演示網站',
            desc: '於能源展期間透過 Vibecoding 獨立交付產品互動演示網站，將抽象能源監控邏輯轉譯為具體操作介面。除開發外，亦親赴現場擔任業務推廣角色，向參展者直接展示與說明產品。',
            tags: ['Vibecoding', 'HTML/CSS/JS', 'MVP'],
            impact: { value: '↑', desc: '顯著提升商機開發效率' },
            img: 'assets/images/proj-03-energy-expo.jpg'
        },
        {
            n: '04',
            title: '企業 AI 賦能訓練計畫',
            desc: '規劃並主講 AI 賦能訓練，涵蓋 CEO 與 20+ 核心同仁。運用深入淺出的技術簡報加速推動組織擁抱 GenAI。',
            tags: ['AI Training', 'GenAI', 'Education'],
            impact: { value: '+48%', desc: 'AI 認知提升（5.2 → 7.7）' },
            img: 'assets/images/proj-04-ai-training.jpg'
        },
        {
            n: '05',
            title: 'GenAI 影像工程',
            desc: '針對知名 IP（火影忍者、世紀帝國 II）進行影像重製，掌握並克服運鏡控制與畫面一致性問題。',
            tags: ['GenAI', 'Prompt Eng.', 'Image AI'],
            impact: { value: '1,750+', desc: 'YouTube 觀看 · FB 1,200+ 瀏覽' },
            img: 'assets/images/proj-05-genai-image.png',
            url: 'https://youtu.be/fpFqR8W8qFo'
        },
        {
            n: '06',
            img: 'assets/images/proj-06-vocus-blog.jpg',
            title: '方格子部落格',
            desc: '長期經營部落格，分享各種學習與心得，建立個人內容品牌。',
            tags: ['Content', 'SEO', 'B2B'],
            impact: { value: '68K+', desc: '累積瀏覽 · 64 篇 · SEO 競賽前十名' }
        }
    ],

    /* ── 工作經歷 ── */
    experience: [
        {
            period: '2025/09 – 至今',
            badge: { text: '現職', type: 'current' },
            company: '綠岩能源',
            companyEn: 'GreenRock Energy',
            role: 'AI 應用規劃工程師',
            mission: '從 0 到 1 主導企業級 AI 轉型、非侵入式組織變革與風險管控',
            bullets: [
                '主導外部供應商技術評估與導入規劃',
                '透過 Vibecoding 獨立交付能源展產品互動演示網站，吸引大量參展者駐足',
                '規劃並主講高階 AI 賦能訓練（涵蓋 CEO 與 20+ 核心同仁），AI 掌握度 5.2 → 7.7（+48%）',
                '低成本敏捷交付 5 項工具（OCR 票據自動化、合約資料萃取、LINE 名片共享等）',
                '行政部門單次作業從 1–2 小時縮至 10 分鐘，年省 **1,000+ 小時**'
            ]
        },
        {
            period: '2025/01 – 2025/08',
            img: 'assets/images/exp-turncloud-expo.jpg',
            company: '騰雲科技',
            companyEn: 'Turn Cloud',
            role: 'PM',
            mission: '數位產品 GTM、生成式 AI 商業研究與高階展會策展，負責創造商機',
            bullets: [
                '一週內將 60+ 頁技術資料濃縮為 3 頁高階管理洞察摘要',
                '以 3 人力 / 1 個月，完成百頁專業教材與線上課程',
                '負責「2025 AI 未來商務展」，創造 1,000+ 現場互動，獲取 40+ 高潛力 B2B 名單'
            ]
        },
        {
            period: '2023/12 – 2024/07',
            company: '雄獅旅遊',
            companyEn: 'Lion Travel',
            role: '軟體工程師',
            mission: '掌握中大型企業 IT 系統架構，為評估商業合作技術可行性打下基礎',
            bullets: [
                '使用 ASP.NET MVC + MSSQL 開發與維運 ERP 客製模組',
                '優化行銷與業務資訊查詢流程'
            ]
        },
        {
            period: '2023/04 – 2023/10',
            img: 'assets/images/exp-asus.jpg',
            company: '華碩電腦',
            companyEn: 'ASUS',
            role: '專案管理工程師',
            mission: '確保產品（ROG 手機）從概念到量產階段的交付',
            bullets: [
                '跨部門協調工廠、硬體工程與研發，走過完整 SR/ER/PR 產品開發流程',
                '人力調度與時程控管，降低專案人力時間成本約 **15%**'
            ]
        }
    ],

    /* ── 認證 ── */
    certs: {
        cloudLabel: '雲端 AI 認證',
        dataLabel:  '數據與自動化認證',
        cloud: [
            { provider: 'Amazon Web Services', name: 'AWS Certified AI Practitioner', year: '2026/02', url: 'https://www.credly.com/badges/affc62d5-3e83-414a-9b35-716bd00d3ee0/public_url' },
            { provider: 'Microsoft',           name: 'Azure AI Fundamentals',          year: '2026/01', url: 'https://learn.microsoft.com/en-us/users/35693643/credentials/5d51832f13d2e781' },
            { provider: 'Google',              name: 'Gemini Certified Educator',      year: '2025/09', url: 'https://edu.google.accredible.com/6e10ea34-de8a-42f3-ae1b-0683b763f33f' }
        ],
        data: [
            { provider: 'n8n',       name: 'Course Level 2 自動化工作流',  year: '2025/12', url: 'https://community.n8n.io/badges/105/completed-n8n-course-level-2?username=xfjioyhnplus' },
            { provider: 'Certiport', name: 'IT Specialist – Databases',   year: '2022/12', url: 'https://www.credly.com/badges/6e4fa665-b1be-44cb-a469-bfc694b6c4ed' },
            { provider: 'Certiport', name: 'IT Specialist – Python',      year: '2022/12', url: 'https://www.credly.com/badges/b0de01d6-2bf1-401e-8f00-a2b0ac59b523' }
        ]
    },

    /* ── 技術能力 ── */
    skills: {
        label: '技術能力',
        items: [
            { cat: '後端開發',    items: 'ASP.NET MVC · MSSQL · Python · SQL' },
            { cat: 'AI / 自動化', items: 'n8n · GenAI Prompt Engineering · OCR · AI Workflow' },
            { cat: '方法論',      items: 'System Dynamics · Agile/Scrum' },
            { cat: '前端 / 工具', items: 'HTML · CSS · JS · Vibecoding · Canva' },
            { cat: '語言',        items: '繁體中文（母語）· English' }
        ]
    },

    /* ── 聯絡資訊 ── */
    contact: {
        intro: '目前積極尋找共鳴的機會，歡迎各種合作、邀約與交流。',
        linksLabel: '線上資產',
        items: [
            { label: 'Email',    value: 'xfjioyhnplus@gmail.com', url: 'mailto:xfjioyhnplus@gmail.com' },
            { label: 'Phone',    value: '0982-972-641',           url: 'tel:0982972641' },
            { label: 'Location', value: '新竹，台灣' }
        ]
    },

    /* ── 頁腳 ── */
    footer: {
        copy:     '© 2026 Yen-Chiang Lai',
        location: '新竹，台灣'
    },

    /* ── 聯絡連結 ── */
    links: [
        { label: '方格子部落格', sub: '64 篇 · 68K+ 瀏覽', url: 'https://vocus.cc/salon/65ca4596fd897800013eadad' },
        { label: 'YouTube',     sub: 'AI 影像工程 · n8n',   url: 'https://www.youtube.com/@LaiYC-Recycle' },
        { label: 'GitHub',      sub: '興趣專案',             url: 'https://github.com/LAI-Recycle' },
        { label: 'LinkedIn',    sub: 'Yen-Chiang Lai',       url: 'https://www.linkedin.com/in/yen-chiang-lai-83a417187/' }
    ]

};

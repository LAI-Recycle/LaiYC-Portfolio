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
        kicker:    ['系統思考實踐者', 'AI 應用規劃師', '技術轉譯者'],
        nameFirst: 'Yen&#8209;Chiang',
        nameLast:  'Lai',
        nameNick:  '(John)',
        nameZh:    '賴彥江',
        tagline: [
            '在技術、流程、角色分工與商業目標之間找出可突破的路徑',
            '我關注如何用無痛的方式讓 AI 進入組織流程、協作與決策'
        ],
        photo:    'assets/images/profile.png',
        photoAlt: 'Yen-Chiang Lai',
        metrics: [
            { n: '1,000+', unit: 'h',  label: '年度工時釋放'  },
            { from: '5.2',  to: '7.7', label: 'AI 掌握度提升' },
            { n: '64',     unit: '篇', label: '長期內容輸出'  }
        ],
        ctas: [
            { text: '查看代表作品',    href: '#projects', type: 'primary' },
            { text: '我如何思考 →', href: '#beliefs',  type: 'text'    }
        ]
    },

    /* ── 關於我 ── */
    about: {
        posLabel: '系統思考實踐者 · AI 應用規劃師 · 技術轉譯者',
        quote: '「好的解法不是從工具開始，而是從問題定義與思考方法開始。」',
        bio: [
            '我具備資源工程與經濟的系統思考訓練，並在企業現場推動 AI 應用、流程改善與跨部門協作。一路走來，我持續在處理的，是技術、流程、角色分工與商業目標之間如何被整合。',
            '在真實工作中，我看見組織需要的是能串連使用經驗、需求判斷與導入決策的方法藍圖。這也讓我持續把自己從 AI 應用規劃者，往更完整的系統架構與導入規劃方向發展。'
        ],
        values: [
            { title: '系統整合視角', desc: '從整體系統、角色互動與長期影響理解問題。' },
            { title: '需求導向',     desc: '企業需要的是從最底層的需求出發、思考架構並跨部門溝通規劃。' },
            { title: '轉譯與推動',   desc: '透過對話把抽象與複雜邏輯，轉譯成無論技術或管理，都能跨部門理解的語言。' }
        ],
        education: [
            { period: '2020–2022', text: '國立成功大學 資源工程學系', degree: '碩士', logo: 'assets/images/ncku-logo1.jpg',
              thesis: '應用系統動態學評估碳定價對我國碳排放量與電力供需之影響',
              thesisNote: '台灣首篇整合社會需求系統的碳定價系統動態學模型，模擬碳費費率對再生能源、碳排放與電力供需的系統性影響' },
            { period: '2016–2020', text: '國立成功大學 資源工程學系', degree: '學士', logo: 'assets/images/ncku-logo1.jpg' }
        ]
    },

    /* ── 核心觀點 ── */
    beliefs: {
        items: [
            {
                title: '企業需要的是從需求出發的導入方法',
                desc:  '真正的挑戰在於需求分析、規劃與跨部門決策判斷。'
            },
            {
                title: '局部優化是起點，系統槓桿是目標',
                desc:  '以低風險的局部試點切入，找出能對齊的槓桿點，讓改變從單點擴散誇部門。'
            },
            {
                title: '工具要能被理解、採用並維持，才算真正產生價值',
                desc:  '我持續練習把複雜技術翻譯成不同角色都能理解的語言，用簡單的故事闡述複雜的事物。'
            }
        ]
    },

    /* ── 我如何思考 ── */
    approach: {
        label: '我如何思考',
        steps: [
            { title: '定義問題',    desc: '先釐清真正要解的是什麼，而不是急著找工具。' },
            { title: '場景與證據',    desc: '從真實現場的現象、流程與例子確認問題是否成立。' },
            { title: '判斷重要性', desc: '評估這件事背後的成本、風險與影響範圍。' },
            { title: '找出核心問題', desc: '區分症狀與根因，找出真正的結構性卡點。' },
            { title: '定義角色', desc: '釐清我目前能切入、能推動、能創造價值的位置。' },
            { title: '補足並推進', desc: '辨識方法、知識與經驗上的缺口，讓解法不只成立，也能讓自己成長。' },
        ]
    },

    /* ── 專案 ── */
    projects: [
        {
            n: '01',
            img: 'assets/images/proj-01-ai-tools.jpg',
            title: '企業 AI 自動化工具套件',
            desc: '從多次訪談、流程釐清到需求轉譯，並以敏捷方式低成本交付 5+ 項影響力工具，包含 OCR 票據自動化、合約資料萃取、LINE 名片共享系統。',
            
            tags: ['AI 導入', 'OCR', '流程改善', '需求分析'],
            impact: { value: '1,000+', desc: '年省工時（小時）' }
        },
        {
            n: '02',
            img: 'assets/images/proj-02-ai-training.jpg',
            title: '企業 AI 賦能訓練計畫',
            desc: '將 AI 技術資訊轉譯成組織可理解的共同語言，規劃並主講 AI 賦能課程，協助管理層與同仁建立導入想像。',
            tags: ['AI Training', '技術轉譯', '組織賦能'],
            impact: { value: '+48%', desc: 'AI 掌握度提升（5.2 → 7.7）' }
        },
        {
            n: '03',
            img: 'assets/images/proj-03-energy-expo.jpg',
            title: '能源展產品互動演示網站',
            desc: '於能源展期間透過 Vibecoding 獨立交付產品互動演示網站，將抽象能源監控邏輯轉譯為具體操作介面。除開發外，亦親赴現場擔任業務推廣角色，向參展者直接展示與說明產品。',
            tags: ['產品敘事', 'Vibecoding', 'MVP', 'Demo'],
            impact: { value: '↑', desc: '提升現場商機溝通效率' }
        },
        {
            n: '04',
            img: 'assets/images/proj-04-n8n.jpg',
            title: 'n8n AI 內容自動化管線',
            desc: '以 side project 驗證 AI workflow 的端到端可能， 並嘗試不同 GenAI API（wavespeed.ai / fal.ai）從影片生成到 YouTube 上傳完成自動化串接。',
            tags: ['n8n', 'GenAI', 'API', 'Workflow'],
            impact: { value: '3.4萬', desc: 'YouTube 觀看 · 3 週 · NT$1,000 成本' }
        },
        {
            n: '05',
            img: 'assets/images/proj-05-vocus-blog.jpg',
            title: '方格子部落格',
            desc: '長期輸出學習心得，將複雜內容轉化為更容易理解的文章。',
            tags: ['Writing', 'SEO', '知識輸出'],
            impact: { value: '68K+', desc: '累積瀏覽 · 64 篇 · 最熱門文章 20,000+ 瀏覽' }
        },
        {
            n: '06',
            img: 'assets/images/proj-06-genai-image.png',
            title: 'GenAI 影像工程',
            desc: '以 side project 創作實驗驗證運鏡、一致性與模型差異，針對知名 IP（火影忍者、世紀帝國 II）進行影像重製，持續鍛鍊新技術的快速理解與實作能力。',
            tags: ['GenAI', 'Prompt', '創作實驗'],
            impact: { value: '1,750+', desc: 'YouTube 觀看 · FB 1,200+ 瀏覽' },
            url: 'https://youtu.be/fpFqR8W8qFo'
        }
    ],

    /* ── 社群與領導力 ── */
    community: {
        items: [
            {
                year: '持續中',
                title: '文章與內容輸出',
                desc: '透過部落格、影片與社群分享觀察與方法，讓複雜內容更容易被理解。'
            },
            {
                year: '2025',
                title: 'FOSSASIA / COSCUP 國際社群交流',
                desc: '與 COSCUP 夥伴出席曼谷 FOSSASIA 2025，東南亞最大開源年會，累積跨文化溝通與國際社群互動經驗。'
            },
            {
                year: '2022',
                title: '成大管理顧問社共同創辦人',
                desc: '延伸對問題拆解與方法論的興趣，建立思考框架。'
            },
            {
                year: '2019',
                title: '成大單車節總召集人',
                desc: '主導台灣南部最大規模大學博覽會，跨 40+ 系所協調、組建 200+ 人志工團隊，達成 1M+ Facebook 觸及，單日吸引超過萬人訪客。'
            },
            {
                year: '2018',
                title: 'NVCC 39 小時影片競賽第一名《女也》',
                desc: '39 小時內完成劇本、拍攝與剪輯，擔任編劇兼導演，與 6 人團隊完成短片，獲首獎並於百人場公映。'
            }
        ]
    },

    /* ── 我正在研究的問題 ── */
    focus: {
        label: '我正在研究的問題',
        items: [
            '如何從 AI 個人工具使用，走向跨部門流程重構？',
            '在複雜組織裡，如何建立 AI 導入的共同語言與架構藍圖？',
            '技術、需求、角色分工與商業目標之間，要如何對話整合？'
        ],
        direction: '我正在尋找能結合系統架構思維與 AI 導入方法的舞台。'
    },

    /* ── 工作經歷 ── */
    experience: [
        {
            period: '2025/09 – 至今',
            badge: { text: '現職', type: 'current' },
            img: 'assets/images/exp-greenrock.jpg',
            company: '綠岩能源',
            companyEn: 'GreenRock Energy',
            role: 'AI 應用規劃工程師',
            mission: '從 0 到 1 主導 AI 導入、非侵入式組織變革與風險管控',
            bullets: [
                '透過多次訪談與流程梳理，釐清跨部門合作流程，找出 AI 導入槓桿點',
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
            mission: '決策資訊濃縮、數位產品 GTM 、市場敘事與高階展會策展',
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
            mission: '學習大型跨部門協作節奏與硬體產品交付管理',
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
            { provider: 'Microsoft',           name: 'Azure AI Fundamentals',         year: '2026/01', url: 'https://learn.microsoft.com/en-us/users/35693643/credentials/5d51832f13d2e781' },
            { provider: 'Google',              name: 'Gemini Certified Educator',     year: '2025/09', url: 'https://edu.google.accredible.com/6e10ea34-de8a-42f3-ae1b-0683b763f33f' }
        ],
        data: [
            { provider: 'n8n',       name: 'Course Level 2 自動化工作流', year: '2025/12', url: 'https://community.n8n.io/badges/105/completed-n8n-course-level-2?username=xfjioyhnplus' },
            { provider: 'Certiport', name: 'IT Specialist – Databases',  year: '2022/12', url: 'https://www.credly.com/badges/6e4fa665-b1be-44cb-a469-bfc694b6c4ed' },
            { provider: 'Certiport', name: 'IT Specialist – Python',     year: '2022/12', url: 'https://www.credly.com/badges/b0de01d6-2bf1-401e-8f00-a2b0ac59b523' }
        ]
    },

    /* ── 技術能力 ── */
    skills: {
        label: '核心能力',
        items: [
            { cat: '複雜問題拆解',    items: '系統思考 · 槓桿點識別 · 流程釐清 · 需求分析' },
            { cat: 'AI 導入與自動化', items: 'AI Workflow · OCR · n8n · Prompt Engineering' },
            { cat: '技術轉譯與溝通',  items: '高階簡報 · 跨部門溝通 · 教學賦能 · 展會敘事' },
            { cat: '視覺敘事',        items: 'AI 影像生成 · Prompt 運鏡 · 影片剪輯 · 視覺說故事' },
            { cat: '系統與產品實作',  items: 'Python · SQL · ASP.NET MVC · HTML/CSS/JS' },
            { cat: '方法',      items: 'System Dynamics · Agile/Scrum' },
            { cat: '語言',      items: '繁體中文 · English' }
        ]
    },

    /* ── 聯絡資訊 ── */
    contact: {
        intro: '如果你也關心 AI 如何進入組織流程、系統整合與跨域協作，歡迎與我交流。',
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
        { label: '方格子部落格', sub: '思考觀察 × 學習輸出', url: 'https://vocus.cc/salon/65ca4596fd897800013eadad' },
        { label: 'LinkedIn',    sub: '職涯與專案背景',                  url: 'https://www.linkedin.com/in/yen-chiang-lai-83a417187/' },
        { label: 'GitHub',      sub: '各種 side project',        url: 'https://github.com/LAI-Recycle' },
        { label: 'YouTube',     sub: 'AI 影像實驗與人生紀錄',          url: 'https://www.youtube.com/@LaiYC-Recycle' }
    ]

};

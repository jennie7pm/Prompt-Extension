const promptsData = {
    en: {
        favorites: [
            { title: "Digital Initiatives in Mid-Term Management Plan", content: "Please list the digital initiatives and items related to xxx Corporation's mid-term management plan in order of priority." },
            { title: "Digital Initiatives in Integrated Report", content: "Please list the digital initiatives and items related to xxx Corporation's integrated report in order of priority." },
            { title: "Recent AI Initiatives", content: "Please outline the recent initiatives that xxx Corporation has been working on regarding generative AI." },
            { title: "Comparison with Competitors and Strengths", content: "Please provide a comparison between xxx Corporation and its competitors in the same industry, highlighting xxx Corporation's strengths and characteristics." },
            { title: "Business Growth through Microsoft AI Services", content: "How can Microsoft's AI services contribute to the business growth of ○○ Corporation? Please consider the following points. #Business Challenges of ○○ Corporation #Strategies Using Microsoft AI Services" },

            { title: "Start of a New Day", content: "Provide a summary of where I was mentioned in email, Teams chat and channels over the past 24 hours. Using this information, prioritize my top 3 action items for today" },
            { title: "Meeting Summary", content: "Draft a message to 'Person Name' with an update regarding 'Meeting Topic' meeting. Include a table with attendees and roles. Highlight decisions made and any action items that need to be followed up on with owners." },
            { title: "Writing Perspectives for Others", content: "Prompt 1: I'd like to write a peer assessment for 'Person Name'. Please analyze our communication and provide a summary of their strengths, accomplishments, contribution and impact, and how they have assisted in the growth of others. In addition, provide a statement of their involvement with diversity & inclusion to help Microsoft be a more diverse and inclusive culture.\n\nPrompt 2: Now, act as an organizational thought leader with a deep understanding of empathetic leadership as well as inclusive capabilities. I will provide you with my personal assessments of this person. Your task is to utilize the research and my input to draft a response to the following questions: ..." },
            
        ],
        trending: [
            { title: "Challenging Myself", content: "Provide me with a series of challenging questions or problems related to 'Topic or Skill' to test my understanding and improve long-term retention." },
            { title: "Office Time Traveler", content: "Act like a future version of me who's traveled back in time from 6 months ahead. Your mission is to give me insights based on what you've seen—drawing from my current work habits. Write a message with advice on what I should keep doing and what I need to change to reach my goals. Make it a fun mix of encouragement, practical tips, and humor! ..." },
        ],
        department: {
            sales: [
                { title: "AIR-* Kusto Query", content: "Give me a Kusto query for 'AIR-*'' between 'Start Date' and 'End Date'." },
                { title: "Customer Tickets", content: "Give me a list of CRIs that 'Customer Name' has filed between 'Start Date' and 'End Date'. Highlight any Sev0-2 incidents. Focus more specifically on 'Topic' and summarize any issues on that end." },
            ],
            marketing: [
                { title: "Social Media Campaign", content: "Design a social media campaign to increase brand awareness among millennials." },
                { title: "Content Marketing", content: "Develop a content marketing strategy to position our company as a thought leader in the industry." },
            ]
        }
    },
    jp: {
        favorites: [
            { title: "中期経営計画におけるデジタル施策", content: "xxx 株式会社の中期経営計画の中でデジタルに関連する施策・項目を優先度順に箇条書きで記述してください。" },
            { title: "統合報告書におけるデジタル施策", content: "xxx 株式会社の統合報告書の中でデジタルに関連する施策・項目を優先度順に箇条書きで記述してください。" },
            { title: "生成AIの取り組み事例", content: "xxx 株式会社が直近で取り組まれている生成 AI の事例について箇条書きで記述してください。" },
            { title: "同業界企業との比較と強み", content: "xxx 株式会社と同業界の企業との比較とその中での xxx 株式会社の強みと特長について教えてください。" },
            { title: "Microsoft AIサービスのビジネス活用", content: "MicrosoftのAIサービスは、○○株式会社のビジネス成長にどう役立つか、以下の点に沿って考えてみてください。 #○○株式会社のビジネス課題　#Microsoft AIサービスを使った方策" },
        
            { title: "新しい一日の始まり", content: "過去24時間、メール、Teamsチャット、チャンネルで私がメンションされた箇所を要約してください。この情報を使って、今日の私が優先すべきアクションアイテム 3つを教えてください。" },
            { title: "会議の要約", content: "'<人の名前> 宛に、<会議の名前> に関するアップデートを伝えるメッセージを作成してください。出席者とその役割を示した表を含めてください。決定事項や、フォローアップをする必要のあるアクションアイテムをハイライトしてください。" },
            { title: "他の人への評価を書く", content: "プロンプト1: ＜人物名＞と相互評価を書きたいと思います。私たちのコミュニケーションを分析し、その長所、成果、貢献、影響力、他者の成長をどのように助けたかについてまとめてください。さらに、マイクロソフトがより多様で包括的な文化になるよう、ダイバーシティ＆インクルージョンにどのように関与したかを述べてください\n\nプロンプト2: 次に、共感的リーダーシップとインクルーシブ能力を深く理解した組織のオピニオンリーダーとして行動してください。この人物に関する私の個人的な評価を提供します。あなたのタスクは、リサーチと私のインプットを踏まえ、以下の質問に対する回答を作成することです：..." },
        
        ],
        trending: [
            { title: "自分を試す", content: "＜トピックまたはスキルを挿入する＞に関連した一連の問題を作成し、私の理解をチェックすることで、長期的な知識の定着を手助けしてください。" },
            { title: "未来から来た働く私", content: "6カ月先の未来からタイムスリップしてきた私のように振る舞ってください。あなたのミッションは、私の現在の仕事の習慣から、あなたが見たことに基づいて私に洞察を与えることです。目標を達成するために、私が何を続けるべきか、何を変えるべきかについてのアドバイスをメッセージに書いてください。励まし、実践的なヒント、ユーモアを織り交ぜた楽しいメッセージにしてください！..." },
        ],
        department: {
            sales: [
                { title: "AIR-* Kustoクエリ", content: "'開始日'から'終了日'までの'AIR-*'に対するKustoクエリを提供してください。" },
                { title: "顧客チケット", content: "'顧客名'が'開始日'から'終了日'までに提出したCRIのリストを提供してください。重大度0-2のインシデントをハイライトしてください。特に'トピック'に焦点を当て、その点での問題を要約してください。" },
            ],
            marketing: [
                { title: "ソーシャルメディアキャンペーン", content: "ミレニアル世代の間でブランド認知度を高めるためのソーシャルメディアキャンペーンを設計してください。" },
                { title: "コンテンツマーケティング", content: "業界の第一人者として当社を位置づけるためのコンテンツマーケティング戦略を策定してください。" },
            ]
        }
    }
};

let currentLanguage = 'jp';


document.addEventListener('DOMContentLoaded', function() {
    // Tab switching
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            switchTab(this.getAttribute('data-tab'));
        });
    });

    // Language toggle
    const languageToggle = document.getElementById('languageToggle');
    languageToggle.addEventListener('change', function() {
        currentLanguage = this.checked ? 'en' : 'jp';
        updateContent();
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', performSearch);

    // Department functionality
    document.querySelectorAll('.department-item').forEach(item => {
        item.addEventListener('click', function() {
            switchDepartment(this.getAttribute('data-department'));
        });
    });

    // Initial content render
    updateContent();
});

function switchTab(tabName) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`.tab[data-tab="${tabName}"]`).classList.add('active');
    
    document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
    
    document.getElementById('content-title').textContent = tabName.charAt(0).toUpperCase() + tabName.slice(1);
}

function switchDepartment(departmentName) {
    document.querySelectorAll('.department-item').forEach(dep => dep.classList.remove('active'));
    document.querySelector(`.department-item[data-department="${departmentName}"]`).classList.add('active');
    
    document.querySelectorAll('.department-prompts').forEach(prompts => prompts.classList.remove('active'));
    document.getElementById(`${departmentName}-prompts`).classList.add('active');
}

function updateContent() {
    updatePrompts('favorites');
    updatePrompts('trending');
    updateDepartmentPrompts();
    updatePlaceholders();
}

function updatePrompts(section) {
    const container = document.getElementById(section);
    container.innerHTML = '';
    promptsData[currentLanguage][section].forEach(prompt => {
        container.appendChild(createPromptElement(prompt));
    });
}

function updateDepartmentPrompts() {
    for (let dept in promptsData[currentLanguage].department) {
        const container = document.getElementById(`${dept}-prompts`);
        container.innerHTML = '';
        promptsData[currentLanguage].department[dept].forEach(prompt => {
            container.appendChild(createPromptElement(prompt));
        });
    }
}

function createPromptElement(prompt) {
    const promptDiv = document.createElement('div');
    promptDiv.className = 'prompt';
    promptDiv.onclick = function() { 
        copyToClipboard(prompt.content);
        pasteToActiveElement(prompt.content);
    };

    const titleElem = document.createElement('h3');
    titleElem.textContent = prompt.title;

    const contentElem = document.createElement('p');
    contentElem.textContent = prompt.content;

    promptDiv.appendChild(titleElem);
    promptDiv.appendChild(contentElem);

    return promptDiv;
}

function updatePlaceholders() {
    const searchInput = document.getElementById('searchInput');
    searchInput.placeholder = currentLanguage === 'en' ? "Search prompts..." : "プロンプトを検索...";
}

function performSearch() {
    const searchTerm = this.value.toLowerCase();
    document.querySelectorAll('.prompt').forEach(prompt => {
        const title = prompt.querySelector('h3').textContent.toLowerCase();
        const content = prompt.querySelector('p').textContent.toLowerCase();
        if (title.includes(searchTerm) || content.includes(searchTerm)) {
            prompt.style.display = 'block';
            highlightText(prompt, searchTerm);
        } else {
            prompt.style.display = 'none';
        }
    });
}

function highlightText(element, searchTerm) {
    const title = element.querySelector('h3');
    const content = element.querySelector('p');

    title.innerHTML = title.textContent.replace(new RegExp(searchTerm, 'gi'), match => `<span class="highlight">${match}</span>`);
    content.innerHTML = content.textContent.replace(new RegExp(searchTerm, 'gi'), match => `<span class="highlight">${match}</span>`);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const notification = document.getElementById('copyNotification');
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

function pasteToActiveElement(text) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "paste", text: text});
    });
}
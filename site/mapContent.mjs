export const mapContent = {
  meta: {
    locale: "zh-CN",
    title: "聂丹雨的灵感地图",
    description: "从散落的想法、项目和经历里，进入一条更清晰的职业路径。"
  },
  entry: {
    eyebrow: "Danyu Nie / Sophie Nie / 聂丹雨",
    title: "开始整理我的探索路径",
    description: "从散落的想法、项目和经历里，进入一条更清晰的职业路径。",
    action: "开始探索"
  },
  cards: [
    { id: "ai-product", label: "AI 产品与工具", category: "职业能力", tone: "primary", x: 38, y: 24, rotation: -4, route: true },
    { id: "ai-education", label: "AI 金融教育", category: "教育设计", tone: "blue", x: 61, y: 31, rotation: 3, route: true },
    { id: "workflow-agent", label: "工作流与 Agent", category: "自动化", tone: "sage", x: 22, y: 49, rotation: 5, route: true },
    { id: "data-trust", label: "数据与可信度", category: "判断力", tone: "rose", x: 68, y: 55, rotation: -3, route: true },
    { id: "projects-reel", label: "AI Projects Reel", category: "动态作品", tone: "pink", x: 43, y: 67, rotation: 2, route: true },
    { id: "method", label: "把复杂讲清楚", category: "跨界方法", tone: "blue", x: 16, y: 28, rotation: -7, route: true },
    { id: "values", label: "生活与价值观", category: "个人底色", tone: "soft", x: 73, y: 21, rotation: 6, route: true },
    { id: "finance", label: "金融工程", category: "理性训练", tone: "soft", x: 12, y: 64, rotation: -5 },
    { id: "johnson", label: "强生医疗器械", category: "商业分析", tone: "blue", x: 78, y: 72, rotation: 4 },
    { id: "teacher-review", label: "课程点评系统", category: "真实工作流", tone: "sage", x: 29, y: 75, rotation: -2 },
    { id: "student-ideas", label: "学生项目灵感", category: "学习设计", tone: "pink", x: 53, y: 14, rotation: 7 },
    { id: "travel", label: "小红书旅行分析", category: "数据产品", tone: "rose", x: 8, y: 41, rotation: 3 },
    { id: "warm-ai", label: "技术要有温度", category: "价值观", tone: "soft", x: 82, y: 43, rotation: -6 },
    { id: "film", label: "电影像镜子", category: "生活档案", tone: "soft", x: 4, y: 18, rotation: 6 },
    { id: "motherhood", label: "成为母亲", category: "生命视角", tone: "pink", x: 86, y: 16, rotation: -2 },
    { id: "city-walk", label: "城市散步", category: "观察", tone: "sage", x: 6, y: 79, rotation: 5 },
    { id: "tea-house", label: "茶馆里的聊天", category: "关系", tone: "soft", x: 82, y: 82, rotation: -4 }
  ],
  routeSteps: [
    {
      id: "ai-product",
      title: "AI 产品与工具",
      text: "把 AI 想法变成能被理解、能被点击、能被继续使用的产品体验。",
      detail: "AI startup work, web tools, product workflows, creative AI projects"
    },
    {
      id: "ai-education",
      title: "AI 金融教育",
      text: "把复杂金融和 AI 概念转化成青少年能动手完成的项目。",
      detail: "课程设计、项目制学习、竞赛辅导、学生作品"
    },
    {
      id: "workflow-agent",
      title: "工作流与 Agent",
      text: "从混乱输入到可信输出，设计整条 AI 工作流。",
      detail: "课程点评、文本转写、学生维度拆分、家长版反馈"
    },
    {
      id: "data-trust",
      title: "数据与可信度",
      text: "让推荐、攻略和判断有来源、有结构，也能被追溯。",
      detail: "旅行推荐可信度、地点合并、推荐频次、原帖溯源"
    },
    {
      id: "projects-reel",
      title: "动态作品影像",
      text: "把小项目剪成别人愿意看的证据，也展示表达和包装能力。",
      detail: "AI Projects Reel",
      video: "./artifacts/ai-projects-reel-preview.m4v",
      poster: "./artifacts/ai-projects-poster.png"
    },
    {
      id: "method",
      title: "跨界方法",
      text: "不同项目背后是一种方法：把复杂讲清楚，再变成下一步行动。",
      detail: "AI with warmth, workflow thinking, project-based learning"
    },
    {
      id: "values",
      title: "生活与价值观",
      text: "电影、城市、友谊、成为母亲和日常照顾，也会塑造创造方式。",
      detail: "生活也是作品集"
    }
  ]
};

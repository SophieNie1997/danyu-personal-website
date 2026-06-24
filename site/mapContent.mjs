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
    { id: "ai-product", label: "AI 产品与工具", category: "职业能力", tone: "primary", layer: "primary", stack: "career-core", order: 0, depth: 6, x: 44, y: 18, rotation: -2, route: true },
    { id: "ai-education", label: "AI 金融教育", category: "教育设计", tone: "blue", layer: "primary", stack: "career-core", order: 1, depth: 5, x: 54, y: 19, rotation: 2, route: true },
    { id: "workflow-agent", label: "工作流与 Agent", category: "自动化", tone: "sage", layer: "primary", stack: "workflow-core", order: 2, depth: 5, x: 28, y: 51, rotation: -3, route: true },
    { id: "data-trust", label: "数据与可信度", category: "判断力", tone: "rose", layer: "primary", stack: "data-core", order: 3, depth: 5, x: 74, y: 51, rotation: 2, route: true },
    { id: "projects-reel", label: "AI Projects Reel", category: "动态作品", tone: "pink", layer: "primary", stack: "proof-core", order: 4, depth: 6, x: 52, y: 83, rotation: -2, route: true },
    { id: "method", label: "把复杂讲清楚", category: "跨界方法", tone: "blue", layer: "primary", stack: "method-core", order: 5, depth: 4, x: 27, y: 33, rotation: 3, route: true },
    { id: "values", label: "生活与价值观", category: "个人底色", tone: "soft", layer: "primary", stack: "life-core", order: 6, depth: 4, x: 74, y: 32, rotation: -2, route: true },
    { id: "finance", label: "金融工程", category: "理性训练", tone: "soft", layer: "evidence", stack: "finance-stack", depth: 3, x: 23, y: 70, rotation: -2 },
    { id: "johnson", label: "强生医疗器械", category: "商业分析", tone: "blue", layer: "evidence", stack: "finance-stack", depth: 2, x: 27, y: 74, rotation: 1 },
    { id: "bond-search", label: "债券与搜索", category: "金融材料", tone: "sage", layer: "evidence", stack: "finance-stack", depth: 1, x: 27, y: 78, rotation: -3 },
    { id: "research-assistant", label: "研报小助手", category: "AI 工具", tone: "blue", layer: "evidence", stack: "product-stack", depth: 3, x: 43, y: 18, rotation: 3 },
    { id: "report-notes", label: "投研报告笔记", category: "知识整理", tone: "soft", layer: "evidence", stack: "product-stack", depth: 2, x: 39, y: 21, rotation: -1 },
    { id: "student-ideas", label: "学生项目灵感", category: "学习设计", tone: "pink", layer: "evidence", stack: "education-stack", depth: 3, x: 59, y: 16, rotation: -2 },
    { id: "pdf-handout", label: "AI 项目手册", category: "课程材料", tone: "sage", layer: "evidence", stack: "education-stack", depth: 2, x: 64, y: 19, rotation: 3 },
    { id: "teacher-review", label: "课程点评系统", category: "真实工作流", tone: "sage", layer: "evidence", stack: "workflow-stack", depth: 3, x: 27, y: 58, rotation: 2 },
    { id: "course-feedback", label: "家长版反馈", category: "表达转译", tone: "soft", layer: "evidence", stack: "workflow-stack", depth: 2, x: 27, y: 55, rotation: -2 },
    { id: "class-system", label: "排课与权限", category: "运营系统", tone: "blue", layer: "evidence", stack: "workflow-stack", depth: 1, x: 29, y: 62, rotation: -4 },
    { id: "travel", label: "小红书旅行分析", category: "数据产品", tone: "rose", layer: "evidence", stack: "data-stack", depth: 3, x: 73, y: 58, rotation: -3 },
    { id: "xhs-source", label: "推荐频次溯源", category: "可信信息", tone: "soft", layer: "evidence", stack: "data-stack", depth: 2, x: 78, y: 62, rotation: 2 },
    { id: "social-packaging", label: "社媒视觉包装", category: "内容表达", tone: "pink", layer: "evidence", stack: "proof-stack", depth: 3, x: 62, y: 84, rotation: 2 },
    { id: "ai-card-pipeline", label: "AI 灵感卡发布", category: "自动化发布", tone: "sage", layer: "evidence", stack: "proof-stack", depth: 2, x: 48, y: 81, rotation: -3 },
    { id: "product-writing", label: "把工具讲清楚", category: "产品叙事", tone: "soft", layer: "evidence", stack: "method-stack", depth: 2, x: 23, y: 36, rotation: -1 },
    { id: "non-linear", label: "非线性路径", category: "自我叙事", tone: "rose", layer: "archive", stack: "method-stack", depth: 1, x: 18, y: 40, rotation: -4 },
    { id: "warm-ai", label: "技术要有温度", category: "价值观", tone: "soft", layer: "archive", stack: "life-stack", depth: 3, x: 79, y: 36, rotation: 3 },
    { id: "film", label: "电影像镜子", category: "生活档案", tone: "soft", layer: "archive", stack: "life-stack", depth: 2, x: 75, y: 23, rotation: -4 },
    { id: "motherhood", label: "成为母亲", category: "生命视角", tone: "pink", layer: "archive", stack: "life-stack", depth: 1, x: 82, y: 27, rotation: 2 },
    { id: "city-walk", label: "城市散步", category: "观察", tone: "sage", layer: "archive", stack: "archive-stack", depth: 3, x: 20, y: 83, rotation: 2 },
    { id: "tea-house", label: "茶馆里的聊天", category: "关系", tone: "soft", layer: "archive", stack: "archive-stack", depth: 2, x: 24, y: 86, rotation: -2 },
    { id: "friendship", label: "朋友的对话", category: "关系感", tone: "pink", layer: "archive", stack: "archive-stack", depth: 1, x: 17, y: 80, rotation: -3 },
    { id: "food-memory", label: "食物与照顾", category: "日常", tone: "sage", layer: "archive", stack: "archive-stack", depth: 1, x: 29, y: 84, rotation: 3 }
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

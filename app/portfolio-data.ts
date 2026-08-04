// 这是主页最常改的文件：个人信息、统计数字和项目卡片都集中在这里。
export const profile = {
  siteName: "DEVFOLIO_2026",
  name: " Meowu ",
  initials: "Hello",
  school: "南京邮电大学",
  focus: "软件开发",
  email: "yourname@example.com",
  githubUrl: "https://github.com/MeowuzZ",
  githubUsername: "MeowuzZ",
  autoSyncGitHub: true,
  hiddenRepositories: ["MeowuzZ.github.io"],
  availability: "OPEN TO WORK",
  intro:
    "不要掉头发T-T",
};

export const stats = [
  { value: "06+", label: "完整项目" },
  { value: "12k+", label: "代码提交行" },
  { value: "180h", label: "实践时长" },
  { value: "∞", label: "持续学习" },
];

export type Project = {
  title: string;
  year: string;
  kind: string;
  accent: "orange" | "blue" | "acid";
  thumbnail: string;
  summary: string;
  highlights?: string[];
  tech: string[];
  repoUrl: string;
  liveUrl?: string;
};

// 新增项目：复制一个 {...} 对象，修改字段，并把截图放进 public/projects/。
export const projects: Project[] = [
  {
    title: "AI 智能面试官",
    year: "2026",
    kind: "AI APPLICATION",
    accent: "orange",
    thumbnail: "/projects/ai-interview.png",
    summary:
      "基于大模型的模拟面试平台。根据目标岗位动态生成问题，并从表达结构、知识准确度和沟通清晰度三个维度给出反馈，让每次练习都有具体的改进方向。",
    highlights: ["支持追问式多轮面试", "生成结构化能力雷达与复盘报告"],
    tech: ["Next.js", "TypeScript", "LLM", "PostgreSQL"],
    repoUrl: "https://github.com/your-github-name/ai-interviewer",
    liveUrl: "https://example.com",
  },
  {
    title: "课程管理工作台",
    year: "2025",
    kind: "FULL STACK",
    accent: "blue",
    thumbnail: "/projects/course-console.png",
    summary:
      "面向小型培训团队的课程运营后台，将班级、课表、作业与学员进度整合在一个工作流中。项目重点练习了权限模型、复杂表格状态与可复用业务组件。",
    tech: ["Vue 3", "Spring Boot", "MySQL", "ECharts"],
    repoUrl: "https://github.com/your-github-name/course-console",
  },
  {
    title: "算法可视化实验室",
    year: "2025",
    kind: "EDUCATION",
    accent: "acid",
    thumbnail: "/projects/algo-lab.png",
    summary:
      "把排序、搜索与图算法拆成可以暂停、单步执行和调速的动画实验。为初学者补充每一步的自然语言解释，让抽象的状态变化真正可观察。",
    highlights: ["覆盖 12 种常见算法", "支持自定义输入和执行速度"],
    tech: ["React", "Canvas", "Vite", "Vitest"],
    repoUrl: "https://github.com/your-github-name/algo-visualizer",
    liveUrl: "https://example.com",
  },
  {
    title: "校园失物招领",
    year: "2024",
    kind: "WEB APP",
    accent: "orange",
    thumbnail: "/projects/lost-found.png",
    summary:
      "从真实校园场景出发完成的移动端 Web 应用。用户可以发布物品、按地点和时间筛选、发起认领，并通过状态流转完成闭环。",
    tech: ["UniApp", "Node.js", "MongoDB"],
    repoUrl: "https://github.com/your-github-name/campus-lost-found",
  },
  {
    title: "代码知识卡片",
    year: "2025",
    kind: "LEARNING TOOL",
    accent: "blue",
    thumbnail: "/projects/code-cards.png",
    summary:
      "为技术学习设计的间隔复习工具。支持 Markdown、代码高亮、标签和错题回顾，并根据记忆反馈自动安排下一次复习。",
    highlights: ["离线优先，可导入导出", "将零散笔记转为可复习内容"],
    tech: ["Next.js", "IndexedDB", "PWA"],
    repoUrl: "https://github.com/your-github-name/code-flashcards",
  },
  {
    title: "API 健康监测器",
    year: "2024",
    kind: "DEV TOOL",
    accent: "acid",
    thumbnail: "/projects/api-monitor.png",
    summary:
      "轻量级接口可用性监控服务，定时检查响应状态与延迟，记录趋势，并在连续失败时发送通知。用这个项目完整走过了任务调度、日志和容器化部署。",
    tech: ["Python", "FastAPI", "Redis", "Docker"],
    repoUrl: "https://github.com/your-github-name/api-monitor",
  },
];

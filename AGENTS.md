# candy-learning

给 Candy 用的复习网站。纯静态 HTML/CSS/JS，没有构建步骤，部署在 GitHub Pages 上。

> 本子项目会推送到**公开**的 GitHub 仓库。这是用户在 2026-11-01 明确同意的，属于上级 `Family-AI/AGENTS.md`“不上传 GitHub”规则的例外。
> 因此，本仓库（包括本文件）中**不要写入**任何个人信息：真实姓名、学校名称、成绩、老师反馈、联系方式等都不行。只使用昵称“Candy”。

## 基本信息

- 仓库：`git@github.com:over140/candy-learning.git`，分支 `main`，公开仓库
- 线上地址：https://over140.github.io/candy-learning/ （Pages 设置：Deploy from branch → `main` / root）
- 本地预览：在本目录运行 `python3 -m http.server 8000`，然后打开 http://localhost:8000/
- 提交/推送：仅在用户要求时进行。推送到 `main` 后，Pages 会在 1～2 分钟内自动更新
- 这台电脑的 `gh` CLI 尚未登录（截至 2026-11-01），所以无法用 API 开启 Pages 或查看部署状态

## 目录结构

```text
index.html              # 总入口：按学科列出的复习站
.nojekyll               # 关闭 Jekyll 处理
arabic/                 # 阿拉伯语 Year 8 · Sports & Hobbies 单元
  index.html            # 首页 + 7 天复习计划
  review.html           # 复习重点（事实对比表、语法、易混词、写作 6 步框架）
  vocab.html            # 词汇：列表/搜索、闪卡、10 题小测
  exam.html?set=1|2     # 模拟考试 A / B
  assets/style.css      # 共用样式（.ar 类 = 阿拉伯语 RTL 字体）
  assets/app.js         # 共用函数：renderHeader、speak（ar-SA 语音）、shuffle、sayBtn、txt
  data/vocab.js         # VOCAB：13 组，共 233 词，格式 [阿拉伯语, 英文]
  data/exams.js         # EXAMS[1]、EXAMS[2]：分 sections 的选择题 + writing
```

新增学科时，在根目录建同级文件夹（如 `maths/`），并在根目录 `index.html` 里加入口卡片。

## 内容约定

- 网站界面用**英文**（课堂材料是英阿对照）。阿拉伯语尽量带元音符号。
- `exams.js` 中每道题 `opts` 的**第一个选项为正确答案**，页面渲染时会打乱。每题固定 4 个不重复选项，并附 `exp` 解析。
- 题目字段：`q` 英文题干，`ar` 阿拉伯语题干（可选），`opts`，`exp`。
- 双语题（目前只有听力部分）：额外加 `qAr` 和 `optsAr`，写在 `exams.js` 末尾的 `LISTENING_AR`。页面默认显示阿拉伯语，每题右上角的 **EN** 按钮可展开或收起英文。`optsAr` 必须与 `opts` 顺序一一对应，第一个同样是正确答案；判分仍以英文 `opts` 为准。
- section 的 `type: "listening"` 由浏览器语音朗读 `passage`，原文默认折叠；`type: "reading"` 直接显示原文。`passage` 用 `\n\n` 分段。
- 听力的跟读模式（📖 Read along / 点击任意词从该处朗读）：正在读的词黄色高亮，下方显示英文释义，高亮移走后释义随之移走或消失。
  - 优先用浏览器的 `onboundary` 事件定位；语音不报告进度时，按字母数估算节奏（`raEstimate`，约 13 字母/秒 × 语速）。
  - 英文释义来自 section 的 `gloss` 数组（写在 `exams.js` 末尾），**按空格分词逐一对应**。修改听力原文时必须同步修改 `gloss`，并核对词数与 `passage.match(/\S+/g).length` 相等。
- `writing` 包含 `task / taskAr / steps / model / checklist`，范文默认折叠。
- 用户进度存在浏览器 `localStorage`（键名前缀为 `arabic-exam-1` / `arabic-exam-2`），不上传到任何地方。
- 修改数据后，用 `node --check arabic/data/*.js` 检查语法，并确认每题有 4 个不重复选项。
- **缓存版本号（重要）**：所有 HTML 引用的 css/js 都带 `?v=YYYYMMDD-n`。**只要改了 `assets/` 或 `data/` 里的文件，就要把所有 HTML 里的版本号一起更新**，否则 iPad 等设备会把新 HTML 和缓存里的旧 JS 混在一起，导致页面空白（2026-11-01 已出过一次这个问题）。
  - 批量替换：`sed -i '' -E 's/\?v=[0-9-]+/?v=新版本号/g' index.html arabic/*.html`
- 兼容性：iPad Safari 可能是旧版本，避免使用 `?.`、`??` 等较新语法。读写本地存储统一用 `app.js` 里的 `store` / `sess`（出错时不会抛异常）。脚本出错会显示在页面顶部，方便截图排查。

## 阿拉伯语单元：来源与状态

- 原始材料在本地 `~/Downloads/Arabic/`，不放进仓库，包括：
  - `Sports vocabsheet.docx`
  - `Popular Hobbies and Sports Vocabulary Sheet week 5.docx`
  - 8 张图片：听力原文（足球和篮球）、阅读原文（绿色底）、New Vocabulary、比较与观点、时间与地点、装备/技能/规则、运动名称与国家、写作框架
- Exam A 的听力和阅读用的是课堂原文。Exam B 的听力（网球/羽毛球）、阅读（Sara 的爱好）和两篇写作范文由 AI 编写，**尚未经老师核对**。
- 待确认：
  - 考试的真实题型和范围。目前是根据材料推测的（听、读、词汇语法、写作）。
  - 课堂词表把 قدم 写成 "Leg"，网站上标成 "foot (sheet says: leg)"。
  - Pages 是否已在 GitHub 设置中开启。

## 修改记录

- 2026-11-01：第一版。包括复习重点、词汇页、Exam A/B，已推送（提交 `f90448c`）。
- 2026-11-01：听力部分增加跟读高亮和逐词英文释义；新增 `AGENTS.md` / `CLAUDE.md`。
- 2026-11-01：修复 iPad 上 Exam 页面空白（缓存了旧 `app.js`）。资源文件加版本号，本地存储改为安全封装，页面会显示脚本错误。
- 2026-11-01：听力题改为阿拉伯语题目和选项，每题加 EN 按钮显示英文（版本 `20261101-4`）。

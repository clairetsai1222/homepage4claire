/* =====================================================================
   Claire Tsai — site content + bilingual rendering.
   TO EDIT YOUR CONTENT: change the SITE object below (zh = 中文, en = English).
   Everything on the About and Publications pages is generated from here.
   To add a link to a project, add a `links` array, e.g.:
       links: [ { label: 'arXiv', href: 'https://arxiv.org/abs/XXXX' },
                { label: 'Code',  href: 'https://github.com/...' } ]
   ===================================================================== */

const SITE = {
  zh: {
    name: '蔡佩妤', nameSub: 'Claire Tsai',
    tagline: 'VLM 感知 · 具身智能 · 大模型算法',
    about: [
      '上海交通大学控制科学与工程硕士在读，研究方向为面向具身智能的多模态感知。',
      '我专注于视觉语言模型（VLM）——从检索增强的视频理解、RGB-D 指令导航，到把大模型打磨成可靠、可落地的系统。'
    ],
    contacts: [
      { label: '邮箱', value: 'claire.tsai12@outlook.com', href: 'mailto:claire.tsai12@outlook.com' },
      { label: '电话', value: '181-2106-0414', href: 'tel:+8618121060414' },
      { label: '微信', value: 'David_and_Claire', href: '#' },
      { label: '现居', value: '上海', href: '#' }
    ],
    education: [
      { school: '上海交通大学', degree: '控制科学与工程 · 硕士', lab: '人工智能教育部重点实验室', date: '2023.09 – 2026.06' },
      { school: '东北大学', degree: '自动化 · 本科', lab: '智能工业数据解析与优化教育部重点实验室', date: '2019.09 – 2023.06' }
    ],
    skills: [
      { label: '具身智能', items: 'Habitat 仿真导航 · ROS 机械臂操纵' },
      { label: '大模型', items: 'SFT 后训练微调 · RAG · 多模态 VLM · Prompt Engineering · Transformer 架构' },
      { label: '工程开发', items: 'Python · PyTorch · NumPy · DeepSpeed 分布式训练 · Linux' },
      { label: '语言', items: 'TOEIC 805/990 · CET-6 512/710' }
    ],
    projects: [
      {
        title: 'FaithRAG：面向忠实视频理解的检索增强生成',
        date: '2024.11 – 2025.09', badge: '一作 · 论文',
        bullets: [
          { label: '背景', text: '视频问答难以在「要点全覆盖」与「严格忠实于视频内容」之间兼得。' },
          { label: '方案', text: '构建多模态 RAG 框架——视觉-语音混合分割配合关键帧凝聚聚类增强语义判别；超图混合索引与动态检索实现跨域精准召回；并提出新基准 VeridicalVQA。' },
          { label: '成果', text: '在 VeridicalVQA 上性能超越 SOTA RAG 方法 17.38%、准确率达 90.8%，忠实性、全面性与跨域推理全面领先。' }
        ],
        tags: ['Multimodal RAG', 'Hypergraph Index', 'Keyframe Clustering', 'VeridicalVQA'],
        links: []
      },
      {
        title: 'DepthNav-VL：基于 RGB-D 联合感知的具身指令导航',
        date: '2025.10 – 至今', badge: '一作 · 论文在投',
        bullets: [
          { label: '背景', text: '现有 VLN 多依赖单一 RGB 输入，缺乏几何建模，空间理解与轨迹规划受限。' },
          { label: '方案', text: '设计 RGB、深度图与指令文本的多模态对齐框架——DepthGeoEncoder 深度校正门控 + Q-Former 双路特征融合；基于 InternVLA-N1（Qwen2.5-VL）以 PyTorch + DeepSpeed ZeRO-2 做 LoRA 微调与分布式训练。' },
          { label: '进展', text: '已完成模型微调，正开展 Encoder 可视化分析，并在 VLN-CE 仿真基准与宇树 Go2 实机上评估导航能力。' }
        ],
        tags: ['VLN', 'RGB-D', 'LoRA', 'InternVLA-N1', 'DeepSpeed'],
        links: []
      },
      {
        title: '智能需求文档解析平台',
        date: '2026.02 – 2026.05', badge: '博世 · 大模型算法实习',
        bullets: [
          { label: '背景', text: '接口文档、技术规范等非结构化 PDF 需人工整理为 DOORS 需求条目，低效且易错。' },
          { label: '方案', text: '搭建基于 VLM 的自动化解析系统——MinerU 做版面元素分析、Qwen3 完成非结构化到 DOORS 的结构化转换；基于 Kafka 构建高并发服务，MinIO 分发结果并支持多 GPU 并行。' },
          { label: '成果', text: '工具已在 30+ 部门上线，显著降低人工录入成本与错误率，大幅提升研发需求流转效率。' }
        ],
        tags: ['VLM', 'MinerU', 'Qwen3', 'Kafka', 'MinIO'],
        links: []
      },
      {
        title: '机械臂物体位姿识别与抓取',
        date: '2023.09 – 2024.11', badge: '项目负责人',
        bullets: [
          { label: '背景', text: '将自然语言映射为机械臂可执行动作，是复杂操纵任务的底层核心。' },
          { label: '方案', text: '视觉端 Grounding DINO 定位、深度转点云、GraspNet 获取三维抓取姿态；执行端 OpenCV 坐标转换，Python 与 ROS1 操控 Kinova Gen3 机械臂。' },
          { label: '成果', text: '外置深度相机下，单一物体抓取成功率约 83%。' }
        ],
        tags: ['Grounding DINO', 'GraspNet', 'ROS1', 'Kinova Gen3'],
        links: []
      }
    ],
    t: {
      about: '关于', research: '研究与项目', education: '教育经历', skills: '专业技能',
      footer: '蔡佩妤 · 更新于 2026',
      navAbout: '关于', navPub: '研究与项目',
      pubNote: '<b>加粗</b>为本人。✱ 表示共同贡献。此列表由 <code>publications.bib</code> 自动生成——编辑该文件即可添加论文。'
    }
  },

  en: {
    name: 'Claire Tsai', nameSub: '蔡佩妤',
    tagline: 'VLM Perception · Embodied AI · LLM Systems',
    about: [
      "I'm a Master's student in Control Science & Engineering at Shanghai Jiao Tong University, working on multimodal perception for embodied AI.",
      'My research centers on Vision-Language Models — retrieval-augmented video understanding, RGB-D instruction navigation, and turning large models into reliable, deployable systems.'
    ],
    contacts: [
      { label: 'Email', value: 'claire.tsai12@outlook.com', href: 'mailto:claire.tsai12@outlook.com' },
      { label: 'Phone', value: '+86 181-2106-0414', href: 'tel:+8618121060414' },
      { label: 'WeChat', value: 'David_and_Claire', href: '#' },
      { label: 'Based in', value: 'Shanghai, China', href: '#' }
    ],
    education: [
      { school: 'Shanghai Jiao Tong University', degree: 'M.Eng, Control Science & Engineering', lab: 'Key Lab of Artificial Intelligence, Ministry of Education', date: '2023.09 – 2026.06' },
      { school: 'Northeastern University, China', degree: 'B.Eng, Automation', lab: 'Key Lab of Intelligent Industrial Data Analysis & Optimization, MoE', date: '2019.09 – 2023.06' }
    ],
    skills: [
      { label: 'Embodied AI', items: 'Habitat navigation simulation · ROS manipulation' },
      { label: 'LLM & ML', items: 'SFT post-training · RAG · Multimodal VLM · Prompt Engineering · Transformer' },
      { label: 'Engineering', items: 'Python · PyTorch · NumPy · DeepSpeed distributed training · Linux' },
      { label: 'Languages', items: 'TOEIC 805/990 · CET-6 512/710' }
    ],
    projects: [
      {
        title: 'FaithRAG: Retrieval-Augmented Generation for Faithful Video Understanding',
        date: 'Nov 2024 – Sep 2025', badge: 'First Author · Paper',
        bullets: [
          { label: 'Problem', text: 'Video-QA must be both complete and strictly faithful to the source video — rarely both at once.' },
          { label: 'Approach', text: 'A multimodal RAG framework: vision–audio hybrid segmentation with keyframe-cohesion clustering for sharper semantics; hypergraph hybrid indexing with dynamic retrieval for precise cross-domain recall; plus VeridicalVQA, a new benchmark.' },
          { label: 'Result', text: '+17.38% over SOTA RAG methods and 90.8% accuracy on VeridicalVQA, with clear gains in faithfulness, coverage, and cross-domain reasoning.' }
        ],
        tags: ['Multimodal RAG', 'Hypergraph Index', 'Keyframe Clustering', 'VeridicalVQA'],
        links: []
      },
      {
        title: 'DepthNav-VL: Embodied Instruction Navigation via RGB-D Joint Perception',
        date: 'Oct 2025 – Present', badge: 'First Author · Paper in progress',
        bullets: [
          { label: 'Problem', text: 'VLN methods that rely on RGB alone lack the geometric grounding needed for spatial reasoning and planning.' },
          { label: 'Approach', text: 'A multimodal alignment framework over RGB, depth, and instruction text — a DepthGeoEncoder gated depth-correction module with Q-Former dual-path fusion; LoRA fine-tuning of InternVLA-N1 (Qwen2.5-VL) with PyTorch + DeepSpeed ZeRO-2.' },
          { label: 'Progress', text: 'Fine-tuning complete; now running encoder visualization and evaluating on the VLN-CE benchmark and Unitree Go2 hardware.' }
        ],
        tags: ['VLN', 'RGB-D', 'LoRA', 'InternVLA-N1', 'DeepSpeed'],
        links: []
      },
      {
        title: 'Intelligent Requirements-Document Parsing Platform',
        date: 'Feb 2026 – May 2026', badge: 'Bosch · LLM Algorithm Intern',
        bullets: [
          { label: 'Problem', text: 'Turning unstructured PDFs (interface docs, technical specs) into DOORS-format requirements by hand is slow and error-prone.' },
          { label: 'Approach', text: 'A VLM pipeline — MinerU for layout analysis, Qwen3 for structured DOORS conversion; a high-concurrency service on Kafka with MinIO distribution and multi-GPU parallelism.' },
          { label: 'Impact', text: 'Deployed across 30+ departments, cutting manual-entry cost and error rates and markedly speeding requirement turnaround.' }
        ],
        tags: ['VLM', 'MinerU', 'Qwen3', 'Kafka', 'MinIO'],
        links: []
      },
      {
        title: 'Object Pose Estimation & Robotic Grasping',
        date: 'Sep 2023 – Nov 2024', badge: 'Project Lead',
        bullets: [
          { label: 'Problem', text: 'Mapping natural language to executable arm actions is the core of complex manipulation.' },
          { label: 'Approach', text: 'Vision — Grounding DINO localization, depth-to-point-cloud, GraspNet for 6-DoF grasp poses; execution — OpenCV coordinate transforms, Python + ROS1 driving a Kinova Gen3 arm.' },
          { label: 'Result', text: '~83% single-object grasp success with an external depth camera.' }
        ],
        tags: ['Grounding DINO', 'GraspNet', 'ROS1', 'Kinova Gen3'],
        links: []
      }
    ],
    t: {
      about: 'About', research: 'Research & Projects', education: 'Education', skills: 'Skills',
      footer: 'Claire Tsai · Updated 2026',
      navAbout: 'About', navPub: 'Research & Projects',
      pubNote: '<b>Bold</b> indicates my name. ✱ denotes equal contribution. This list is generated automatically from <code>publications.bib</code> — edit that file to add a paper.'
    }
  }
};

/* ---------------------- rendering ---------------------- */
function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function getLang() {
  var l = null;
  try { l = localStorage.getItem('lang'); } catch (e) {}
  return (l === 'zh' || l === 'en') ? l : 'en';
}
function setLang(l) {
  try { localStorage.setItem('lang', l); } catch (e) {}
  renderPage(l);
}

function contactHtml(c) {
  var inner = (c.href && c.href !== '#')
    ? '<a class="contact-value" href="' + esc(c.href) + '">' + esc(c.value) + '</a>'
    : '<span class="contact-value">' + esc(c.value) + '</span>';
  return '<div class="contact"><span class="contact-label">' + esc(c.label) + '</span>' + inner + '</div>';
}

function headerHtml(d, slim) {
  return '<header class="cv-header' + (slim ? ' slim' : '') + '">' +
    '<div class="name-row">' +
      '<a class="cv-name" href="index.html">' + esc(d.name) + '</a>' +
      '<span class="cv-namesub">' + esc(d.nameSub) + '</span>' +
    '</div>' +
    '<div class="cv-tagline">' + esc(d.tagline) + '</div>' +
    (slim ? '' : '<div class="contacts">' + d.contacts.map(contactHtml).join('') + '</div>') +
  '</header>';
}

function sectionHead(num, title) {
  return '<div class="section-head">' +
    (num ? '<span class="sec-num">' + num + '</span>' : '') +
    '<h2 class="sec-title">' + esc(title) + '</h2></div>';
}

function projectHtml(p) {
  var bullets = p.bullets.map(function (b) {
    return '<div class="bullet"><span class="bullet-label">' + esc(b.label) + '</span>' +
      '<span class="bullet-text">' + esc(b.text) + '</span></div>';
  }).join('');
  var tags = p.tags.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('');
  var links = (p.links && p.links.length)
    ? '<div class="proj-links">' + p.links.map(function (l) {
        return '<a href="' + esc(l.href) + '" target="_blank" rel="noopener">' + esc(l.label) + '</a>';
      }).join('') + '</div>'
    : '';
  return '<article class="proj">' +
    '<div class="proj-head"><h3 class="proj-title">' + esc(p.title) + '</h3>' +
      '<span class="proj-date">' + esc(p.date) + '</span></div>' +
    '<div class="proj-badge">' + esc(p.badge) + '</div>' +
    '<div class="proj-bullets">' + bullets + '</div>' +
    '<div class="proj-tags">' + tags + '</div>' + links +
  '</article>';
}

function renderPage(lang) {
  var d = SITE[lang];
  document.documentElement.lang = (lang === 'zh') ? 'zh-CN' : 'en';

  // nav + toggle (shared)
  var nav = document.getElementById('site-nav');
  if (nav) {
    var page = document.body.getAttribute('data-page');
    nav.innerHTML =
      '<a href="index.html"' + (page === 'about' ? ' class="active"' : '') + '>' + esc(d.t.navAbout) + '</a>' +
      '<a href="publications.html"' + (page === 'pub' ? ' class="active"' : '') + '>' + esc(d.t.navPub) + '</a>';
  }
  var toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.innerHTML =
      '<button class="lang-btn' + (lang === 'zh' ? ' active' : '') + '" onclick="setLang(\'zh\')">中文</button>' +
      '<button class="lang-btn' + (lang === 'en' ? ' active' : '') + '" onclick="setLang(\'en\')">EN</button>';
  }

  // About page
  var about = document.getElementById('about-root');
  if (about) {
    about.innerHTML =
      headerHtml(d, false) +
      '<section class="section">' + sectionHead('00', d.t.about) +
        '<div class="about-list">' + d.about.map(function (p) {
          return '<p class="about-p">' + esc(p) + '</p>';
        }).join('') + '</div></section>' +
      '<section class="section tight">' + sectionHead('01', d.t.education) +
        '<div class="edu-list">' + d.education.map(function (e) {
          return '<div class="edu-row"><div>' +
            '<div class="edu-school">' + esc(e.school) + '</div>' +
            '<div class="edu-degree">' + esc(e.degree) + '</div>' +
            '<div class="edu-lab">' + esc(e.lab) + '</div></div>' +
            '<span class="edu-date">' + esc(e.date) + '</span></div>';
        }).join('') + '<div class="cap"></div></div></section>' +
      '<section class="section">' + sectionHead('02', d.t.skills) +
        '<div class="skills-grid">' + d.skills.map(function (s) {
          return '<div class="skill-row"><div class="skill-label">' + esc(s.label) + '</div>' +
            '<div class="skill-items">' + esc(s.items) + '</div></div>';
        }).join('') + '</div></section>' +
      '<footer class="cv-footer">' + esc(d.t.footer) + '</footer>';
  }

  // Publications page
  var pub = document.getElementById('pub-root');
  if (pub) {
    pub.innerHTML =
      headerHtml(d, true) +
      '<section class="section">' + sectionHead('', d.t.research) +
        '<p class="pub-note">' + d.t.pubNote + '</p>' +
        '<div class="proj-list">' + d.projects.map(projectHtml).join('') +
        '<div class="cap"></div></div></section>' +
      '<footer class="cv-footer">' + esc(d.t.footer) + '</footer>';
  }
}

document.addEventListener('DOMContentLoaded', function () { renderPage(getLang()); });

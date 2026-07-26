# 个人主页 · 建站指南与计划

这是一个**零基础也能上手**的个人主页起始模板，用纯 HTML + CSS 写成，
托管在 GitHub Pages 上（免费）。下面是完整的计划、文件说明和上线步骤。

---

## 一、文件说明（一共 4 个文件）

| 文件 | 作用 | 你要不要改 |
|------|------|-----------|
| `index.html` | 首页：自我介绍、教育经历、研究兴趣 | ✅ 改内容 |
| `publications.html` | 论文列表页，每篇附链接 | ✅ 改内容 |
| `style.css` | 所有页面的样式（配色、排版） | 可选，想换颜色再改 |
| `README.md` | 就是这份说明，不会显示在网页上 | 不用改 |

打开 `.html` 文件时，凡是写着 `▼ EDIT ▼` 或 `[方括号]` 的地方，就是让你替换成自己内容的地方。

---

## 二、整体计划（建议按这个顺序做）

**第 1 步：本地预览（5 分钟）**
直接用浏览器打开 `index.html`（双击即可），先看看长什么样。
改任何内容后，回到浏览器按刷新（F5）就能看到效果 —— 不需要任何工具。

**第 2 步：填自己的内容（30–60 分钟）**
1. 打开 `index.html`，把姓名、学校、本科/硕士经历、研究方向、兴趣按提示替换。
2. 打开 `publications.html`，把每篇论文的标题、作者、发表处、链接填好。
   - 每篇论文是一个 `<div class="pub">...</div>` 代码块，**复制一整块**就能新增一篇。
   - 用不到的链接（比如没有 Code），把那一行 `<a>...</a>` 删掉即可。
3. （可选）放一张头像：把照片命名为 `avatar.jpg` 放到同一文件夹；不想放就删掉 `index.html` 里那行 `<img class="avatar" ...>`。

**第 3 步：上线到 GitHub Pages（15 分钟，见第三节）**

**第 4 步：以后维护**
改完文件后，用 GitHub Desktop 点一下 “Commit” + “Push”，网站几十秒后自动更新。

---

## 三、上线到 GitHub Pages（详细步骤）

> 目标：让全世界都能通过 `https://你的用户名.github.io` 访问你的主页。

### 准备
1. 注册 GitHub 账号：https://github.com/signup
2. 下载 **GitHub Desktop**（图形界面，不用敲命令）：https://desktop.github.com

### 创建仓库并上传
1. 在 GitHub 网站点右上角 **+ → New repository**。
2. 仓库名**必须**填成：`你的用户名.github.io`
   （例如用户名是 `clairetsai`，就填 `clairetsai.github.io`）。
   这是 GitHub Pages 的特殊规则，这样网址最短最干净。
3. 设为 **Public**，点 **Create repository**。
4. 打开 GitHub Desktop → **File → Clone repository** → 选中你刚建的仓库 → clone 到电脑上。
5. 把本文件夹里的 `index.html`、`publications.html`、`style.css`（和头像）
   复制进那个被 clone 出来的文件夹。
6. 回到 GitHub Desktop，左下角填一句说明（如 “initial site”）→ 点
   **Commit to main** → 再点右上角 **Push origin**。

### 开启 Pages
1. 到 GitHub 仓库页面 → **Settings → Pages**。
2. Source 选 **Deploy from a branch**，Branch 选 **main / (root)** → **Save**。
3. 等 1–2 分钟，页面顶部会出现你的网址：`https://你的用户名.github.io`。打开就是你的主页了 🎉

> 之后每次想更新内容：改文件 → GitHub Desktop 里 Commit → Push，网站自动刷新。

---

## 四、换配色 / 微调样式

打开 `style.css` 最上面的 `:root { ... }`，改这几行就能整站换色：

```css
--accent:  #2f6db3;   /* 链接和强调色，换成你喜欢的颜色代码即可 */
--text:    #1f2328;   /* 正文颜色 */
--maxw:    760px;     /* 内容宽度，想更宽改大一点 */
```

颜色代码可以在 https://coolors.co 上挑。

---

## 五、想参考别人的主页找灵感？

搜索这些关键词看排版风格（都是简洁学术风）：
- `academicpages` GitHub 模板（功能更全的进阶选择）
- `al-folio` Jekyll 主题
- 直接在 Google 搜 “PhD student personal website minimal” 看图找感觉

本模板已经是这些风格的极简版；等你熟悉了，随时可以往里加 CV 页、博客、项目页。

---

## 六、下一步可以加什么（可选，等熟练后）

- **CV 页**：把 PDF 命名 `cv.pdf` 放进文件夹，在导航栏加一行 `<a href="cv.pdf">CV</a>`。
- **绑定自己的域名**（如 `claire.dev`）：GitHub Pages 支持自定义域名。
- **图标**：用 favicon 让浏览器标签页显示小图标。

有需要随时找我帮你加。

<!-- redeploy trigger 2026-07-26 -->

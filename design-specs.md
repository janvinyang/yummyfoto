# YummyFoto 设计规范 & 交互流程

> 参考风格：Lundani Studio（https://lundanistudio.framer.website/）
> 版本：1.0

---

## 一、设计令牌（Design Tokens）

### 配色系统

| Token | 值 | 用途 |
|-------|-----|------|
| `--color-bg` | `#ffffff` | 页面背景 |
| `--color-black` | `#000000` | 主色、CTA、强调文字 |
| `--color-text` | `#262525` | 正文颜色 |
| `--color-text-secondary` | `#7d7c7c` | 辅助文字、标签、说明 |
| `--color-border` | `rgba(38, 37, 37, 0.12)` | 分割线、边框 |

### 字体系统

| Token | 值 | 用途 |
|-------|-----|------|
| `--font-serif` | `Instrument Serif, Noto Sans SC, Georgia, serif` | 标题、Logo、数字序号 |
| `--font-primary` | `Inter, Noto Sans SC, -apple-system, sans-serif` | 正文、导航、按钮 |

**字体加载**：Google Fonts 预连接 + 按需加载 Instrument Serif（400/400i）、Inter（400/500/600）、Noto Sans SC（300/400/500）

### 排版尺度

| 层级 | 字号 | 行高 | 字重 | 字体 |
|------|------|------|------|------|
| H1 Hero | `clamp(44px, 8vw, 96px)` | 1.04 | 400 | Instrument Serif |
| H1 页面 | `clamp(44px, 8vw, 96px)` | 1.04 | 400 | Instrument Serif |
| H2 Section | `clamp(36px, 5.5vw, 72px)` | 1.08 | 400 | Instrument Serif |
| H3 卡片 | `clamp(26px-28px, 3vw-3.5vw, 40px-44px)` | 1.1 | 400 | Instrument Serif |
| 正文 | 15-16px | 1.7-1.8 | 400 | Inter |
| 辅助文字 | 13-14px | 1.7 | 400 | Inter |
| 标签 | 12px | — | 500 | Inter（大写 + 字距 0.14em）|

### 间距系统

| Token | 值 | 用途 |
|-------|-----|------|
| `--nav-height` | 64px | 固定导航栏高度 |
| `--section-pad` | 120px | 区块上下内边距 |
| 页面左右 | 40px（桌面）/ 24px（移动）| 内容区水平内边距 |
| `--content-max` | 1200px | 内容区最大宽度 |

### 动效与过渡

| Token | 值 | 用途 |
|-------|-----|------|
| `--transition-smooth` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | 标准过渡曲线 |
| 悬停过渡 | 0.3s - 0.35s | 交互元素过渡时长 |
| Ticker | 60s linear infinite | 滚动条动画周期 |
| 图片缩放 | 0.7s | 作品卡片悬停缩放 |

### 圆角

| 元素 | 值 |
|------|-----|
| Pill 按钮 | 980px（全圆角）|
| Lightbox 按钮 | 50% |
| 其他 | 无（直角设计语言）|

---

## 二、页面信息架构

```
yummyfoto/
├── index.html          # 首页
├── about.html          # 关于页
├── services.html       # 服务页
├── styles.css          # 共享样式
├── images/             # 图片资源
│   ├── manifest.js     # 作品数据
│   ├── food/
│   ├── portrait/
│   ├── landscape/
│   ├── documentary/
│   └── still/
└── articles.js         # 文章数据
```

### 导航结构

```
[ YummyFoto® ]    首页 | 关于 | 服务
```

所有页面共享同一导航栏，当前页面链接带有 `.active` 状态（下划线常显）。

---

## 三、页面详细规范

### 3.1 首页 (index.html)

| 区块 | 内容 | 组件 |
|------|------|------|
| Hero | "Photography for Yummy Stories" + 简介 | 大标题 + 副标题 |
| About 简介 | 标题 + 两列文案 | 标题 + 2x 文本列 |
| 作品画廊 | 筛选器 + 2 列网格 + Lightbox | Filter + Grid + Lightbox |
| 滚动条 | 精选作品缩略图无限滚动 | Ticker Animation |
| 文章列表 | 标题 + 箭头 | 行列表 |
| 联系 CTA | 居中标题 + 按钮 | Contact Links |
| Footer | 版权 + slogan | Footer |

### 3.2 关于页 (about.html)

| 区块 | 内容 | 组件 |
|------|------|------|
| Page Hero | 大标题 + 副标题 | 页面专用 Hero |
| Story | "Our Story" + 两列文案 | 故事文本 |
| Process | "How We Work" + 4 步骤网格 | 2x2 Process Grid |
| Philosophy | "Our Philosophy" + 3 条列表 | 竖排 Value List |
| 联系 CTA | 复用首页 Contact | Contact Links |
| Footer | 复用首页 Footer | Footer |

### 3.3 服务页 (services.html)

| 区块 | 内容 | 组件 |
|------|------|------|
| Page Hero | "镜头前我们带来什么" | 页面专用 Hero |
| Services | 4 项服务卡片（名称、描述、价格、CTA）| 2x2 Service Grid |
| What's Included | "每次拍摄我们交付什么" + 4 项说明 | 2x2 Process Grid |
| 联系 CTA | "Ready to book?" + 说明 | Contact Links |
| Footer | 复用首页 Footer | Footer |

---

## 四、响应式断点

| 断点 | 宽度 | 布局变化 |
|------|------|----------|
| 桌面 | ≥ 769px | 完整 2 列网格、水平导航 |
| 移动 | ≤ 768px | 单栏堆叠、汉堡菜单、简化网格（2 列作品）|

### 移动适配要点

- 导航：隐藏水平链接，显示汉堡按钮，点击展开全屏菜单
- Hero 字号：使用 clamp() 自适应缩放
- 作品网格：保持 2 列但间距缩小，隐藏类别标签
- 服务/流程网格：转为 1 列堆叠
- 联系按钮：垂直堆叠、全宽

---

## 五、交互流程

### 5.1 导航交互

```
┌─────────────────────────────────────────────────┐
│                    Nav Bar                       │
├─────────────────────────────────────────────────┤
│  Desktop: [Logo]  首页 | 关于 | 服务             │
│  Mobile:  [Logo]  [☰]                           │
└─────────────────────────────────────────────────┘
                              │
                    ┌─────────┴─────────┐
                    ▼                   ▼
              Desktop Hover        Mobile Tap
                    │                   │
                    ▼                   ▼
              下划线动画(0.35s)     展开全屏菜单
              当前页常显下划线     (Instrument Serif 大字)
```

### 5.2 作品筛选

```
┌──────────────────────────────────────┐
│  Filter Bar: 全部 | 美食 | 人像 | ... │
└──────────────────────────────────────┘
              │
         点击按钮
              │
              ▼
    移除所有 active 类
              │
              ▼
    给目标按钮添加 active
              │
              ▼
    根据 filter 值筛选作品
              │
              ▼
    重新渲染作品网格
    更新作品计数
```

### 5.3 Lightbox 作品查看

```
用户点击作品卡片
       │
       ▼
  阻止默认链接跳转
       │
       ▼
  记录当前卡片索引
       │
       ▼
  更新 Lightbox 图片和标题
       │
       ▼
  添加 .open 类显示 Lightbox
       │
       ▼
  body { overflow: hidden }
       │
  ┌────┼────┐
  ▼    ▼    ▼
ESC  ←  →  点击背景
  │    │    │
  ▼    ▼    ▼
关闭  上一张 下一张  关闭
```

### 5.4 滚动条（Ticker）

```
原始作品数组 (最多 12 项)
       │
       ▼
  渲染内容 × 2 (实现无缝循环)
       │
       ▼
  CSS Animation: ticker 60s linear infinite
       │
       ▼
  translateX(0) → translateX(-50%)
       │
       ▼
  Hover → animation-play-state: paused
```

### 5.5 文章列表悬停

```
鼠标悬停 article-item
       │
       ▼
  padding-left: 16px (0.35s 过渡)
       │
       ▼
  箭头图标 translateX(4px) + 变黑
```

---

## 六、可访问性 (Accessibility)

### ARIA 标签

| 组件 | 属性 | 值 |
|------|------|-----|
| 汉堡菜单按钮 | `aria-label` | "菜单" |
| Lightbox 关闭 | `aria-label` | "关闭" |
| Lightbox 上/下 | `aria-label` | "上一张"/"下一张" |
| Lightbox 容器 | `role="dialog"` + `aria-modal="true"` + `aria-label` | "作品查看" |
| 装饰性 Ticker | `aria-hidden="true"` | 隐藏装饰元素 |

### 键盘导航

| 操作 | 快捷键 |
|------|--------|
| Lightbox 关闭 | `Escape` |
| Lightbox 上一张 | `←` ArrowLeft |
| Lightbox 下一张 | `→` ArrowRight |

### 对比度与字体

- 正文 `#262525` on `#ffffff` — 对比度 12.6:1 (AAA)
- 辅助文字 `#7d7c7c` on `#ffffff` — 对比度 4.5:1 (AA)
- 支持 `prefers-reduced-motion` — 禁用所有动画

### 焦点样式

```css
:focus-visible {
    outline: 2px solid var(--color-black);
    outline-offset: 2px;
}
```

---

## 七、性能优化

### 已实施

| 策略 | 说明 |
|------|------|
| 图片懒加载 | `loading="lazy"` |
| 字体预连接 | `<link rel="preconnect">` |
| CSS 共享 | 3 页面共用 `styles.css`，无重复 |
| CSS Grid | 现代布局，无需额外框架 |
| 原生 JS | 无框架依赖，低运行时开销 |

### 建议优化

- 图片格式：将 JPG 转为 WebP（体积减少 25-35%）
- CDN：图片资源托管到 CDN
- 预渲染：关键 CSS inline，非关键异步加载
- Service Worker：离线缓存

---

## 八、浏览器兼容

| 浏览器 | 最低版本 |
|--------|----------|
| Chrome / Edge | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| iOS Safari | 14+ |

使用特性：CSS Grid、backdrop-filter（需 -webkit- 前缀）、clamp()、gap（Grid/Flex）、loading="lazy"

---

## 九、SEO 元数据

### 已包含

- `<meta name="description">` — 页面描述
- `<meta name="keywords">` — 关键词
- Open Graph (`og:*`) — 社交分享
- JSON-LD (`@type: Person`) — 结构化数据
- 语义化 HTML（`<nav>`、`<header>`、`<section>`、`<article>`、`<footer>`、`<figure>`、`<figcaption>`）

### 待补充

- `og:image` — 社交分享封面图
- Canonical URL
- Breadcrumb Schema.org

---

*文档结束 — YummyFoto Design System v1.0*

// assets/content-map.js
// 站点内容分区与搜索过滤模块

const siteContent = {
  baseUrl: "https://web-i-game.com.cn",
  sections: [
    {
      id: "home",
      title: "首页",
      keywords: ["首页", "爱游戏", "推荐"],
      items: [
        { name: "热门游戏", tags: ["热门", "最新"] },
        { name: "最新资讯", tags: ["新闻", "更新"] }
      ]
    },
    {
      id: "games",
      title: "游戏库",
      keywords: ["游戏", "爱游戏", "分类"],
      items: [
        { name: "动作游戏", tags: ["动作", "冒险"] },
        { name: "策略游戏", tags: ["策略", "模拟"] },
        { name: "休闲游戏", tags: ["休闲", "益智"] }
      ]
    },
    {
      id: "news",
      title: "资讯中心",
      keywords: ["资讯", "爱游戏", "动态"],
      items: [
        { name: "行业动态", tags: ["行业", "趋势"] },
        { name: "游戏评测", tags: ["评测", "分析"] }
      ]
    },
    {
      id: "community",
      title: "社区",
      keywords: ["社区", "爱游戏", "论坛"],
      items: [
        { name: "玩家论坛", tags: ["交流", "讨论"] },
        { name: "攻略分享", tags: ["攻略", "心得"] }
      ]
    }
  ]
};

// 简单搜索过滤函数，返回匹配的分区列表
function searchSections(query) {
  if (!query || typeof query !== "string") {
    return [];
  }
  const lowerQuery = query.toLowerCase().trim();
  const results = siteContent.sections.filter(section => {
    const titleMatch = section.title.toLowerCase().includes(lowerQuery);
    const keywordMatch = section.keywords.some(kw =>
      kw.toLowerCase().includes(lowerQuery)
    );
    const itemMatch = section.items.some(item =>
      item.name.toLowerCase().includes(lowerQuery) ||
      item.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
    return titleMatch || keywordMatch || itemMatch;
  });
  return results;
}

// 获取单个分区详情
function getSection(sectionId) {
  return siteContent.sections.find(s => s.id === sectionId) || null;
}

// 获取所有分区 ID 列表
function getAllSectionIds() {
  return siteContent.sections.map(s => s.id);
}

// 导出模块（支持 CommonJS 和浏览器全局）
if (typeof module !== "undefined" && module.exports) {
  module.exports = { siteContent, searchSections, getSection, getAllSectionIds };
} else if (typeof window !== "undefined") {
  window.siteContent = siteContent;
  window.searchSections = searchSections;
  window.getSection = getSection;
  window.getAllSectionIds = getAllSectionIds;
}
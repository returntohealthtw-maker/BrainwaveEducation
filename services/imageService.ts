
/**
 * imageService.ts
 * 核心功能：影像鎖定與快取服務。
 * 
 * 為了節省 AI 生成費用並確保 UI 的穩定性（Locked states），
 * 我們建立了一個靜態影像註冊表，對應 App.tsx 中所有的提示詞。
 * 影像選用自 Unsplash 中最具 3D 渲染感、科技感與神經科學風格的素材。
 */

const STATIC_IMAGE_REGISTRY: Record<string, string> = {
  // --- Hero & 背景 ---
  "hero background": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb", // 3D神經網絡
  
  // --- 困境診斷 (是否這些困住了你) ---
  "conflicting minds": "https://images.unsplash.com/photo-1558273109-1ad394206e8b", // 自我矛盾
  "relationship tension": "https://images.unsplash.com/photo-1451187580459-43490279c0fa", // 關係對立
  "emotional storm": "https://images.unsplash.com/photo-1550684848-fac1c5b4e853", // 情緒失控
  "foggy crossroad": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b", // 前途茫茫
  "chess pieces": "https://images.unsplash.com/photo-1529699211952-734e80c4d42b", // 用人不當
  "network cable": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8", // 客戶斷連

  // --- 技術流程 ---
  "headset capturing": "https://images.unsplash.com/photo-1593508512255-86ab42a8e620", // 腦波採集
  "gears and neural nodes": "https://images.unsplash.com/photo-1509228468518-180dd4864904", // 演算法
  "dashboard showing": "https://images.unsplash.com/photo-1551288049-bbda48652ad8", // 儀表板

  // --- 全球視野 ---
  "cold hospital room": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d", // 傳統檢測
  "academic research scene": "https://images.unsplash.com/photo-1532094349884-543bc11b234d", // 科研報告
  "mountain of gold coins": "https://images.unsplash.com/photo-1553729459-eee1468d4d4d", // 昂貴門檻

  // --- 獨家優勢 ---
  "child with sparkles": "https://images.unsplash.com/photo-1502086223501-7ea2443d8447", // 發現天賦
  "blueprint of a human soul": "https://images.unsplash.com/photo-1507413245164-6160d8298b31", // 靈魂藍圖
  "diverse employees": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f", // 團隊協作
  "upward sales arrows": "https://images.unsplash.com/photo-1460925895917-afdab827c52f", // 業績倍增

  // --- 大腦變速箱 (動態匹配) ---
  "gamma": "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e",
  "beta": "https://images.unsplash.com/photo-1614850523296-d8c1af93d400",
  "alpha": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
  "theta": "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4",
  "smr": "https://images.unsplash.com/photo-1550684848-fac1c5b4e853",

  // --- 跨產業應用 ---
  "city connected": "https://images.unsplash.com/photo-1451187580459-43490279c0fa",

  // --- 服務項目 ---
  "golden key": "https://images.unsplash.com/photo-1519681393784-d120267933ba", // 解密劇本
  "two spirits connected": "https://images.unsplash.com/photo-1518199266791-bd38b4131848", // 靈性解密
  "corporate office dashboard": "https://images.unsplash.com/photo-1460925895917-afdab827c52f", // 效率健檢
  "staring at a galaxy": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa", // 兒童天賦
  "translucent silhouettes": "https://images.unsplash.com/photo-1478479405421-ce83c92fb3ba", // 親子共振
  "two glowing hearts": "https://images.unsplash.com/photo-1516589174184-c6852651428c" // 夫妻錯頻
};

/**
 * 根據輸入的提示詞回傳「鎖定」的固定影像連結。
 * 透過關鍵字匹配來確保對應到正確的精緻影像。
 */
export const generateNeuroImage = async (prompt: string): Promise<string | null> => {
  const p = prompt.toLowerCase();
  
  // 按照註冊表中的關鍵字進行模糊匹配
  const keys = Object.keys(STATIC_IMAGE_REGISTRY);
  for (const key of keys) {
    if (p.includes(key)) {
      const baseUrl = STATIC_IMAGE_REGISTRY[key];
      // 加入 Unsplash 參數以確保高品質與適當尺寸
      return `${baseUrl}?auto=format&fit=crop&q=80&w=1200`;
    }
  }

  // 預設回退影像 (高品質神經流體)
  return "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200";
};

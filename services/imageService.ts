
/**
 * imageService.ts
 * 核心功能：影像鎖定與快取服務。
 * 
 * 為了節省 AI 生成費用並確保 UI 的穩定性（Locked states），
 * 我們建立了一個靜態影像註冊表，對應 App.tsx 中所有的提示詞。
 * 影像選用自 Unsplash 中最具 3D 渲染感、科技感與神經科學風格的素材。
 */

const STATIC_IMAGE_REGISTRY: Record<string, string> = {
  "hero background": "/images/hero.png",
  "headset capturing": "/images/headset-capturing.png",
  "gears and neural nodes": "/images/gears-neural-nodes.png",
  "dashboard showing": "/images/dashboard-showing.png",
  "city connected": "/images/city-connected.png",
  "conflicting minds": "/images/conflicting-minds.png",
  "relationship tension": "/images/relationship-tension.png",
  "emotional storm": "/images/emotional-storm.png",
  "foggy crossroad": "/images/foggy-crossroad.png",
  "chess pieces": "/images/chess-pieces.png",
  "network cable": "/images/network-cable.png",
  "golden key": "/images/golden-key.png",
  "two spirits connected": "/images/two-spirits-connected.png",
  "corporate office dashboard": "/images/corporate-office-dashboard.png",
  "staring at a galaxy": "/images/staring-at-galaxy.png",
  "translucent silhouettes": "/images/translucent-silhouettes.png",
  "two glowing hearts": "/images/two-glowing-hearts.png",
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

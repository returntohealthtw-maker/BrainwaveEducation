import os
from PIL import Image

# 設定目標寬度 (例如 1024 像素，適合網頁瀏覽)
TARGET_WIDTH = 1024

# 設定要處理的資料夾路徑 ('.' 代表當前資料夾)
folder_path = '.'

# 支援的圖片格式
valid_formats = [".jpg", ".jpeg", ".png", ".webp"]

print(f"開始處理圖片，目標寬度：{TARGET_WIDTH}px")

for filename in os.listdir(folder_path):
    ext = os.path.splitext(filename)[1].lower()
    
    # 只處理圖片檔案
    if ext in valid_formats:
        try:
            # 開啟圖片
            img_path = os.path.join(folder_path, filename)
            with Image.open(img_path) as img:
                
                # 檢查是否需要縮小 (如果不夠大就不動)
                if img.width > TARGET_WIDTH:
                    # 計算等比例的高度
                    w_percent = (TARGET_WIDTH / float(img.width))
                    h_size = int((float(img.height) * float(w_percent)))
                    
                    # 使用高品質 (LANCZOS) 演算法進行縮圖
                    img_resized = img.resize((TARGET_WIDTH, h_size), Image.Resampling.LANCZOS)
                    
                    # 儲存圖片 (覆蓋原檔，或您可以改名另存)
                    # 這裡示範另存為 "optimized_" 開頭的檔案，避免覆蓋原圖
                    new_filename = f"optimized_{filename}"
                    img_resized.save(new_filename, quality=85, optimize=True)
                    
                    print(f"已縮小: {filename} -> {new_filename} ({TARGET_WIDTH}x{h_size})")
                else:
                    print(f"跳過 (尺寸已符合): {filename}")
                    
        except Exception as e:
            print(f"處理失敗 {filename}: {e}")

print("所有圖片處理完成！")
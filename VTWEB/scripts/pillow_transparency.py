from PIL import Image
import os

image_files = [
    "val_justice.png",
    "val_transparency.png",
    "val_speed.png",
    "val_client.png",
    "val_expertise.png",
    "val_security.png"
]

base_path = "public/images/about/"

for img_name in image_files:
    input_path = os.path.join(base_path, img_name)
    output_path = os.path.join(base_path, img_name.replace(".png", ".webp"))
    
    print(f"Processing {img_name}...")
    try:
        img = Image.open(input_path).convert("RGBA")
        
        # Get raw data
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # Change all white (also near white) pixels to transparent
            if item[0] > 240 and item[1] > 240 and item[2] > 240:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
                
        img.putdata(newData)
        
        # Resize to smaller dimensions to optimize loading speed (500x500 is very crisp but tiny file size)
        img.thumbnail((300, 300), Image.Resampling.LANCZOS)
        
        # Save as optimized webp
        img.save(output_path, "WEBP", quality=85, method=6)
        print(f"Saved {output_path}")
        
    except Exception as e:
        print(f"Failed to process {img_name}: {e}")

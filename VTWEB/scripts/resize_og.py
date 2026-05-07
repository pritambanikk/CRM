from PIL import Image
import os

input_path = "/Users/pritambanikk/.gemini/antigravity/brain/b46c3aaa-eb06-4368-b96c-f95a098993f0/cheque_bounce_og_1776612190461.png"
output_dir = "/Users/pritambanikk/VT/vt_march266/public/og"
output_path = os.path.join(output_dir, "cheque-bounce-notice.png")

# Ensure the output directory exists
os.makedirs(output_dir, exist_ok=True)

# Define the target dimensions
target_width = 1200
target_height = 630

try:
    img = Image.open(input_path)
    
    # Calculate aspect ratios
    img_ratio = img.width / img.height
    target_ratio = target_width / target_height

    if target_ratio > img_ratio:
        # Target is wider than the original image
        # Scale width to target, and crop height
        resize_width = target_width
        resize_height = round(target_width / img_ratio)
    else:
        # Target is taller than the original image
        # Scale height to target, and crop width
        resize_height = target_height
        resize_width = round(target_height * img_ratio)

    # Resize the image using Lanczos resampling
    img = img.resize((resize_width, resize_height), Image.Resampling.LANCZOS)

    # Calculate crop coordinates (center crop)
    left = (img.width - target_width) / 2
    top = (img.height - target_height) / 2
    right = (img.width + target_width) / 2
    bottom = (img.height + target_height) / 2

    # Crop the image
    img = img.crop((left, top, right, bottom))
    
    # Ensure it is exactly 1200x630
    img = img.resize((1200, 630), Image.Resampling.LANCZOS)

    # Save the optimized image
    img.save(output_path, "PNG", optimize=True)
    print(f"Successfully generated 1200x630 OG image at: {output_path}")

except Exception as e:
    print(f"Error processing image: {e}")


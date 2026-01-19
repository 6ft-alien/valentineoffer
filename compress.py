from PIL import Image
import os
input_folder = 'c:/Users/nitya/Documents/valentineoffer/new'
output_folder = 'c:/Users/nitya/Documents/valentineoffer/newc'
os.makedirs(output_folder, exist_ok=True)
for filename in os.listdir(input_folder):
    if filename.lower().endswith(('.jpg', '.jpeg', '.png')):
        img = Image.open(os.path.join(input_folder, filename))
        
        # Resize to max 800px width while maintaining aspect ratio
        max_width = 800
        if img.width > max_width:
            ratio = max_width / img.width
            new_size = (max_width, int(img.height * ratio))
            img = img.resize(new_size, Image.Resampling.LANCZOS)
        
        # Save with 85% quality (good balance)
        output_path = os.path.join(output_folder, filename)
        img.save(output_path, quality=85, optimize=True)
        print(f"Optimized: {filename}")
print("Done! Replace old gallery folder with gallery_optimized")
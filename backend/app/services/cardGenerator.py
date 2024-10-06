from psd_tools import PSDImage
from psd_tools.api.layers import Group, Layer
import cv2
from ultralytics import YOLO
import numpy as np
from rembg import remove
import base64
from PIL import Image
import os

class Cards:
    def __init__(self):
        self.model = YOLO('app/models/yolo/best.pt')

    def generate_card(self, base64_str, card_type, card_name):
        image = self.base64_to_cv2_img(base64_str)
        cropped = self.crop_human(image)
        nobg = self.remove_background(cropped)

        final_image = self.insert_into_canvas(nobg)
        return final_image

    def base64_to_cv2_img(self, base64_str):
        img_data = base64.b64decode(base64_str)
        nparr = np.frombuffer(img_data, np.uint8)
        img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        return img

    def crop_human(self, image):
        results = self.model(image, verbose=False)

        if len(results) > 0 and len(results[0].boxes) > 0:
            box = results[0].boxes[0]
            x1, y1, x2, y2 = map(int, box.xyxy[0])

            cropped_image = image[y1:y2, x1:x2]

            return cropped_image
        else:
            raise ValueError("No objects detected in the image.")

    def remove_background(self, image):
        nobg = remove(image)
        return nobg

    def insert_into_canvas(self, nobg_image):
        # Create a blank canvas of size 1280x1500 with transparency
        canvas_height, canvas_width = 1500, 1280
        canvas = np.zeros((canvas_height, canvas_width, 4), dtype=np.uint8)
        canvas[:, :, 3] = 0  # Set alpha channel to fully transparent

        # Coordinates of the target rectangle
        x1, y1 = 405, 317
        x2, y2 = 1015, 785
        target_width = x2 - x1
        target_height = y2 - y1

        # Convert nobg_image to RGBA if needed
        if nobg_image.shape[2] == 3:
            nobg_image = cv2.cvtColor(nobg_image, cv2.COLOR_BGR2BGRA)

        # Get original dimensions
        orig_height, orig_width = nobg_image.shape[:2]

        # Calculate the scaling factor while maintaining aspect ratio
        scale_w = target_width / orig_width
        scale_h = target_height / orig_height
        scale = min(scale_w, scale_h)

        # Resize the image to fit within the target rectangle
        new_width = int(orig_width * scale)
        new_height = int(orig_height * scale)
        resized_nobg = cv2.resize(nobg_image, (new_width, new_height), interpolation=cv2.INTER_AREA)

        # Calculate the position to place the resized image (left-bottom corner alignment)
        y_offset = y2 - new_height  # Align to the bottom of the rectangle
        x_offset = x1  # Align to the left of the rectangle

        # Place the resized image onto the canvas, considering the alpha channel
        for c in range(0, 4):
            canvas[y_offset:y_offset + new_height, x_offset:x_offset + new_width, c] = resized_nobg[:, :, c]

        return canvas
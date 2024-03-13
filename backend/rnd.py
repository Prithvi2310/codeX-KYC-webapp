import cv2
import pytesseract
from PIL import Image

action_list = ['live_photo', 'aadhaar_front', 'aadhaar_back']

pytesseract.pytesseract.tesseract_cmd = r'C:/Program Files/Tesseract-OCR/tesseract.exe'

print(pytesseract.image_to_string(Image.open('photos/live_photo.jpg')))
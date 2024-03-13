import cv2
import pytesseract

action_list = ['live_photo', 'aadhaar_front', 'aadhaar_back']

image = cv2.imread("photos/live_photo.jpg")

# Convert the image to grayscale
gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

cv2.imwrite('trial.jpg', gray_image)

detected_text = pytesseract.image_to_string(gray_image)

print(detected_text)


import cv2
import pytesseract

# Function to perform OCR detection on an image
def perform_ocr(image_path):
    # Read the image
    image = cv2.imread(image_path)

    # Convert the image to grayscale
    gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # Perform OCR using Tesseract
    detected_text = pytesseract.image_to_string(gray_image)

    return detected_text

# Example usage:
# Replace 'image_path' with the path to your image file

# Perform OCR on the user's live photograph
live_photograph_text = perform_ocr('live_photograph.jpg')
print("Live Photograph OCR Text:")
print(live_photograph_text)

# Perform OCR on the PAN card
pan_card_text = perform_ocr('pan_card.jpg')
print("\nPAN Card OCR Text:")
print(pan_card_text)

# Perform OCR on the Aadhaar card
aadhaar_card_text = perform_ocr('aadhaar_card.jpg')
print("\nAadhaar Card OCR Text:")
print(aadhaar_card_text)

# Perform OCR on the signature
signature_text = perform_ocr('signature.jpg')
print("\nSignature OCR Text:")
print(signature_text)

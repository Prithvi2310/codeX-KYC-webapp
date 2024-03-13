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

def ocr_result():
    # Perform OCR on the user's live photograph
    live_photograph_text = perform_ocr('photos/face/captured_photo.jpg')
    print("Live Photograph OCR Text:")
    print(live_photograph_text)

    # Perform OCR on the Aadhaar card front
    pan_card_text = perform_ocr('photos/aadhaar_front/front.jpg')
    print("\nAadhaar Card Front OCR Text:")
    print(pan_card_text)

    # Perform OCR on the Aadhaar card back
    aadhaar_card_text = perform_ocr('photos/aadhaar_back/back.jpg')
    print("\nAadhaar Card Back OCR Text:")
    print(aadhaar_card_text)

    # Perform OCR on the signature
    #signature_text = perform_ocr('signature.jpg')
    #print("\nSignature OCR Text:")
    #print(signature_text)

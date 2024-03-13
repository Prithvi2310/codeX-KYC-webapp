import cv2

def capture():
    # Initialize the camera
    cap = cv2.VideoCapture(0)  # 0 for the default camera, you can change it to the specific camera index if you have multiple cameras

    # Check if the camera is opened successfully
    if not cap.isOpened():
        print("Error: Could not open camera.")
        exit()

    # Capture a frame
    ret, frame = cap.read()

    # Check if the frame is captured successfully
    if not ret:
        print("Error: Could not capture frame.")
        exit()

    # Save the captured frame as an image
    cv2.imwrite('photos/face/captured_photo.jpg', frame)

    # Release the camera
    cap.release()

    # Print a message indicating successful capture
    print("Photo captured successfully.")

# Pothole Detection and Road Assessment System
**Final Semester Project – Digital Image Processing**

This repository contains the source code for a computer vision application designed to detect, analyze, and classify road surface conditions. The system utilizes a hybrid approach combining Deep Learning (YOLOv8) and traditional Digital Image Processing techniques to provide quantitative assessments of road damage.

## See the Preview 
https://road-hole-detection-abfcp8iszvmugklzquszys.streamlit.app/

<img width="1600" height="800" alt="image" src="https://github.com/Andre2404/Road-Hole-Detection/blob/main/Hasil.PNG" />

<img width="1200" height="735" alt="image" src="https://github.com/Andre2404/Road-Hole-Detection/blob/main/Proses.PNG" />

## Project Overview

The primary objective of this project is to automate the inspection of road infrastructure. The application performs the following functions:

* **Automated Detection:** Identifies potholes on road surfaces using digital imagery.
* **Quantitative Analysis:** Calculates the severity of damage based on the percentage of the pothole area relative to the total road surface.
* **Safety Classification:** Categorizes road conditions into three specific safety levels:
    * **Safe / Good Condition:** < 3% damage coverage.
    * **Warning / Moderate Damage:** 3% - 15% damage coverage.
    * **Critical / Severe Damage:** > 15% damage coverage.
* **Visualization:** Provides a real-time, web-based interface for visual analysis and reporting.

## Technical Methodology (Hybrid Pipeline)

The system implements a modernized image processing pipeline designed for accuracy and performance:

1.  **Image Standardization:** Auto-resizing of input images (maximum dimension of 1000px) to ensure optimal processing speed.
2.  **Preprocessing (CLAHE):** Application of Contrast Limited Adaptive Histogram Equalization to enhance dark areas and clarify asphalt texture.
3.  **YOLOv8 Inference:** Utilization of a custom-trained YOLOv8 model to detect the Region of Interest (ROI) and localize potholes.
4.  **Gaussian Blur:** Noise reduction to smooth out asphalt granularity and minor debris.
5.  **Inverse Thresholding:** Segmentation process to separate dark pothole features from the lighter road surface.
6.  **Contour Detection:** Precise mapping of pothole boundaries.
7.  **Aspect Ratio Filtering:** Elimination of false positives based on dimensional ratios.
8.  **Condition Scoring:** Statistical calculation to determine the final road status.

## Application Features

### User Interface
* **Streamlit Framework:** Built on a responsive, web-based interface.
* **Flexible Input:** Supports drag-and-drop image uploads and direct camera input.
* **Industrial Design:** Features a high-contrast professional theme suitable for field operations.

### Analytical Capabilities
* **Real-time Assessment:** Immediate classification of road safety status (Safe/Warning/Critical).
* **Precision Metrics:** Damage percentage calculated to two decimal places.
* **Categorization:** Statistical breakdown of potholes by size (Small, Medium, Large).

### Debugging and Visualization
* **Layer Inspection:** Allows users to view intermediate processing stages, including RGB Crops, Binary Masks, and Contour Detection layers.

### Data Management
* **CSV Export:** Capability to download analysis results for external reporting and archival.

## Technology Stack

* **Frontend & Backend:** Python (Streamlit)
* **Deep Learning:** Ultralytics YOLOv8 (Custom Trained Model)
* **Image Processing:** OpenCV, NumPy
* **Data Handling:** Pandas

## Recommendations for Optimal Results

To ensure the highest accuracy in detection and measurement, please adhere to the following guidelines:

* **Image Quality:** Use clear, high-definition images.
* **Lighting:** Ensure the road surface is well-lit; avoid strong shadows (e.g., from trees) which may distort area calculations.
* **Camera Angle:** Take photographs perpendicular to the road surface (top-down view) to minimize perspective distortion.
* **Resolution:** Minimum recommended input resolution is 640x480 pixels.

## Installation and Usage

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Andre2404/Road-Hole-Detection.git](https://github.com/Andre2404/Road-Hole-Detection.git)
    cd Road-Hole-Detection
    ```

2.  **Run the application:**
    ```bash
    streamlit run app.py
    ```

# Real-Time Soil Moisture Monitoring System

## Description
A system to monitor soil moisture levels in real-time and automatically water plants when soil is dry. Includes an optional dashboard to see moisture levels live.

## Features
- Measures soil moisture using a sensor
- Automatic water pump control based on moisture threshold
- Real-time dashboard monitoring 

## Hardware Components
- Arduino Uno / ESP32
- Soil Moisture Sensor
- Relay Module + Water Pump
- Wires & Breadboard

## Software
- Arduino IDE (for microcontroller)
- Optional: React dashboard for monitoring

## Circuit Diagram
real-time-soil-moisture/
 ![circuit-diagram](https://github.com/user-attachments/assets/9914b105-9b47-4d6b-8c44-d0489a8488b9)

## 🎞️ Live Demo
https://www.youtube.com/shorts/yjbRILcDICM

## How to Run
1. Upload `Arduino/soil-moisture.ino` to Arduino IDE
2. Connect components as per circuit diagram
3. Power the Arduino
4. Optional: Run the dashboard
   ```bash
   cd Software/dashboard
   npm install
   npm start

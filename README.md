# Creative Robotics Kit for micro:bit

The Creative Robotics Kit for micro:bit is a robot platform based on the micro:bit controller. It includes a desktop robot chassis, a micro:bit expansion board, servos, a line-tracking sensor, an ultrasonic sensor, and other components. The accompanying top plate is directly compatible with 9g servos and is equipped with mounting holes for ultrasonic sensors, the expansion board, and other sensors, allowing for quick installation of various sensors.

The platform's IO expansion board provides 10 digital/analog 3-pin interfaces and 3 I2C interfaces, enabling easy expansion and control of a wide range of devices. The expansion board features a built-in dual motor driver, eliminating the need to use additional pins. Furthermore, the expansion board exposes the micro:bit edge connector pins (0, 1, 2, 3V, GND), offering developers more interface options.

[product page](https://wiki.dfrobot.com/Creative_Robotics_Kit_for_microbit_SKU_CSM0061)


## Basic usage
1. Set the direction and speed of motors connected to M1 and M2 ports.

    ```blocks
    basic.forever(function () {
        robotics.motorRun(robotics.MotorType.M1, robotics.MotorDirection.CW, 100)
        robotics.motorRun(robotics.MotorType.M2, robotics.MotorDirection.CCW, 100)
    })
    ```
2. Stop all motors.

    ```blocks
    basic.forever(function () {
        robotics.motorStop(robotics.MotorType.All)
    })
    ```
3. Initialize the 180° servo motor to 0 degrees, then rotate it to the 90-degree position.

    ```blocks
    robotics.servoRun180(robotics.CustomAllPin.P0, 0)
    basic.forever(function () {
        robotics.servoRun180(robotics.CustomAllPin.P0, 90)
    })
    ```
4. Control the speed of a 360° servo motor: First, make the servo connected to port P0 rotate forward at 50% speed for 1 second, then reverse for 1 second.

    ```blocks
    basic.forever(function () {
        robotics.servoRun360(robotics.CustomAllPin.P0, 50, robotics.MotorDirection.CW)
        basic.pause(1000)
        robotics.servoRun360(robotics.CustomAllPin.P0, 50, robotics.MotorDirection.CCW)
        basic.pause(1000)
    })
    ```
5. Acquire distance data measured by the ultrasonic sensor and send the measurement results via the serial port every 500 milliseconds.
    
    ```blocks
    basic.forever(function () {
        serial.writeLine("" + (robotics.readUltrasonicData(robotics.CustomAllPin.P0)))
        basic.pause(500)
    })
    ```
6. Acquire data collected by the line-tracking sensor and send the sensor data via the serial port every 1000 milliseconds.

    ```blocks
    basic.forever(function () {
        serial.writeLine("" + (robotics.readLineTrackingData(robotics.CustomAllPin.P0)))
        basic.pause(1000)
    })
    ```
7. Acquire data collected by the soil moisture sensor and send the moisture value via the serial port every 1000 milliseconds.
    
    ```blocks
    basic.forever(function () {
        serial.writeLine("" + (robotics.readMoistureData(robotics.CustomAnalogPin.P0)))
        basic.pause(1000)
    })
    ```
8. Acquire temperature and humidity data collected by the DHT11 sensor and send the temperature and humidity values via the serial port every 1000 milliseconds.

    ```blocks
    basic.forever(function () {
        serial.writeLine("" + (robotics.readDht11Data(robotics.CustomAllPin.P0, robotics.DataType.TemperatureC)))
        basic.pause(1000)
    })    
    ```
9. Retrieve the data collected by the ambient light sensor and send the light value via serial port every 1000 milliseconds.

    ```blocks
    basic.forever(function () {
        serial.writeLine("" + (robotics.readLightData(robotics.CustomAnalogPin.P0)))
        basic.pause(1000)
    })
    ```
10. Retrieve the data collected by the human infrared sensor and send the collected value via serial port every 1000 milliseconds.

    ```blocks
    basic.forever(function () {
        serial.writeLine("" + (robotics.readInfraredData(robotics.CustomAllPin.P0)))
        basic.pause(1000)
    }) 
    ```
11. Initialize the RGB LED strip and set the brightness to 200. Then, make the strip display green, which will last for 5 seconds before turning off the LED strip.

    ```blocks
    robotics.ws2812Init(robotics.CustomAllPin.P0, 7)
    robotics.ws2812SBrightness(200)
    robotics.ws2812ShowColor(0x00ff00)
    basic.pause(5000)
    robotics.ws2812Off()
    ```
12. Initialize the RGB LED strip, making the 1st and 2nd LEDs display red, the 3rd and 4th LEDs display green, and the 5th, 6th, and 7th LEDs display blue.
    
    ```blocks
    robotics.ws2812Init(robotics.CustomAllPin.P0, 7)
    robotics.ws2812SBrightness(200)
    basic.forever(function () {
        robotics.ws2812SetIndexColor(robotics.ws2812LedRange(1, 2), 0xFF0000)
        robotics.ws2812SetIndexColor(robotics.ws2812LedRange(3, 4), 0x00ff00)
        robotics.ws2812SetIndexColor(robotics.ws2812LedRange(5, 7), 0x0000ff)
    })
    ```
13. Initialize the RGB LED strip to display a gradient color effect.

    ```blocks
    robotics.ws2812Init(robotics.CustomAllPin.P0, 7)
    robotics.ws2812SBrightness(200)
    basic.forever(function () {
        robotics.ws2812Rainbow(1, 7, 1, 360)
    })
    ```
14. Use the micro:bit A button to control the lighting of the RGB LED strip. Each time button A is pressed, move the LEDs of the strip one position to the right, checking the button status every 100 milliseconds.

    ```blocks
    robotics.ws2812Init(robotics.CustomAllPin.P0, 7)
    robotics.ws2812SBrightness(200)
    while (true) {
        if (input.buttonIsPressed(Button.A)) {
            robotics.ws2812Shift(1)
            robotics.ws2812SetIndexColor(1, 0xFF0000)
        }
        basic.pause(100)
    }
 
   ```
   
## LIcense

MIT

Copyright (c) 2020, microbit/micropython Chinese community  

## Supported targets

* for PXT/microbit

```package
robotics=github:DFRobot/pxt-DFRobot_creative-robotics-kit
```


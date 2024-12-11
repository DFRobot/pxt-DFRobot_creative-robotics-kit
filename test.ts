// When this software package is used as a plugin, this package will not be compiled.

input.onButtonPressed(Button.A, function () {
    testMode += 1
    if (testMode > 4) {
        testMode = 1
    }
})
function testMotor() {
    robotics.motorRun(robotics.MotorType.M1, robotics.MotorDirection.CW, 100)
    robotics.motorRun(robotics.MotorType.M2, robotics.MotorDirection.CCW, 100)
    basic.pause(1000)
    robotics.motorRun(robotics.MotorType.All, robotics.MotorDirection.CW, 150)
    basic.pause(1000)
    robotics.motorRun(robotics.MotorType.All, robotics.MotorDirection.CCW, 150)
    basic.pause(1000)
    robotics.motorStop(robotics.MotorType.M1)
}
function testSensor() {
    serial.writeLine("PIN P0 --> distance: " + robotics.readUltrasonicData(robotics.CustomAllPin.P0) + "cm")
    serial.writeLine("PIN P1 --> soil moisture: " + robotics.readMoistureData(robotics.CustomAnalogPin.P1))
    serial.writeLine("PIN P2 --> ambient light: " + robotics.readLightData(robotics.CustomAnalogPin.P2))
    serial.writeLine("PIN P8 --> tracker state: " + robotics.readLineTrackingData(robotics.CustomAllPin.P8))
    serial.writeLine("PIN P9 -->temperature: " + robotics.readDht11Data(robotics.CustomAllPin.P9, robotics.DataType.TemperatureC))
    serial.writeLine("PIN P9 --> humidity: " + robotics.readDht11Data(robotics.CustomAllPin.P9, robotics.DataType.Humidity))
    serial.writeLine("PIN P12 --> infrared motion: " + robotics.readInfraredData(robotics.CustomAllPin.P12))
    serial.writeLine("-------------------------------------------------")
}
function testRgbLight() {
    robotics.ws2812Init(robotics.CustomAllPin.P14, 7)
    robotics.ws2812SBrightness(50)
    robotics.ws2812SetIndexColor(1, 0x007fff)
    robotics.ws2812SetIndexColor(robotics.ws2812LedRange(2, 7), 0xff0000)
    basic.pause(1000)
    robotics.ws2812Off()
    robotics.ws2812Rainbow(1, 7, 1, 360)
    for (let index = 0; index < 7; index++) {
        basic.pause(1000)
        robotics.ws2812Shift(1)
    }
    robotics.ws2812Rainbow(1, 7, 1, 360)
    for (let index = 0; index < 7; index++) {
        basic.pause(1000)
        robotics.ws2812Rotate(1)
    }
}
function testServo() {
    robotics.servoRun180(robotics.CustomAllPin.P16, 0)
    basic.pause(1000)
    robotics.servoRun180(robotics.CustomAllPin.P16, 90)
    basic.pause(1000)
    robotics.servoRun180(robotics.CustomAllPin.P16, 180)
    basic.pause(1000)
    robotics.servoRun360(robotics.CustomAllPin.P15, 50, robotics.MotorDirection.CW)
    basic.pause(1000)
    robotics.servoRun360(robotics.CustomAllPin.P15, 50, robotics.MotorDirection.CCW)
    basic.pause(1000)
    robotics.servoRun360(robotics.CustomAllPin.P15, 0, robotics.MotorDirection.CCW)
}
let testMode = 0
testMode = 0
basic.forever(function () {
    serial.writeString("mode:" + testMode)
    if (testMode == 1) {
        serial.writeLine(" Servo PIN: 180-->P16 360-->P15")
        testServo()
        basic.pause(1000)
    } else if (testMode == 2) {
        serial.writeLine(" Motor M1 M2")
        testMotor()
        basic.pause(1000)
    } else if (testMode == 3) {
        serial.writeLine(" RGB PIN: P14")
        testRgbLight()
        basic.pause(1000)
    } else if (testMode == 4) {
        serial.writeLine(" Sensor Note: Note: P9 pin must be connected to DHT11 sensor")
        testSensor()
        basic.pause(1000)
    } else {
        serial.writeLine("")
        serial.writeLine("Press the A key to select the mode")
        basic.pause(1000)
    }
})

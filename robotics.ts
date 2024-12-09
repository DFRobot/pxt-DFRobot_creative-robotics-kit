/**
 * robotics blocks
 */

//% weight=100 color=#df6721 icon="\uf544" block="Robotics Kit"
//% groups="['Motor', 'Servo', 'Sensor', 'RGB']"
namespace robotics {
    
    export enum MotorType {
        //% block="M1"
        M1,
        //% block="M2"
        M2,
        //% block="All"
        All
    }

    export enum MotorDirection {
        //% block="CW"
        CW,
        //% block="CCW"
        CCW
    }

    export enum CustomAllPin {
        //% block="P0"
        P0,
        //% block="P1"
        P1,
        //% block="P2"
        P2,
        //% block="P8"
        P8,
        //% block="P9"
        P9,
        //% block="P12"
        P12,
        //% block="P13"
        P13,
        //% block="P14"
        P14,
        //% block="P15"
        P15,
        //% block="P16"
        P16
    }

    export enum CustomAnalogPin {
        //% block="P0"
        P0,
        //% block="P1"
        P1,
        //% block="P2"
        P2
    }

    export enum DataType {
        //% block="temperature(℃)"
        TemperatureC,
        //% block="temperature(℉)"
        TemperatureF,
        //% block="humidity(%RH)"
        Humidity
    }
    
    /**
     * Set the speed of motors M1 and M2, they can be set individually or together.
     * @param motor to motor, eg: MotorType.M1
     * @param dir to dir, eg: MotorDirection.CW
     * @param speed to speed, eg: 100
     */
    //% block="motor %motor dir %dir speed %speed"
    //% group="Motor"
    //% speed.min=0 speed.max=255
    //% weight=100
    export function motorRun(motor: MotorType, dir: MotorDirection, speed: number): void {
        // Add code here
    }

    /**
     * Stop motors M1 and M2, they can be set individually or together.
     * @param motor to motor, eg: MotorType.M1
     */
    //% block="motor stop %motor"
    //% group="Motor"
    //% weight=95
    export function motorStop(motor: MotorType): void {
        // Add code here
    }

    /**
     * Setting the angle of a 180° servo.
     * @param pin to pin, eg: CustomAllPin.P0
     * @param degree to degree, eg: 90
     */
    //% block="set pin %pin servo to %degree degree"
    //% group="Servo"
    //% degree.min=0 degree.max=180
    //% weight=90
    export function servoRun180(pin: CustomAllPin, degree: number): void {
        // Add code here
    }

    /**
     * Setting the speed of a 360° servo.
     * @param pin to pin, eg: CustomAllPin.P0
     * @param dir to dir, eg: MotorDirection.CW
     * @param speed to speed, eg: 50
     */
    //% block="pin %pin servo rotate %dir at %speed speed"
    //% group="Servo"
    //% speed.min=0 speed.max=100
    //% weight=85
    export function servoRun360(pin: CustomAllPin, dir: MotorDirection, speed: number): void {
        // Add code 
    }

    /**
     * Reading the distance from an ultrasonic sensor in centimeters.
     * @param pin to pin, eg: CustomAllPin.P0
     */
    //% block="Get ultrasonic sensor range from pins %pin in units(cm)"
    //% group="Sensor"
    //% weight=80
    export function readUltrasonicData(pin: CustomAllPin): number {
        // Add code 
        return 0
    }

    /**
     * Reading the status of a line-following sensor (digital output), output 0 when detecting a black line, and output 1 when detecting a white line.
     * @param pin to pin, eg: CustomAllPin.P0
     */
    //% block="Read Line tracking sensor %pin state"
    //% group="Sensor"
    //% weight=75
    export function readLineTrackingData(pin: CustomAllPin): number {
        // Add code 
        return 0
    }

    /**
     * Read the soil moisture value (analog signal), with a range of 0 to 1023.
     * @param pin to pin, eg: CustomAnalogPin.P0
     */
    //% block="Read pin %pin soil moisture sensor"
    //% group="Sensor"
    //% weight=73
    export function readMoistureData(pin: CustomAnalogPin): number {
        // Add code 
        return 0
    }

    /**
     * Reading the temperature and humidity values from a DHT11 sensor. The temperature values are available in two units, Celsius (℃) and Fahrenheit (℉), while the humidity is expressed as a percentage (%).
     * @param pin to pin, eg: CustomAllPin.P0
     * @param type to type, eg: DataType.TemperatureC
     */
    //% block="Read pin %pin %type"
    //% group="Sensor"
    //% weight=70
    export function readDht11Data(pin: CustomAllPin, type: DataType): number {
        // Add code 
        return 0
    }

    /**
     * Reading the value from an ambient light sensor (Analog signal).
     * @param pin to pin, eg: CustomAnalogPin.P0
     */
    //% block="Read pin %pin Ambient light"
    //% group="Sensor"
    //% weight=65
    export function readLightData(pin: CustomAnalogPin): number {
        // Add code 
        return 0
    }

    /**
     * Human Infrared Sensor (Digital signal).
     * @param pin to pin, eg: CustomAllPin.P0
     */
    //% block="Read pin %pin Digital infrared motion sensor"
    //% group="Sensor"
    //% weight=60
    export function readInfraredData(pin: CustomAllPin): number {
        // Add code 
        return 0
    }

    /**
     * Set the total number of RGB lights.
     * @param pin to pin, eg: CustomAllPin.P0
     * @param num to num, eg: 5
     */
    //% block="pin %pin %num RGB LEDs"
    //% group="RGB"
    //% num.min=1 num.max=7
    //% weight=55
    export function ws2812Init(pin: CustomAllPin, num: number): void {

    }

    /**
     * Setting the brightness value of RGB lights, range: 0 to 255.
     * @param brightness to brightness, eg: 200
     */
    //% block="RGB brightness %brightness"
    //% group="RGB"
    //% brightness.min=0 brightness.max=255
    //% weight=50
    export function ws2812SBrightness(brightness: number): void {
        
    }

    /**
     * Turn off all RGB lights.
     */
    //% block="clear all RGB LEDs"
    //% group="RGB"
    //% weight=45
    export function ws2812Off(): void {

    }

    /**
     * Set the color displayed by the RGB lights.
     * @param from to start ,eg: 1
     * @param to to end ,eg: 5
     */
    //% block="RGB %from to %to show color %color"
    //% group="RGB"
    //% from.min=1 from.max=7
    //% to.min=1 to.max=7
    //% color.shadow="colorNumberPicker"
    //% weight=40
    export function ws2812Color(from: number, to: number, color: number): void {
        
    }

    /**
     * Set the color of the RGB lights using the three primary colors.
     * @param red to red ,eg: 255
     * @param green to green ,eg: 255
     * @param blue to blue ,eg: 255
     */
    //% block="red %red green %green blue %blue"
    //% group="RGB"
    //% red.min=0 red.max=255
    //% green.min=0 green.max=255
    //% blue.min=0 blue.max=255
    //% weight=35
    export function getWs2812Color(red: number, green: number, blue: number): number {
        return (red << 16) + (green << 8) + (blue);
    }

    /**
     * Set the RGB lights to display a gradient of colors.
     * @param start to start ,eg: 1
     * @param end to end ,eg: 5
     * @param startHue to startHue ,eg: 1
     * @param endHue to endHue ,eg: "360
     */
    //% block="%start to %end RGB show gradient color from %startHue to %endHue"
    //% group="RGB"
    //% start.min=1 start.max=7 
    //% end.min=1 end.max=7 
    //% startHue.min=0 startHue.max=360
    //% endHue.min=0 endHue.max=360
    //% weight=30
    export function ws2812Rainbow(start: number, end: number, startHue: number, endHue: number): void {
        
    }

    /**
     * Shift the color sequence of the LED, with a customizable movement unit. This is used for creating a running lights effect later on.
     * @param offset to offset ,eg: 0
     */
    //% block="shift pixels by %offset"
    //% group="RGB"
    //% weight=25
    export function ws2812Shift(offset: number): void {
        
    }

    /**
     * Loop the color sequence of the LED with a custom-defined movement unit.
     * @param offset to offset ,eg: 0
     */
    //% block="rotate pixels by %offset"
    //% group="RGB"
    //% weight=20
    export function ws2812Rotate(offset: number): void {
        
    }

}

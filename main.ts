/**
 * 自訂的積木
 */
//% weight=0 color=#3CB371 icon="\uf1b9"
namespace KSR026 {
    /**
    * 顯示HC-SR04
    *  設定為公分
    */
    //% blockId="sr04" block="sr04"
    export function sr04(): number {
        return sonar.ping(DigitalPin.P13, DigitalPin.P14, PingUnit.Centimeters)
    }
    /**
    * 顯示 LED
    * @param value 在此描述值, eg: 5
    */
    //% blockId="led" block="led %RGB"
    export function led(color: NeoPixelColors) {
        const use_led = neopixel.create(DigitalPin.P16, 2, NeoPixelMode.RGB);
        use_led.showColor(neopixel.colors(color))
    }
     /**
     * 顯示右循跡
     *  設定為公分
     */
    //% blockId="TRACK_R" block="TRACK_R"
    export function TRACK_R(): boolean {
        if (pins.digitalReadPin(DigitalPin.P13) == 1){
            return true
        } else {
            return false
        }

    }
    /**
     * 顯示左循跡
     *  設定為公分
     */
    //% blockId="TRACK_R" block="TRACK_L"
    export function TRACK_L(): boolean {
        if (pins.digitalReadPin(DigitalPin.P14) == 1) {
            return true
        } else {
            return false
        }
    }
   
}
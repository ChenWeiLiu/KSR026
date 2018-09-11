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
   
}
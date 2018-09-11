/**
 * 自訂的積木
 */
//% weight=0 color=#3CB371 icon="\uf1b9"
namespace KSR026 {
    /**
    * 顯示HC-SR04
    * 
    * 
    */
    //% block
    export function sr04(): number {
        return sonar.ping(DigitalPin.P13, DigitalPin.P14, PingUnit.Centimeters)
    }

   
}
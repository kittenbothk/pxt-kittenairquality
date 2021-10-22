/*
By Anson From KittenBotHK
Air Quality Sensor Extension designed for Micro:bit
*/

//% color="#76dbb1" weight=10 icon="\uf2ce"
//% groups='["KittenAirQuality"]'
namespace KittenAirQuality {
let co2zero = 55
let co2now = 0
    //% blockId=getPPM block="Get Air Quality PPM, Pin &pin"
    //% group="Air Quality Sensor" weight=100
    export function getPPM(pin: AnalogPin) {
	    co2now = 0
	    for(int i = 0; i < 10; i++){
	    	co2now += pins.analogReadPin(pin)
	    	basic.pause(200)
	    }
	    let co2raw = co2now / 10
	    let co2ppm = co2raw - co2zero
	    return co2ppm
    }

}

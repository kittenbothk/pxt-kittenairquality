/*
By Anson From KittenBotHK
Air Quality Sensor Extension designed for Micro:bit
*/

//% color="#24d3ff" weight=10 icon="\uf2ce"
//% groups='["KittenAirQuality"]'
namespace KittenAirQuality {
let co2zero = 55
let co2now = 0

	//% blockId=cali block="Calibrate, Pin %pin"
	//% group="Air Quality Sensor" weight=120
	export function cali(pin: AnalogPin){
		co2now = 0
		for(let i = 0; i < 10; i++) {
			co2now += pins.analogReadPin(pin)
			basic.pause(200)
		}
		let co2raw = co2now / 10
		co2zero=Math.abs(co2raw-400)
	}

	//% blockId=getPPM block="Get Air Quality PPM, Pin %pin"
	//% group="Air Quality Sensor" weight=100
	export function getPPM(pin: AnalogPin): number {
		co2now = 0
		for(let i = 0; i < 10; i++) {
			co2now += pins.analogReadPin(pin)
			basic.pause(200)
		}
		let co2raw = co2now / 10
		let co2ppm = co2raw - co2zero
		return Math.round(co2ppm)
	}
}

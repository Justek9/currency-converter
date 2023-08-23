import { convertPLNToUSD } from './../convertPLNtoUSD'

describe('ConvertPLNtoUSD', () => {
	it('should return proper value when good input', () => {
		expect(convertPLNToUSD(1)).toBe('$0.29')
		expect(convertPLNToUSD(2)).toBe('$0.57')
		expect(convertPLNToUSD(20)).toBe('$5.71')
		expect(convertPLNToUSD(12)).toBe('$3.43')
	})
	it('should return NaN when input is text', () => {
		expect(convertPLNToUSD('10')).toBeNaN()
		expect(convertPLNToUSD('test')).toBeNaN()
		expect(convertPLNToUSD('ok')).toBeNaN()
		expect(convertPLNToUSD('three')).toBeNaN()
	})
	it('should return NaN when no input', () => {
		expect(convertPLNToUSD()).toBeNaN()
	})
	it('should return $0.00 when input is less then 0', () => {
		expect(convertPLNToUSD(-5)).toBe('$0.00')
		expect(convertPLNToUSD(-100)).toBe('$0.00')
		expect(convertPLNToUSD(-23432)).toBe('$0.00')
	})
	it('should return "Error" when input is neither string nor number', () => {
		expect(convertPLNToUSD({})).toBe('Error')
		expect(convertPLNToUSD([])).toBe('Error')
		expect(convertPLNToUSD(null)).toBe('Error')
		expect(convertPLNToUSD(function () {})).toBe('Error')
	})
})

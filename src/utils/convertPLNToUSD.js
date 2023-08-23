export const convertPLNToUSD = PLN => {

	if (PLN < 0) return '$0.00'
	if (
		(PLN && typeof PLN === 'bigint') ||
		(PLN && typeof PLN === 'boolean') ||
		(PLN && typeof PLN === 'symbol') ||
		(PLN && typeof PLN === 'object') ||
		(PLN && typeof PLN === 'function') ||
		PLN === null
	)
		return 'Error'
	if (typeof PLN === 'string' || !PLN) return NaN

	const PLNtoUSD = PLN / 3.5

	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	})

	return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ')
}

convertPLNToUSD(1)

import ResultBox from './ResultBox'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { convertUSDToPLN } from './../../utils/convertUSDToPLN'
import { convertPLNToUSD } from './../../utils/convertPLNToUSD'
import { formatAmountInCurrency } from './../../utils/formatAmountInCurrency'

describe('Component ResultBox', () => {
	it('should render without crashing', () => {
		render(<ResultBox to='USD' from='PLN' amount={100} />)
	})
	it('should render proper info about conversion when PLN -> USD', () => {
		const testCases = [1, 12121, 3.5, 17]
		for (const testAmount of testCases) {
			// render component
			render(<ResultBox to='USD' from='PLN' amount={testAmount} />)

			// find main div
			const container = screen.getByTestId('container')

			// check if main div has proper value
			const result = `${formatAmountInCurrency(testAmount, 'PLN')} = ${convertPLNToUSD(testAmount)}`

			expect(container).toHaveTextContent(result)

			// unmount component
			cleanup()
		}
	})

	it('should render proper info about conversion when USD -> PLN', () => {
		const testCases = [1, 12121, 3.5, 17]

		for (const testAmount of testCases) {
			// render component
			render(<ResultBox to='PLN' from='USD' amount={testAmount} />)

			// find main div
			const container = screen.getByTestId('container')

			// check if main div has proper value
			const result = `${formatAmountInCurrency(testAmount, 'USD')} = ${convertUSDToPLN(testAmount)}`

			expect(container).toHaveTextContent(result)

			// unmount component
			cleanup()
		}
	})
	it('should render proper info when USD -> USD or PLN->PLN', () => {
		const testCases = [
			{ amount: 17, currency: 'USD' },
			{ amount: 17.35, currency: 'USD' },
			{ amount: 1, currency: 'PLN' },
			{ amount: 175145141, currency: 'PLN' },
		]

		for (const testCase of testCases) {
			// render component
			render(<ResultBox to={testCase.currency} from={testCase.currency} amount={testCase.amount} />)

			// find main div
			const container = screen.getByTestId('container')

			// check if main div has proper value
			const result = `${formatAmountInCurrency(testCase.amount, testCase.currency)} = ${formatAmountInCurrency(
				testCase.amount,
				testCase.currency
			)}`

			expect(container).toHaveTextContent(result)

			// unmount component
			cleanup()
		}
	})
})

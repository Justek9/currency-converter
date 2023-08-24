import ResultBox from './ResultBox'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Component ResultBox', () => {
	it('should render without crashing', () => {
		render(<ResultBox to='USD' from='PLN' amount={100} />)
	})
	it('should render proper info about conversion when PLN -> USD', () => {
		// const testCases = [
		// 	{ amount: '100', from: 'PLN', to: 'USD' },
		// 	{ amount: '1', from: 'PLN', to: 'USD' },
		// 	{ amount: '0', from: 'PLN', to: 'USD' },
		// 	{ amount: '200', from: 'PLN', to: 'USD' },
		// ]
		// render component
		render(<ResultBox to='USD' from='PLN' amount={100} />)

		// find main div
		const container = screen.getByTestId('container')

		// check if main div has proper value
		expect(container).toHaveTextContent('PLN 100.00 = $28.57')
	})
})

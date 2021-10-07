/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../src/pages/index';

describe('Home', () => {
	it('renders a heading', () => {
		render(<Home />);

		const button = screen.getByTestId('material');
		expect(button).toBeInTheDocument();
	});
});

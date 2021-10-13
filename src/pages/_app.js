import React from 'react';
import '../styles/global.css';
import 'tailwindcss/tailwind.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ptBR } from '@mui/material/locale';

const theme = createTheme(
	{},
	ptBR,
);

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
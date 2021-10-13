import Head from 'next/head';
import dynamic from 'next/dynamic';
import React from 'react';
const AsyncAutocompleteInput = dynamic(() => import('../components/asyncAutocompleteInput'));

const Home = () => {
	return (
		<div className="min-h-screen bg-gray-300 py-6 flex flex-col justify-center sm:py-12">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<AsyncAutocompleteInput/>
			</main>
		</div>
	);
};

export default Home;

import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Home = () => {
	return (
		<div className="min-h-screen bg-gray-300 py-6 flex flex-col justify-center sm:py-12">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<h1>Home</h1>
				<Link href="/negociacao">
					Negociação
				</Link>
			</main>
		</div>
	);
};

export default Home;

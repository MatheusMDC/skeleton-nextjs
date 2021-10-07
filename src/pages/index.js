import Head from 'next/head';
import styles from './index.module.css';
import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Home = () => (
	<div className="min-h-screen bg-gray-300 py-6 flex flex-col justify-center sm:py-12">
		<Head>
			<title>Create Next App</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Stack direction="row" spacing={2} className="justify-center">
			<Button variant="contained" data-testid="material">Material</Button>
			<Button variant="contained" disabled>
				Design
			</Button>
			<Button variant="contained" href="#contained-buttons">
				Component
			</Button>
		</Stack>
		<main>
			<h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
			</h1>

			<p className={styles.description}>
        Get started by editing <code>pages/index.js</code>
			</p>

			<div className={styles.grid}>
				<a href="https://nextjs.org/docs" className={styles.card}>
					<h3>Documentation &rarr;</h3>
					<p>Find in-depth information about Next.js features and API.</p>
				</a>

				<a href="https://nextjs.org/learn" className={styles.card}>
					<h3>Learn &rarr;</h3>
					<p>Learn about Next.js in an interactive course with quizzes!</p>
				</a>

				<a
					href="https://github.com/vercel/next.js/tree/master/examples"
					className={styles.card}
				>
					<h3>Examples &rarr;</h3>
					<p>Discover and deploy boilerplate example Next.js projects.</p>
				</a>

				<a href="https://vercel.com/new" className={styles.card}>
					<h3>Deploy &rarr;</h3>
					<p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
				</a>
			</div>
		</main>
	</div>
);

export default Home;

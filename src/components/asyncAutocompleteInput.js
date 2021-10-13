// import React, { useState } from 'react';
// import {Autocomplete, TextField} from '@mui/material';
//
// export function getStaticProps() {
// 	const endpoint = `${process.env.RESOURCE_HOST}/api/v1/resource`;
// 	const res = fetch(endpoint);
// 	const data = res.json();
//
// 	return {
// 		props: {
// 			data: data.map(resource => resource.name),
// 		},
// 	};
// }
//
// const ProducerInput = ({data}) => {
// 	console.log(data);
// 	const [inputValue, setinputValue] = useState('');
// 	return (
// 		<Autocomplete
// 			inputValue={inputValue}
// 			onInputChange={(e) => setinputValue(event.target.value)}
// 			id="combo-box-demo"
// 			options={data}
// 			getOptionLabel={(option) => option}
// 			style={{ width: 300 }}
// 			renderInput={(params) => (
// 				<TextField {...params} label="Combo box" variant="standard" />
// 			)}
// 			open={inputValue.length > 2}
// 		/>
// 	);
// };
//
// export default ProducerInput;


import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import debounce from 'lodash.debounce';
import {useMemo} from 'react';

async function getData() {
	const endpoint = 'https://5ffe327fd9ddad0017f68e6b.mockapi.io/api/v1/resource';
	const res = await fetch(endpoint);
	const data = await res.json();
	return data.map(resource => resource.name);
}

export default function AsyncAutocompleteInput() {
	const [open, setOpen] = React.useState(false);
	const [options, setOptions] = React.useState([]);
	const loading = open && options.length === 0;

	React.useEffect(() => {
		let active = true;

		if (!loading) {
			return undefined;
		}

		(async () => {
			const resources = await getData();

			if (active) {
				setOptions([...resources]);
			}
		})();

		return () => {
			active = false;
		};
	}, [loading]);

	React.useEffect(() => {
		// if (!open) {
		// 	setOptions([]);
		// }
	}, [open]);

	const changeHandler = () => {
		setOpen(true);
	};

	const debouncedChangeHandler = useMemo(() => {
		return debounce(changeHandler, 300);
	}, []);

	return (
		<Autocomplete
			id="sample"
			sx={{ width: 300 }}
			open={open}
			onInputChange={(event, value) => {
				console.log(event._reactName);
				console.log(value);

				if(value.length >= 3){
					debouncedChangeHandler();
				} else {
					if(open) {
						setOpen(false);
					}
				}
			}}
			onClose={() => {
				setOpen(false);
			}}
			isOptionEqualToValue={(option, value) => option === value}
			getOptionLabel={(option) => option}
			options={options}
			loading={loading}
			renderInput={(params) => (
				<TextField
					{...params}
					label="Comprador"
					InputProps={{
						...params.InputProps,
						endAdornment: (
							<React.Fragment>
								{loading ? <CircularProgress color="inherit" size={20} /> : null}
								{/*{params.InputProps.endAdornment}*/}
							</React.Fragment>
						),
					}}
				/>
			)}
		/>
	);
}
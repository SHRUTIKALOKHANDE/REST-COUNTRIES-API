// let countries = [
// 		'germany',
// 		'united states of america',
// 		'brazil',
// 		'iceland',
// 		'afghanistan',
// 		'aland islands',
// 		'albania',
// 		'algeria',
// 	];
const getCountryDetails = async () => {
	try {
		// let response = await Promise.all(
		// 	countries.map((country) =>
		// 		fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`).then((data) => data.json())
		// 	)
		// );
		let response=await fetch(`https://restcountries.eu/rest/v2/all`).then((data) => data.json());

		if (response) {
			return response;
		}
	} catch (e) {
		return e;
	}
};

export const getAllData = async () => {
	let performAPICall = await getCountryDetails();
	let data=[];
	for (let i = 0; i < performAPICall.length; i++) {
		data.push(performAPICall[i]);
	}
	return data;
};

import axios from 'axios';
export default function axiosWithAPIAuth() {
	return axios.create({
		headers: {
			//'Host': 'marketcheck-prod.apigee.net',
			'Content-Type': 'application/json'
		},
		/*
		params: {
			api_key: process.env.REACT_APP_CAR_API_KEY,
			car_type: 'new'
		}*/
	})
}
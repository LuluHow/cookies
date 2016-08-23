var axios = require("axios");

export class CookiesServices {

	private baseURI = "https://intra.epitech.eu";
	private dataFormatURI = "?format=json";

	constructor() {

	}

	public getUserProfile(login: string) {
		let deferred = this.performQuery("GET", `/user/${login}`, null);
		return deferred;
	}

	protected performQuery(method: string, url: string, data: any): Promise<any> {
		url = `${this.baseURI}${url}${this.dataFormatURI}`;
		return new Promise<any>((resolve, reject) => {
			if (method == "GET") {
				axios({
					url: url,
					method: 'GET' 
				}).then((resp) => {
					resolve(resp);
				}).catch((error) => {
					reject(error);
				});
			}
			else if (method == "POST") {
				axios({
					url: url,
					method: 'POST',
					data: data
				}).then((resp) => {
					resolve(resp);
				}).catch((error) => {
					reject(error);
				});
			}
			else {
				reject();
			}
		});
	}
}
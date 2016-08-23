import * as React from 'react'  
import * as ReactDOM from 'react-dom'

import { CookiesServices } from '../services/cookies.services';

export interface IMainProps {
	title: string;
}

export default class Main extends React.Component<IMainProps, {}> {

	private cookiesServices: CookiesServices;

	public constructor() {
		super();

		this.cookiesServices = new CookiesServices();

		this.state = {
			value: "Hello la W@C"
		};

	}

	public handleClick(): void {
		this.setState({
			value: "GoodBye la W@C"
		});
	}

	public render(): JSX.Element {
		return (
			<div>
				<p onClick={ this.handleClick.bind(this) }>{ (this.state as any).value }</p>
			</div>
		)
	}

	public componentDidMount(): void {
		this.cookiesServices.getUserProfile("horem_l").then((user) => {
			console.log(user);
		})
	}
}
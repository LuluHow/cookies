import * as React from 'react'  
import * as ReactDOM from 'react-dom'

export interface IMainProps {
	title: string;
}

export default class Main extends React.Component<IMainProps, {}> {

	public constructor() {
		super();

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
}
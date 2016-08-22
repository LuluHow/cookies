import * as React from 'react'  
import * as ReactDOM from 'react-dom'

export interface IMainProps {
	title: string;
}

export default class Main extends React.Component<IMainProps, {}> {

	public constructor() {
		super();

	}

	public render(): JSX.Element {
		return (
			<div>
				<p>Hello la W@C</p>
			</div>
		)
	}
}
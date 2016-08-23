/// <reference path="_all.d.ts" />
"use strict";

import * as express from "express";
import * as router from "./router/routes";

/**
 * Server
 *
 * @class Server
 */
class Server {

	public app: express.Application;

	/**
	 * Bootstrap the app
	 * @class Server
	 * @method bootstrap
	 * @static
	 * 
	 * @return {Server} Returns the newly created injector for this app.
	 */
	public static bootstrap(): Server {
		return new Server();
	}

	/**
	 * Constructor
	 *
	 * @class Server
	 * @constructor
	 */
	constructor() {
		this.app = express();

		this.run();
	}

	private run(): void {
		this.app.use("/", router);	
	}

}

var server = Server.bootstrap();
export = server.app;
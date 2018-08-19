/**
 * @file
 * Entry point for normal presentation of Autoback.
 */

import {Autoback} from './src/autoback';

function ready(fn) {
	if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

ready(Autoback.install);

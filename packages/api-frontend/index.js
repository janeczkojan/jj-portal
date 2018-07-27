const cliClear = require('cli-clear');
const path = require('path');
const fs = require('fs');
const errors = require('./errors');


cliClear();
console.log('Starting API Frontend...');


try {

	const env = process.env.ENV;

	if (!env) {
		throw errors.envNotSet();
	}

	const envFile = `./.env.${env}.json`;

	if (!fs.existsSync(envFile)) {
		throw errors.envFileNotExists();
	}

	const envJson = fs.readFileSync(envFile, 'utf8');
	const envData = JSON.parse(envJson);

	if (!envData || Object.values(envData).length <= 0) {
		throw errors.envIsEmpty();
	}


	console.log(envData);
	console.log('Started!');

}
catch (err) {

	cliClear();

	if (!err.msg) {
		console.error(err);
	}
	else {
		console.error('Error:', err.msg);
	}

}











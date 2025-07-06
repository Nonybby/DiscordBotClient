const { v3 } = require('murmurhash');
const { readFileSync } = require('fs');
const Constants = require('../AppCore/Constants');
const bucketReplacement = require('./user_experiments.json');

const disabledBuckets = [
	'2023-03_pomelo_debounce_delay',
	'2023-04_pomelo_attempt',
	'2023-04_pomelo_suggestions',
	'2023-03_pomelo',
];

function buildUserExperiment(obj, botId) {
	const dataFromBucket = bucketReplacement[obj.id];
	if (!dataFromBucket) return null;
	if (disabledBuckets.includes(obj.id)) return null;
	const hash = v3(obj.id);
	const revision = dataFromBucket.revision;
	const bucket = dataFromBucket.bucket;
	const override = dataFromBucket.override === false ? -1 : 0;
	const population = dataFromBucket.population;
	const hash_result = v3(`${obj.id}:${botId}`) % 10000;
	const aa_mode = Number(dataFromBucket.aaMode);
	const trigger_debugging = Number(dataFromBucket.triggerDebuggingEnabled);
	
	const arr = [
		hash,
		revision,
		bucket,
		override,
		population,
		hash_result,
		aa_mode,
		trigger_debugging,
	];

	if (dataFromBucket.holdoutName) {
		arr.push(dataFromBucket.holdoutName);
		arr.push(dataFromBucket.holdoutRevision);
		arr.push(dataFromBucket.holdoutBucket);
	} else {
		arr.push(null, null, null);
	}

	return arr;
}

module.exports.User = function (allData, botId) {
	return allData
		.map((obj) => buildUserExperiment(obj, botId))
		.filter((x) => x);
};

module.exports.Guild = function () {
	return JSON.parse(
		readFileSync(Constants.DiscordGuildExperimentsPath, 'utf8'),
	);
};

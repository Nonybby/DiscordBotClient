## [User Experiment Structure](https://docs.discord.sex/topics/experiments#user-experiment-structure)

This object is represented as an array of the following fields:

| Field                | Type     | Description                                                                                                                         |
| -------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| hash                 | integer  | 32-bit unsigned Murmur3 hash of the experiment's name                                                                               |
| revision             | integer  | Current version of the rollout                                                                                                      |
| bucket               | integer  | The requesting user or fingerprint's assigned experiment bucket                                                                     |
| override             | integer  | Whether the user or fingerprint has an override for the experiment (-1 for false, 0 for true)                                       |
| population           | integer  | The internal population group the requesting user or fingerprint is in                                                              |
| hash_result          | integer  | The calculated rollout position to use, prioritized over local calculations                                                         |
| aa_mode[^1]          | integer  | The experiment's A/A testing mode, represented as an integer-casted boolean (0 for false, 1 for true)                               |
| trigger_debugging    | integer  | Whether the experiment's analytics trigger debugging is enabled, represented as an integer-casted boolean (0 for false, 1 for true) |
| holdout_name[^2]     | ?string  | A human-readable experiment name (formatted as year-month_name) that disables the experiment                                        |
| holdout_revision[^2] | ?integer | The revision of the holdout experiment                                                                                              |
| holdout_bucket[^2]   | ?integer | The requesting user or fingerprint's assigned bucket for the holdout experiment                                                     |


[^1]: The bucket for A/A tested experiments should always be None (-1) unless an override is present for the resource.
[^2]: Holdout information is only present if the user or fingerprint has an assigned bucket for the holdout experiment. Therefore, if holdout experiment information 
is present and the population bucket is set to None (-1), the experiment has been disabled by the holdout. As user experiments are opaque, no client handling is 
required for this field. Just follow the population field as usual.

## Snippets (Get User Experiment)

```js
(() => {
    var findByProps;
    if (window.Vencord) {
        findByProps = Vencord.Webpack.findByProps;
    } else {
        let _mods; webpackChunkdiscord_app.push([[Symbol()],{},r=>_mods=r.c]);
        webpackChunkdiscord_app.pop();
        
        findByProps = (...props) => {
            for (let m of Object.values(_mods)) {
                try {
                    if (!m.exports || m.exports === window) continue;
                    if (props.every((x) => m.exports?.[x])) return m.exports;
        
                    for (let ex in m.exports) {
                        if (props.every((x) => m.exports?.[ex]?.[x]) && m.exports[ex][Symbol.toStringTag] !== 'IntlMessagesProxy') return m.exports[ex];
                    }
                } catch {}
            }
        }
    }
    const experimentModule = findByProps('getGuildExperimentBucket');
    const experiments = Object.entries(experimentModule.getRegisteredExperiments())
        .map(([id, data]) => ({ id, ...data }))
        .sort((a, b) => {
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();
            return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
        })
        .filter(exp => exp.type === "user");
    const experimentData = {};
    for (const experiment of experiments) {
    	try {
        	experimentData[experiment.id] = JSON.parse(JSON.stringify(experimentModule.getUserExperimentDescriptor(experiment.id)));
        	delete experimentData[experiment.id].type
        	delete experimentData[experiment.id].hashResult
        	delete experimentData[experiment.id].assignmentSource
        	delete experimentData[experiment.id].sessionId
        	delete experimentData[experiment.id].loadedFromCache
        	delete experimentData[experiment.id].fingerprint
    	}
        catch (e) {
            console.log(experiment)
        }
    }
    copy(JSON.stringify(experimentData));
})();
```

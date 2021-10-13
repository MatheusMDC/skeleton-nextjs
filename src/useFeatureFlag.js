import { AppConfigurationClient } from '@azure/app-configuration';
import { useMemo, useState } from 'react';

const client = new AppConfigurationClient('Endpoint=https://feature-manager-teste.azconfig.io;Id=Luve-le-s0:X2pLOXw6yWN/Fhgr7g0w;Secret=+jqP7sh//6j8yzxRa2xMCIA4p33BonO2rpSkd9fYClc=');

/**
 * Retrieves the specified feature flag from Azure App Configuration.
 * @param {string} flagKey App Config Feature Flag key
 * @returns the feature flag for the specified key
 */
const useFeatureFlag = (flagKey = '') => {
	const [enabled, setEnabled] = useState(false);

	useMemo(async () => {
		if (!flagKey || !flagKey.toString().trim().length) {
			console.error('A feature flag key must be supplied.');
		} else {
			try {
				const client = new AppConfigurationClient('Endpoint=https://feature-manager-teste.azconfig.io;Id=Luve-le-s0:X2pLOXw6yWN/Fhgr7g0w;Secret=+jqP7sh//6j8yzxRa2xMCIA4p33BonO2rpSkd9fYClc=');

				const result = await client.getConfigurationSetting({
					key: `.appconfig.featureflag/${flagKey.toString().trim()}`,
				});
				if (result && typeof result === 'object') {
					console.debug('Feature: ' + JSON.parse(result.value).id, JSON.parse(result.value).enabled);
					setEnabled(JSON.parse(result.value).enabled);
				}
			} catch (error) {
				console.error(error);
			}
		}
	}, [flagKey]);

	return { enabled };
};

/**
 * Retrieves the specified configuration from Azure App Configuration.
 * @param {string} configKey App Config Key
 * @returns the configuration for the specified key
 */
const useConfiguration = (configKey = '') => {
	const [config, setConfig] = useState('');

	useMemo(async () => {
		if (!configKey || !configKey.toString().trim().length) {
			console.error('A config key must be supplied.');
		} else {
			try {
				const result = await client.getConfigurationSetting({ key: configKey.toString().trim() });
				if (result) {
					console.debug('Config: ' + result.key, result.value);
					setConfig(result.value);
				}
			} catch (error) {
				console.error(error);
			}
		}
	}, [configKey]);

	return { config };
};

export { useFeatureFlag, useConfiguration };
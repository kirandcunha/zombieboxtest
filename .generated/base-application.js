import {PLATFORM_NAME} from 'generated/define';
import AbstractApplication from 'zb/abstract-application';

import createPcDevice from 'pc/factory';
import pcDevice from 'pc/device';



/**
 * @abstract
 */
export default class BaseApplication extends AbstractApplication {
	/**
	 */
	constructor() {
		super();
	}


	/**
	 * @return {boolean}
	 */
	isDevicePc() {
		return this.device instanceof pcDevice;
	}

	/**
	 * @override
	 */
	_createDevice() {
		let device;

		if (PLATFORM_NAME) {
			const factory = {
				'pc': createPcDevice,
			}[PLATFORM_NAME];

			if (factory) {
				device = factory();
			}
		} else {
			device = (
				createPcDevice() ||
				null
			);
		}

		if (!device) {
			throw new Error('Can\'t detect a platform.');
		}

		return device;
	}
};

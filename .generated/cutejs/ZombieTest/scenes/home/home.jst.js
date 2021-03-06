import * as cutejs from 'cutejs-lib/cute-library';
import Greeting from "ZombieTest/widgets/greeting/greeting";
import Button from "ZombieTest/widgets/button/button";

/**
 * @typedef {Object}
 */
export var In;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     greeting: Greeting,
 *     playerButton: Button,
 *     backButton: Button,
 *     forwardButton: Button
 * }}
 */
export var Out;


/**
 * @param {*=} opt_templateParams
 * @param {?cutejs.TemplateOptions=} opt_options
 * @return {Out}
 */
export function render(opt_templateParams, opt_options) {
	var templatesData = {};
	var exports = {
		root: null,
		greeting: null,
		playerButton: null,
		backButton: null,
		forwardButton: null
	};
	/**
	 * @param value
	 * @param {string} key
	 * @param {Out} exports
	 */
	var exportFunction = function(value, key, exports) {
		switch (key) {
			case 'root':
				if (!exports.root) {
					exports.root = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'greeting':
				if (!exports.greeting) {
					exports.greeting = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'playerButton':
				if (!exports.playerButton) {
					exports.playerButton = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'backButton':
				if (!exports.backButton) {
					exports.backButton = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'forwardButton':
				if (!exports.forwardButton) {
					exports.forwardButton = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			default:
				cutejs.onUnknownKey(key);
				break;
		}
	};
	var __p = '';
	__p += '<h1>Empty "ZombieTest" project!</h1>\n\n' +
	 cutejs.include('component', Greeting,  {}, "greeting", templatesData) +
	'\n\n<div class="row scenes">\n\t' +
	 cutejs.include('component', Button,  'Player', "playerButton", templatesData) +
	'\n</div>\n<div class="row history">\n\t' +
	 cutejs.include('component', Button,  'Back in history', "backButton", templatesData) +
	'\n\t' +
	 cutejs.include('component', Button,  'Forward in history', "forwardButton", templatesData) +
	'\n</div>\n';
	
	return cutejs.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};

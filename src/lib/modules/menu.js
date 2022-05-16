/**
 * @fileoverview Menu class
 * @author Yi JiHong.
 */

import CoreInterface from '../../interface/_core';
import { domUtils } from '../../helper';

const Menu = function (editor) {
	CoreInterface.call(this, editor);
	this._menuTrayMap = {};
	// dropdown
	this.currentDropdown = null;
	this.currentDropdownActiveButton = null;
	this.currentDropdownName = '';
	this._bindedDropdownOff = null;
	// controller
	this.currentControllerItems = [];
	this.currentControllerName = ''; // @todo
	this.currentControllerTarget = null;
	this._bindControllersOff = null;
	// container
	this.currentContainer = null;
	this.currentContainerActiveButton = null;
	this._bindedContainerOff = null;
	// more layer
	this.currentMoreLayerActiveButton = null;
};

Menu.prototype = {
	/**
	 * @description Method for managing dropdown element.
	 * You must add the "dropdown" element using the this method at custom plugin.
	 * @param {Element|null} target Target button
	 * @param {Element} menu Dropdown element
	 */
	initTarget: function (target, menu) {
		if (target) {
			this.context.element._menuTray.appendChild(menu);
			this._menuTrayMap[target.getAttribute('data-command')] = menu;
		}
	},

	/**
	 * @description Enable dropdown
	 * @param {Element} button Dropdown's button element to call
	 */
	dropdownOn: function (button) {
		if (this._bindedDropdownOff) this._bindedDropdownOff();
		if (this._bindControllersOff) this.controllerOff();

		const dropdownName = (this.currentDropdownName = button.getAttribute('data-command'));
		const menu = (this.currentDropdown = this._menuTrayMap[dropdownName]);
		this.currentDropdownActiveButton = button;
		this._setMenuPosition(button, menu);

		this._bindedDropdownOff = this.dropdownOff.bind(this);
		this.eventManager.addGlobalEvent('mousedown', this._bindedDropdownOff, false);

		if (this.plugins[dropdownName].on) this.plugins[dropdownName].on();
		this.editor._antiBlur = true;
	},

	/**
	 * @description Disable dropdown
	 */
	dropdownOff: function () {
		this.eventManager.removeGlobalEvent('mousedown', this._bindedDropdownOff);
		this._bindedDropdownOff = null;

		if (this.currentDropdown) {
			this.currentDropdownName = '';
			this.dropdown.style.display = 'none';
			this.currentDropdown = null;
			domUtils.removeClass(this.currentDropdownActiveButton, 'on');
			this.currentDropdownActiveButton = null;
			this._notHideToolbar = false;
		}

		this.editor._antiBlur = false;
	},

	/**
	 * @description Enabled container
	 * @param {Element} button Container's button element to call
	 */
	containerOn: function (button) {
		if (this._bindedContainerOff) this._bindedContainerOff();

		const containerName = (this._containerName = button.getAttribute('data-command'));
		const menu = (this.currentContainer = this._menuTrayMap[containerName]);
		this.currentContainerActiveButton = button;
		this._setMenuPosition(button, menu);

		this._bindedContainerOff = this.containerOff.bind(this);
		this.eventManager.addGlobalEvent('mousedown', this._bindedContainerOff, false);

		if (this.plugins[containerName].on) this.plugins[containerName].on();
		this.editor._antiBlur = true;
	},

	/**
	 * @description Disable container
	 */
	containerOff: function () {
		this.eventManager.removeGlobalEvent('mousedown', this._bindedContainerOff);
		this._bindedContainerOff = null;

		if (this.currentContainer) {
			this._containerName = '';
			this.currentContainer.style.display = 'none';
			this.currentContainer = null;
			domUtils.removeClass(this.currentContainerActiveButton, 'on');
			this.currentContainerActiveButton = null;
			this._notHideToolbar = false;
		}

		this.editor._antiBlur = false;
	},

	hasController: function (el) {
		return this.currentControllerItems.indexOf(el) > -1;
	},

	/**
	 * @description Show controller at editor area (controller elements, function, "controller target element(@Required)", "controller name(@Required)", etc..)
	 * @param {any} arguments controller elements, function..
	 */
	controllerOn: function () {
		if (this._bindControllersOff) this._bindControllersOff();
		this.currentControllerItems = [];

		for (let i = 0, arg; i < arguments.length; i++) {
			arg = arguments[i];
			if (!arg) continue;

			if (typeof arg === 'string') {
				this.currentControllerName = arg;
				continue;
			}
			if (typeof arg === 'function') {
				this.currentControllerItems.push(arg);
				continue;
			}
			if (!domUtils.hasClass(arg, 'se-controller')) {
				this.currentControllerTarget = arg;
				this.currentFileComponentInfo = this.component.get(arg);
				continue;
			}
			if (arg.style) {
				arg.style.display = 'block';
				if (this.shadowRoot && this._shadowRootControllerEventTarget.indexOf(arg) === -1) {
					arg.addEventListener('mousedown', function (e) {
						e.preventDefault();
						e.stopPropagation();
					});
					this._shadowRootControllerEventTarget.push(arg);
				}
			}
			this.currentControllerItems.push(arg);
		}

		this._bindControllersOff = this.controllerOff.bind(this);
		this.eventManager.addGlobalEvent('mousedown', this._bindControllersOff, false);
		this.eventManager.addGlobalEvent('keydown', this._bindControllersOff, false);
		this.editor._antiBlur = true;

		if (typeof this.events.showController === 'function') this.events.showController(this.currentControllerName, this.currentControllerItems);
	},

	/**
	 * @description Hide controller at editor area (link button, image resize button..)
	 * @param {KeyboardEvent|MouseEvent|null} e Event object when called from mousedown and keydown events registered in "controllerOn"
	 */
	controllerOff: function (e) {
		this.editor._lineBreaker.style.display = 'none';
		const len = this.currentControllerItems.length;

		if (e && e.target && len > 0) {
			for (let i = 0; i < len; i++) {
				if (typeof this.currentControllerItems[i].contains === 'function' && this.currentControllerItems[i].contains(e.target)) return;
			}
		}

		if (this.editor._fileManager.pluginRegExp.test(this.currentControllerName) && e && e.type === 'keydown' && e.keyCode !== 27) return;
		this.context.element.lineBreaker_t.style.display = this.context.element.lineBreaker_b.style.display = 'none';
		this.status._lineBreakComp = null;

		this.currentControllerName = '';
		this.currentControllerTarget = null;
		this.currentFileComponentInfo = null;
		this.effectNode = null;
		if (!this._bindControllersOff) return;

		this.eventManager.removeGlobalEvent('mousedown', this._bindControllersOff);
		this.eventManager.removeGlobalEvent('keydown', this._bindControllersOff);
		this._bindControllersOff = null;

		if (len > 0) {
			for (let i = 0; i < len; i++) {
				if (typeof this.currentControllerItems[i] === 'function') this.currentControllerItems[i]();
				else this.currentControllerItems[i].style.display = 'none';
			}

			this.currentControllerItems = [];
		}

		this.editor._antiBlur = false;
	},

	/**
	 * @description Specify the position of the controller.
	 * @param {Element} controller Controller element.
	 * @param {Element} referEl Element that is the basis of the controller's position.
	 * @param {string} position Type of position ("top" | "bottom")
	 * When using the "top" position, there should not be an arrow on the controller.
	 * When using the "bottom" position there should be an arrow on the controller.
	 * @param {Object} addOffset These are the left and top values that need to be added specially.
	 * This argument is required. - {left: 0, top: 0}
	 * Please enter the value based on ltr mode.
	 * Calculated automatically in rtl mode.
	 */
	setControllerPosition: function (controller, referEl, position, addOffset) {
		if (this.options._rtl) addOffset.left *= -1;

		const offset = this.offset.get(referEl);
		controller.style.visibility = 'hidden';
		controller.style.display = 'block';

		// Height value of the arrow element is 11px
		const topMargin = position === 'top' ? -(controller.offsetHeight + 2) : referEl.offsetHeight + 12;
		controller.style.top = offset.top + topMargin + addOffset.top + 'px';

		const l = offset.left - this.context.element.wysiwygFrame.scrollLeft + addOffset.left;
		const controllerW = controller.offsetWidth;
		const referElW = referEl.offsetWidth;

		const allow = domUtils.hasClass(controller.firstElementChild, 'se-arrow') ? controller.firstElementChild : null;

		// rtl (Width value of the arrow element is 22px)
		if (this.options._rtl) {
			const rtlW = controllerW > referElW ? controllerW - referElW : 0;
			const rtlL = rtlW > 0 ? 0 : referElW - controllerW;
			controller.style.left = l - rtlW + rtlL + 'px';

			if (rtlW > 0) {
				if (allow) allow.style.left = (controllerW - 14 < 10 + rtlW ? controllerW - 14 : 10 + rtlW) + 'px';
			}

			const overSize = this.context.element.wysiwygFrame.offsetLeft - controller.offsetLeft;
			if (overSize > 0) {
				controller.style.left = '0px';
				if (allow) allow.style.left = overSize + 'px';
			}
		} else {
			controller.style.left = l + 'px';

			const overSize = this.context.element.wysiwygFrame.offsetWidth - (controller.offsetLeft + controllerW);
			if (overSize < 0) {
				controller.style.left = controller.offsetLeft + overSize + 'px';
				if (allow) allow.style.left = 20 - overSize + 'px';
			} else {
				if (allow) allow.style.left = '20px';
			}
		}

		controller.style.visibility = '';
	},

	/**
	 * @description Set the menu position. (dropdown, container)
	 * @param {*} element Button element
	 * @param {*} menu Menu element
	 * @private
	 */
	_setMenuPosition: function (element, menu) {
		menu.style.visibility = 'hidden';
		menu.style.display = 'block';
		menu.style.height = '';
		domUtils.addClass(element, 'on');

		const toolbar = this.context.element.toolbar;
		const toolbarW = toolbar.offsetWidth;
		const toolbarOffset = this.offset.getGlobal(this.context.element.toolbar);
		const menuW = menu.offsetWidth;
		const l = element.parentElement.offsetLeft + 3;

		// rtl
		if (this.options._rtl) {
			const elementW = element.offsetWidth;
			const rtlW = menuW > elementW ? menuW - elementW : 0;
			const rtlL = rtlW > 0 ? 0 : elementW - menuW;
			menu.style.left = l - rtlW + rtlL + 'px';
			if (toolbarOffset.left > this.offset.getGlobal(menu).left) {
				menu.style.left = '0px';
			}
		} else {
			const overLeft = toolbarW <= menuW ? 0 : toolbarW - (l + menuW);
			if (overLeft < 0) menu.style.left = l + overLeft + 'px';
			else menu.style.left = l + 'px';
		}

		// get element top
		let t = 0;
		let offsetEl = element;
		while (offsetEl && offsetEl !== toolbar) {
			t += offsetEl.offsetTop;
			offsetEl = offsetEl.offsetParent;
		}

		const bt = t;
		if (this._isBalloon) {
			t += toolbar.offsetTop + element.offsetHeight;
		} else {
			t -= element.offsetHeight;
		}

		// set menu position
		const toolbarTop = toolbarOffset.top;
		const menuHeight = menu.offsetHeight;
		const scrollTop = this.offset.getGlobalScroll().top;

		const menuHeight_bottom = this._w.innerHeight - (toolbarTop - scrollTop + bt + element.parentElement.offsetHeight);
		if (menuHeight_bottom < menuHeight) {
			let menuTop = -1 * (menuHeight - bt + 3);
			const insTop = toolbarTop - scrollTop + menuTop;
			const menuHeight_top = menuHeight + (insTop < 0 ? insTop : 0);

			if (menuHeight_top > menuHeight_bottom) {
				menu.style.height = menuHeight_top + 'px';
				menuTop = -1 * (menuHeight_top - bt + 3);
			} else {
				menu.style.height = menuHeight_bottom + 'px';
				menuTop = bt + element.parentElement.offsetHeight;
			}

			menu.style.top = menuTop + 'px';
		} else {
			menu.style.top = bt + element.parentElement.offsetHeight + 'px';
		}

		menu.style.visibility = '';
	},

	_moreLayerOn: function (button, layer) {
		this._moreLayerOff();
		this.menu.currentMoreLayerActiveButton = button;
		layer.style.display = 'block';
	},

	/**
	 * @description Disable more layer
	 */
	_moreLayerOff: function () {
		if (this.currentMoreLayerActiveButton) {
			const layer = this.context.element.toolbar.querySelector('.' + this.currentMoreLayerActiveButton.getAttribute('data-command'));
			layer.style.display = 'none';
			domUtils.removeClass(this.currentMoreLayerActiveButton, 'on');
			this.currentMoreLayerActiveButton = null;
		}
	}
};

export default Menu;

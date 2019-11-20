/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */
'use strict';

export default {
    name: 'textStyle',
    add: function (core, targetElement) {
        const context = core.context;
        context.textStyle = {
            _styleList: null
        };

        /** set submenu */
        let listDiv = this.setSubmenu.call(core);
        let listUl = listDiv.querySelector('ul');

        /** add event listeners */
        listUl.addEventListener('click', this.pickup.bind(core));

        context.textStyle._styleList = listDiv.querySelectorAll('li button');

        /** append html */
        targetElement.parentNode.appendChild(listDiv);

        /** empty memory */
        listDiv = null, listUl = null;
    },

    setSubmenu: function () {
        const option = this.context.option;
        const listDiv = this.util.createElement('DIV');
        listDiv.className = 'se-submenu se-list-layer';

        const defaultList = {
            translucent: {
                name: 'Translucent',
                style: 'opacity: 0.5;',
                tag: 'span',
            },
            shadow: {
                name: 'Shadow',
                class: '__se__t-shadow',
                tag: 'span',
            }
        };
        const styleList = !option.textStyles ? ['translucent', 'shadow'] : option.textStyles;

        let list = '<div class="se-list-inner"><ul class="se-list-basic">';
        for (let i = 0, len = styleList.length, t, tag, name, attrs, command, value; i < len; i++) {
            t = styleList[i];
            attrs = '', value = '', command = [];

            if (typeof t === 'string') {
                const defaultStyle = defaultList[t.toLowerCase()];
                if (!defaultStyle) continue;
                t = defaultStyle;
            }

            name = t.name;
            tag = t.tag || 'span';

            if (t.style) {
                attrs += ' style="' + t.style + '"';
                value += t.style.replace(/:[^;]+(;|$)\s*/g, ',');
                command.push('style');
            }
            if (t.class) {
                attrs += ' class="' + t.class + '"';
                value += '.' + t.class.trim().replace(/\s+/g, ',.');
                command.push('class');
            }

            value = value.replace(/,$/, '');

            list += '<li>' +
                '<button type="button" class="se-btn-list" data-command="' + tag + '" data-value="' + value + '" title="' + name + '">' +
                    '<' + tag + attrs + '>' + name +  '</' + tag + '>' +
                '</button></li>';
        }
        list += '</ul></div>';

        listDiv.innerHTML = list;

        return listDiv;
    },

    on: function () {
        const util = this.util;
        const textStyleContext = this.context.textStyle;
        const styleList = textStyleContext._styleList;
        // let selectionNode = this.getSelectionNode();

        for (let i = 0, len = styleList.length, btn, data, active; i < len; i++) {
            btn = styleList[i];
            data = btn.getAttribute('data-value').split(',');
            
            for (let v = 0, value; v < data.length; v++) {
                let selectionNode = this.getSelectionNode();
                if (selectionNode.nodeType !== 1 || selectionNode.nodeName.toLowerCase() !== btn.getAttribute('data-command').toLowerCase()) continue;

                while (!util.isFormatElement(selectionNode)) {
                    value = data[v];
                    if (/^\./.test(value) ? util.hasClass(selectionNode, value.replace(/^\./, '')) : btn.firstElementChild.style[value] === selectionNode.style[value]) {
                        active = true;
                        break;
                    } else {
                        active = false;
                    }
                }

                if (active) break;
                selectionNode = selectionNode.parentNode;
            }

            active ? util.addClass(btn, 'active') : util.removeClass(btn, 'active');
        }

    },

    pickup: function (e) {
        e.preventDefault();
        e.stopPropagation();

        let target = e.target;
        let command = null, tag = null;
        
        while (!command && !/UL/i.test(target.tagName)) {
            command = target.getAttribute('data-command');
            if (command) {
                tag = target.firstChild;
                break;
            }
            target = target.parentNode;
        }

        if (!command) return;

        const checkStyles = [];

        const styles = tag.style;
        for (let i = 0, len = styles.length; i < len; i++) {
            checkStyles.push(styles[i]);
        }

        const classes = tag.classList;
        for (let i = 0, len = classes.length; i < len; i++) {
            checkStyles.push('.' + classes[i]);
        }

        const newNode = this.util.hasClass(target, 'active') ? null : tag.cloneNode(false);
        this.nodeChange(newNode, checkStyles, null, false);

        this.submenuOff();
    }
};

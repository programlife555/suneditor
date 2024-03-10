(function (global, factory) {
	if (typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = global.document
			? factory(global, true)
			: function (w) {
					if (!w.document) {
						throw new Error('SUNEDITOR_LANG a window with a document');
					}
					return factory(w);
			  };
	} else {
		factory(global);
	}
})(typeof window !== 'undefined' ? window : this, function (window, noGlobal) {
	const lang = {
		code: 'he',
		align: 'יישור',
		alignCenter: 'מרכז',
		alignJustify: 'יישר לשני הצדדים',
		alignLeft: 'יישר לשמאל',
		alignRight: 'יישר לימין',
		audio: 'שמע',
		audio_modal_file: 'בחר מקובץ',
		audio_modal_title: 'הכנס שמע',
		audio_modal_url: 'כתובת URL שמע',
		autoSize: 'הקטן אוטומטית',
		backgroundColor: 'צבע קו תחתון',
		basic: 'בסיסי',
		bold: 'מודגש',
		bulletedList: 'תבליטים',
		caption: 'הכנס תיאור',
		center: 'מרכז',
		close: 'סגור',
		codeView: 'הצג קוד',
		default: 'ברירת מחדל',
		deleteColumn: 'מחק עמודה',
		deleteRow: 'מחק שורה',
		dir_ltr: 'משמאל לימין',
		dir_rtl: 'מימין לשמאל',
		edit: 'ערוך',
		fixedColumnWidth: 'קבע רוחב עמודות',
		font: 'גופן',
		fontColor: 'צבע גופן',
		fontSize: 'גודל',
		formats: 'עיצוב',
		fullScreen: 'מסך מלא',
		height: 'גובה',
		horizontalLine: 'קו אופקי',
		horizontalSplit: 'פצל לגובה',
		hr_dashed: 'מקפים',
		hr_dotted: 'נקודות',
		hr_solid: 'קו',
		image: 'תמונה',
		imageGallery: 'גלרית תמונות',
		image_modal_altText: 'תיאור (תגית alt)',
		image_modal_file: 'בחר מקובץ',
		image_modal_title: 'הכנס תמונה',
		image_modal_url: 'כתובת URL תמונה',
		indent: 'הגדל כניסה',
		insertColumnAfter: 'הכנס עמודה אחרי',
		insertColumnBefore: 'הכנס עמודה לפני',
		insertRowAbove: 'הכנס שורה מעל',
		insertRowBelow: 'הכנס שורה מתחת',
		italic: 'נטוי',
		layout: 'Layout',
		left: 'שמאל',
		lineHeight: 'גובה השורה',
		link: 'קישור',
		link_modal_bookmark: 'סמניה',
		link_modal_downloadLinkCheck: 'קישור להורדה',
		link_modal_newWindowCheck: 'פתח בחלון חדש',
		link_modal_text: 'תיאור',
		link_modal_title: 'הכנס קשור',
		link_modal_url: 'כתובת קשור',
		list: 'רשימה',
		math: 'מתמטיקה',
		math_modal_fontSizeLabel: 'גודל גופן',
		math_modal_inputLabel: 'סימנים מתמטים',
		math_modal_previewLabel: 'תצוגה מקדימה',
		math_modal_title: 'נוסחה',
		maxSize: 'גודל מרבי',
		mention: 'הזכר',
		menu_bordered: 'בעל מיתאר',
		menu_code: 'קוד',
		menu_neon: 'זוהר',
		menu_shadow: 'צל',
		menu_spaced: 'מרווח',
		menu_translucent: 'שקוף למחצה',
		mergeCells: 'מזג תאים',
		minSize: 'גודל מזערי',
		mirrorHorizontal: 'הפוך לרוחב',
		mirrorVertical: 'הפוך לגובה',
		numberedList: 'מספור',
		outdent: 'הקטן כניסה',
		paragraphStyle: 'סגנון פסקה',
		preview: 'תצוגה מקדימה',
		print: 'הדפס',
		proportion: 'שמר יחס',
		ratio: 'יחס',
		redo: 'חזור',
		remove: 'הסר',
		removeFormat: 'הסר עיצוב',
		resize100: 'ללא הקטנה',
		resize25: 'הקטן 25%',
		resize50: 'הקטן 50%',
		resize75: 'הקטן 75%',
		resize: 'Resize',
		revert: 'בטל',
		right: 'ימין',
		rotateLeft: 'סובב שמאלה',
		rotateRight: 'סובב ימינה',
		save: 'שמור',
		search: 'חפש',
		showBlocks: 'הצג גושים',
		size: 'גודל',
		splitCells: 'פצל תא',
		strike: 'קו חוצה',
		submitButton: 'שלח',
		subscript: 'עילי',
		superscript: 'תחתי',
		table: 'טבלה',
		tableHeader: 'כותרת טבלה',
		tags: 'תג',
		tag_blockquote: 'ציטוט',
		tag_div: 'רגילה (DIV)',
		tag_h: 'כותרת',
		tag_p: 'פסקה',
		tag_pre: 'קוד',
		template: 'תבנית',
		textStyle: 'סגנון גופן',
		title: 'Title',
		underline: 'קו תחתון',
		undo: 'בטל',
		unlink: 'הסר קישורים',
		verticalSplit: 'פצל לרוחב',
		video: 'חוזי',
		video_modal_file: 'בחר מקובץ',
		video_modal_title: 'הכנס סרטון',
		video_modal_url: 'כתובת הטמעה YouTube/Vimeo',
		width: 'רוחב'
	};

	if (typeof noGlobal === typeof undefined) {
		if (!window.SUNEDITOR_LANG) {
			Object.defineProperty(window, 'SUNEDITOR_LANG', {
				enumerable: true,
				writable: false,
				configurable: false,
				value: {}
			});
		}

		Object.defineProperty(window.SUNEDITOR_LANG, 'he', {
			enumerable: true,
			writable: true,
			configurable: true,
			value: lang
		});
	}

	return lang;
});

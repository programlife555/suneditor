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
		code: 'ua',
		align: 'Вирівнювання',
		alignCenter: 'По центру',
		alignJustify: 'За шириною',
		alignLeft: 'За лівим краєм',
		alignRight: 'За правим краєм',
		audio: 'Аудіо',
		audio_modal_file: 'Виберіть файл',
		audio_modal_title: 'Вставити аудіо',
		audio_modal_url: 'Посилання на аудіо',
		autoSize: 'Авто розмір',
		backgroundColor: 'Колір виділення',
		basic: 'Без обтікання',
		bold: 'Жирний',
		bulletedList: 'Маркований',
		caption: 'Додати підпис',
		center: 'По центру',
		close: 'Закрити',
		codeView: 'Редагувати як HTML',
		default: 'По замовчуванням',
		deleteColumn: 'Видалити стовпець',
		deleteRow: 'Видалити рядок',
		dir_ltr: 'Зліва направо',
		dir_rtl: 'Справа наліво',
		edit: 'Змінити',
		fixedColumnWidth: 'Фіксована ширина стовпця',
		font: 'Шрифт',
		fontColor: 'Колір тексту',
		fontSize: 'Розмір шрифту',
		formats: 'Стиль абзацу',
		fullScreen: 'Повний екран',
		height: 'Висота',
		horizontalLine: 'Горизонтальна лінія',
		horizontalSplit: 'Розділити горизонтально',
		hr_dashed: 'Штрихова',
		hr_dotted: 'Пунктирна',
		hr_solid: 'Суцільна',
		image: 'Зображення',
		imageGallery: 'Галерея',
		image_modal_altText: 'Текстовий опис зображення',
		image_modal_file: 'Виберіть файл',
		image_modal_title: 'Вставити зображення',
		image_modal_url: 'Посилання на зображення',
		indent: 'Збільшити відступ',
		insertColumnAfter: 'Вставити стовпець справа',
		insertColumnBefore: 'Вставити стовпець зліва',
		insertRowAbove: 'Вставити рядок вище',
		insertRowBelow: 'Вставити рядок нижче',
		italic: 'Курсив',
		layout: 'Layout',
		left: 'Зліва',
		lineHeight: 'Висота лінії',
		link: 'Посилання',
		link_modal_bookmark: 'Закладка',
		link_modal_downloadLinkCheck: 'Посилання для завантаження',
		link_modal_newWindowCheck: 'Відкривати в новому вікні',
		link_modal_text: 'Текст',
		link_modal_title: 'Вставити посилання',
		link_modal_url: 'Посилання',
		list: 'Список',
		math: 'Формула',
		math_modal_fontSizeLabel: 'Розмір шрифту',
		math_modal_inputLabel: 'Математична запис',
		math_modal_previewLabel: 'Попередній перегляд',
		math_modal_title: 'Формула',
		maxSize: 'Ширина за розміром сторінки',
		mention: 'Згадати',
		menu_bordered: 'З лініями',
		menu_code: 'Код',
		menu_neon: 'Неон',
		menu_shadow: 'Тінь',
		menu_spaced: 'Інтервал',
		menu_translucent: 'Напівпрозорий',
		mergeCells: "Об'єднати клітинки",
		minSize: 'Ширина за вмістом',
		mirrorHorizontal: 'Відобразити по горизонталі',
		mirrorVertical: 'Відобразити по вертикалі',
		numberedList: 'Нумерований',
		outdent: 'Зменшити відступ',
		paragraphStyle: 'Стиль абзацу',
		preview: 'Попередній перегляд',
		print: 'Друк',
		proportion: 'Зберегти пропорції',
		ratio: 'Співвідношення',
		redo: 'Виконати знову',
		remove: 'Видалити',
		removeFormat: 'Очистити форматування',
		resize100: 'Розмір 100%',
		resize25: 'Розмір 25%',
		resize50: 'Розмір 50%',
		resize75: 'Розмір 75%',
		resize: 'Resize',
		revert: 'Скинути',
		right: 'Справа',
		rotateLeft: 'Повернути проти годинникової стрілки',
		rotateRight: 'Повернути за годинниковою стрілкою',
		save: 'Зберегти',
		search: 'Пошук',
		showBlocks: 'Показати блоки',
		size: 'Розмір',
		splitCells: 'Розділити клітинку',
		strike: 'Перекреслити',
		submitButton: 'Підтвердити',
		subscript: 'Нижній індекс',
		superscript: 'Верхній індекс',
		table: 'Таблиця',
		tableHeader: 'Заголовок таблиці',
		tags: 'Теги',
		tag_blockquote: 'Цитата',
		tag_div: 'Базовий',
		tag_h: 'Заголовок',
		tag_p: 'Абзац',
		tag_pre: 'Код',
		template: 'Шаблон',
		textStyle: 'Стиль тексту',
		title: 'Title',
		underline: 'Підкреслений',
		undo: 'Скасувати',
		unlink: 'Прибрати посилання',
		verticalSplit: 'Розділити вертикально',
		video: 'Відео',
		video_modal_file: 'Виберіть файл',
		video_modal_title: 'Вставити відео',
		video_modal_url: 'Посилання на відео, Youtube, Vimeo',
		width: 'Ширина'
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

		Object.defineProperty(window.SUNEDITOR_LANG, 'ua', {
			enumerable: true,
			writable: true,
			configurable: true,
			value: lang
		});
	}

	return lang;
});

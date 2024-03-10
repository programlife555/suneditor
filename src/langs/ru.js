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
		code: 'ru',
		align: 'Выравнивание',
		alignCenter: 'По центру',
		alignJustify: 'По ширине',
		alignLeft: 'Слева',
		alignRight: 'Справа',
		audio: 'Аудио',
		audio_modal_file: 'Выберите файл',
		audio_modal_title: 'Вставить аудио',
		audio_modal_url: 'Адрес аудио',
		autoSize: 'Авто размер',
		backgroundColor: 'Цвет фона',
		basic: 'Без обтекания',
		bold: 'Полужирный',
		bulletedList: 'Маркированный',
		caption: 'Добавить подпись',
		center: 'По центру',
		close: 'Закрыть',
		codeView: 'Редактировать HTML',
		default: 'По умолчанию',
		deleteColumn: 'Удалить столбец',
		deleteRow: 'Удалить строку',
		dir_ltr: 'Слева направо',
		dir_rtl: 'Справа налево',
		edit: 'Изменить',
		fixedColumnWidth: 'Фиксированная ширина столбца',
		font: 'Шрифт',
		fontColor: 'Цвет текста',
		fontSize: 'Размер шрифта',
		formats: 'Стиль абзаца',
		fullScreen: 'Полный экран',
		height: 'Высота',
		horizontalLine: 'Горизонтальная линия',
		horizontalSplit: 'Разделить горизонтально',
		hr_dashed: 'Штриховая',
		hr_dotted: 'Пунктир',
		hr_solid: 'Сплошная',
		image: 'Изображение',
		imageGallery: 'Галерея',
		image_modal_altText: 'Текстовое описание изображения',
		image_modal_file: 'Выберите файл',
		image_modal_title: 'Вставить изображение',
		image_modal_url: 'Адрес изображения',
		indent: 'Увеличить отступ',
		insertColumnAfter: 'Вставить столбец справа',
		insertColumnBefore: 'Вставить столбец слева',
		insertRowAbove: 'Вставить строку выше',
		insertRowBelow: 'Вставить строку ниже',
		italic: 'Курсив',
		layout: 'Layout',
		left: 'Слева',
		lineHeight: 'Высота линии',
		link: 'Ссылка',
		link_modal_bookmark: 'Закладка',
		link_modal_downloadLinkCheck: 'Ссылка для скачивания',
		link_modal_newWindowCheck: 'Открывать в новом окне',
		link_modal_text: 'Текст',
		link_modal_title: 'Вставить ссылку',
		link_modal_url: 'Ссылка',
		list: 'Списки',
		math: 'математический',
		math_modal_fontSizeLabel: 'Кегль',
		math_modal_inputLabel: 'Математическая запись',
		math_modal_previewLabel: 'Предварительный просмотр',
		math_modal_title: 'математический',
		maxSize: 'Ширина по размеру страницы',
		mention: 'Упоминание',
		menu_bordered: 'Граничная Линия',
		menu_code: 'Код',
		menu_neon: 'неон',
		menu_shadow: 'Тень',
		menu_spaced: 'интервал',
		menu_translucent: 'полупрозрачный',
		mergeCells: 'Объединить ячейки',
		minSize: 'Ширина по содержимому',
		mirrorHorizontal: 'Отразить по горизонтали',
		mirrorVertical: 'Отразить по вертикали',
		numberedList: 'Нумерованный',
		outdent: 'Уменьшить отступ',
		paragraphStyle: 'Стиль абзаца',
		preview: 'Предварительный просмотр',
		print: 'Печать',
		proportion: 'Сохранить пропорции',
		ratio: 'Соотношение',
		redo: 'Вернуть',
		remove: 'Удалить',
		removeFormat: 'Очистить форматирование',
		resize100: 'Размер 100%',
		resize25: 'Размер 25%',
		resize50: 'Размер 50%',
		resize75: 'Размер 75%',
		resize: 'Resize',
		revert: 'Сбросить',
		right: 'Справа',
		rotateLeft: 'Повернуть против часовой стрелки',
		rotateRight: 'Повернуть по часовой стрелке',
		save: 'Сохранить',
		search: 'Поиск',
		showBlocks: 'Блочный вид',
		size: 'Размер',
		splitCells: 'Разделить ячейку',
		strike: 'Зачеркнутый',
		submitButton: 'Подтвердить',
		subscript: 'Нижний индекс',
		superscript: 'Верхний индекс',
		table: 'Таблица',
		tableHeader: 'Строка заголовков',
		tags: 'Теги',
		tag_blockquote: 'Цитата',
		tag_div: 'Базовый',
		tag_h: 'Заголовок',
		tag_p: 'Текст',
		tag_pre: 'Код',
		template: 'Шаблон',
		textStyle: 'Стиль текста',
		title: 'Title',
		underline: 'Подчёркнутый',
		undo: 'Отменить',
		unlink: 'Убрать ссылку',
		verticalSplit: 'Разделить вертикально',
		video: 'Видео',
		video_modal_file: 'Выберите файл',
		video_modal_title: 'Вставить видео',
		video_modal_url: 'Ссылка на видео, Youtube,Vimeo',
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

		Object.defineProperty(window.SUNEDITOR_LANG, 'ru', {
			enumerable: true,
			writable: true,
			configurable: true,
			value: lang
		});
	}

	return lang;
});

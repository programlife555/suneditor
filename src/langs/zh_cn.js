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
		code: 'zh_cn',
		align: '对齐方式',
		alignCenter: '居中',
		alignJustify: '两端对齐',
		alignLeft: '左对齐',
		alignRight: '右对齐',
		audio: '音讯',
		audio_modal_file: '上传图片',
		audio_modal_title: '插入音频',
		audio_modal_url: '音频网址',
		autoSize: 'Auto size',
		backgroundColor: '背景颜色',
		basic: '基本',
		bold: '粗体',
		bulletedList: '无序列表',
		caption: '标题',
		center: '居中',
		close: '取消',
		codeView: '代码视图',
		default: '默认',
		deleteColumn: '删除列',
		deleteRow: '删除行',
		dir_ltr: '左到右',
		dir_rtl: '右到左',
		edit: '编辑',
		fixedColumnWidth: '固定列宽',
		font: '字体',
		fontColor: '字体颜色',
		fontSize: '字号',
		formats: '格式',
		fullScreen: '全屏',
		height: '高度',
		horizontalLine: '水平线',
		horizontalSplit: '水平分割',
		hr_dashed: '虚线',
		hr_dotted: '点线',
		hr_solid: '实线',
		image: '图片',
		imageGallery: '图片库',
		image_modal_altText: '替换文字',
		image_modal_file: '上传图片',
		image_modal_title: '插入图片',
		image_modal_url: '图片网址',
		indent: '增加缩进',
		insertColumnAfter: '在右侧插入',
		insertColumnBefore: '在左侧插入',
		insertRowAbove: '在上方插入',
		insertRowBelow: '在下方插入',
		italic: '斜体',
		layout: 'Layout',
		left: '左',
		lineHeight: '行高',
		link: '超链接',
		link_modal_bookmark: '书签',
		link_modal_downloadLinkCheck: '下载链接',
		link_modal_newWindowCheck: '在新标签页中打开',
		link_modal_text: '要显示的文字',
		link_modal_title: '插入超链接',
		link_modal_url: '网址',
		list: '列表',
		math: '数学',
		math_modal_fontSizeLabel: '字号',
		math_modal_inputLabel: '数学符号',
		math_modal_previewLabel: '预览',
		math_modal_title: '数学',
		maxSize: '最大尺寸',
		mention: '提到',
		menu_bordered: '边界线',
		menu_code: '代码',
		menu_neon: '霓虹灯',
		menu_shadow: '阴影',
		menu_spaced: '间隔开',
		menu_translucent: '半透明',
		mergeCells: '合并单元格',
		minSize: '最小尺寸',
		mirrorHorizontal: '翻转左右',
		mirrorVertical: '翻转上下',
		numberedList: '有序列表',
		outdent: '减少缩进',
		paragraphStyle: '段落样式',
		preview: '预览',
		print: '打印',
		proportion: '比例',
		ratio: '比',
		redo: '恢复',
		remove: '删除',
		removeFormat: '清除格式',
		resize100: '放大 100%',
		resize25: '放大 25%',
		resize50: '放大 50%',
		resize75: '放大 75%',
		resize: 'Resize',
		revert: '恢复',
		right: '右',
		rotateLeft: '向左旋转',
		rotateRight: '向右旋转',
		save: '保存',
		search: '搜索',
		showBlocks: '显示块区域',
		size: '尺寸',
		splitCells: '分割单元格',
		strike: '删除线',
		submitButton: '确定',
		subscript: '下标',
		superscript: '上标',
		table: '表格',
		tableHeader: '表格标题',
		tags: '标签',
		tag_blockquote: '引用',
		tag_div: '正文 (DIV)',
		tag_h: '标题',
		tag_p: '段落',
		tag_pre: '代码',
		template: '模板',
		textStyle: '文字样式',
		title: 'Title',
		underline: '下划线',
		undo: '撤消',
		unlink: '去除链接',
		verticalSplit: '垂直分割',
		video: '视频',
		video_modal_file: '上传图片',
		video_modal_title: '插入视频',
		video_modal_url: '嵌入网址, Youtube,Vimeo',
		width: '宽度'
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

		Object.defineProperty(window.SUNEDITOR_LANG, 'zh_cn', {
			enumerable: true,
			writable: true,
			configurable: true,
			value: lang
		});
	}

	return lang;
});

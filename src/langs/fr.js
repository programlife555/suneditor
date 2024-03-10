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
		code: 'fr',
		align: 'Alignement',
		alignCenter: 'Centré',
		alignJustify: 'Justifié',
		alignLeft: 'À gauche',
		alignRight: 'À droite',
		audio: 'Audio',
		audio_modal_file: 'Sélectionner le fichier',
		audio_modal_title: 'Insérer un fichier audio',
		audio_modal_url: 'Adresse URL du fichier',
		autoSize: 'Taille automatique',
		backgroundColor: 'Couleur en arrière plan',
		basic: 'Basique',
		bold: 'Gras',
		bulletedList: 'Non-ordonnée',
		caption: 'Insérer une description',
		center: 'Centré',
		close: 'Fermer',
		codeView: 'Voir le code',
		default: 'Défaut',
		deleteColumn: 'Effacer la colonne',
		deleteRow: 'Effacer la ligne',
		dir_ltr: 'De gauche à droite',
		dir_rtl: 'De droite à gauche',
		edit: 'Modifier',
		fixedColumnWidth: 'Largeur de colonne fixe',
		font: 'Police',
		fontColor: 'Couleur du texte',
		fontSize: 'Taille',
		formats: 'Formats',
		fullScreen: 'Plein écran',
		height: 'Hauteur',
		horizontalLine: 'Ligne horizontale',
		horizontalSplit: 'Scission horizontale',
		hr_dashed: 'Tirets',
		hr_dotted: 'Points',
		hr_solid: 'Solide',
		image: 'Image',
		imageGallery: "Galerie d'images",
		image_modal_altText: 'Texte Alternatif',
		image_modal_file: 'Sélectionner le fichier',
		image_modal_title: 'Insérer une image',
		image_modal_url: 'Adresse URL du fichier',
		indent: 'Indenter',
		insertColumnAfter: 'Insérer une colonne après',
		insertColumnBefore: 'Insérer une colonne avant',
		insertRowAbove: 'Insérer une ligne en dessous',
		insertRowBelow: 'Insérer une ligne au dessus',
		italic: 'Italique',
		layout: 'Layout',
		left: 'Gauche',
		lineHeight: 'Hauteur de la ligne',
		link: 'Lien',
		link_modal_bookmark: 'Signet',
		link_modal_downloadLinkCheck: 'Lien de téléchargement',
		link_modal_newWindowCheck: 'Ouvrir dans une nouvelle fenêtre',
		link_modal_text: 'Texte à afficher',
		link_modal_title: 'Insérer un lien',
		link_modal_url: 'Adresse URL du lien',
		list: 'Liste',
		math: 'Math',
		math_modal_fontSizeLabel: 'Taille',
		math_modal_inputLabel: 'Notation mathématique',
		math_modal_previewLabel: 'Prévisualiser',
		math_modal_title: 'Math',
		maxSize: 'Taille max',
		mention: 'Mention',
		menu_bordered: 'Ligne de démarcation',
		menu_code: 'Code',
		menu_neon: 'Néon',
		menu_shadow: 'Ombre',
		menu_spaced: 'Espacement',
		menu_translucent: 'Translucide',
		mergeCells: 'Fusionner les cellules',
		minSize: 'Taille min',
		mirrorHorizontal: 'Mirroir, Horizontal',
		mirrorVertical: 'Mirroir, Vertical',
		numberedList: 'Ordonnée',
		outdent: 'Désindenter',
		paragraphStyle: 'Style de paragraphe',
		preview: 'Prévisualiser',
		print: 'Imprimer',
		proportion: 'Maintenir le rapport hauteur/largeur',
		ratio: 'Rapport',
		redo: 'Rétablir',
		remove: 'Effacer',
		removeFormat: 'Effacer le formatage',
		resize100: 'Redimensionner à 100%',
		resize25: 'Redimensionner à 25%',
		resize50: 'Redimensionner à 50%',
		resize75: 'Redimensionner à 75%',
		revert: 'Revenir en arrière',
		right: 'Droite',
		rotateLeft: 'Rotation à gauche',
		rotateRight: 'Rotation à droite',
		save: 'Sauvegarder',
		search: 'Chercher',
		showBlocks: 'Voir les blocs',
		size: 'Taille',
		splitCells: 'Diviser les Cellules',
		strike: 'Barré',
		submitButton: 'Appliquer',
		subscript: 'Indice',
		superscript: 'Exposant',
		table: 'Table',
		tableHeader: 'En-tête de table',
		tags: 'Mots clés',
		tag_blockquote: 'Citation',
		tag_div: 'Normal (DIV)',
		tag_h: 'Titre',
		tag_p: 'Paragraphe',
		tag_pre: 'Code',
		template: 'Template',
		textStyle: 'Style de texte',
		title: 'Title',
		underline: 'Souligné',
		undo: 'Annuler',
		unlink: 'Supprimer un lien',
		verticalSplit: 'Scission verticale',
		video: 'Video',
		video_modal_file: 'Sélectionner le fichier',
		video_modal_title: 'Insérer une vidéo',
		video_modal_url: 'URL d’intégration du média, YouTube/Vimeo',
		width: 'Largeur'
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

		Object.defineProperty(window.SUNEDITOR_LANG, 'fr', {
			enumerable: true,
			writable: true,
			configurable: true,
			value: lang
		});
	}

	return lang;
});

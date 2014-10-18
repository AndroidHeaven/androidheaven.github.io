( function () {
	'use strict';

	var iandroid = {
		
		// Init functions
		init: function() {
			this.FastClick();
			this.Dropzone();
			this.Parallax();
		},
		
		// Initialize FastClick
		FastClick: function() {
			window.addEventListener( 'load', function() {
				FastClick.attach(document.body);
			}, false );
		},
		
		// Initialize Dropzone
		Dropzone: function() {
			new Dropzone(".upload form", { url: 'http://173.250.177.106:3000/upload', method: 'post', acceptedFiles: '.zip', clickable: '.upload svg'});
		},
		
		Parallax: function() {
			// Pretty simple huh?
			var scene = document.getElementById('scene');
			var parallax = new Parallax(scene);
		}
		
	};
	
	iandroid.init();
} )();
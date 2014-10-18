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
			new Dropzone(".upload form", { url: 'https://dubhacks.ngrok.com/upload', clickable: '.upload svg'});
		},
		
		Parallax: function() {
			// Pretty simple huh?
			var scene = document.getElementById('scene');
			var parallax = new Parallax(scene);
		}
		
	};
	
	iandroid.init();
} )();
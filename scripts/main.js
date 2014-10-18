( function () {
	'use strict';

	var iandroid = {
		
		// Init functions
		init: function() {
			this.FastClick();
			this.Dropzone();
		},
		
		// Initialize FastClick
		FastClick: function() {
			window.addEventListener( 'load', function() {
				FastClick.attach(document.body);
			}, false );
		},
		
		// Initialize Dropzone
		Dropzone: function() {
			new Dropzone(".upload", { url: "/file/post"});
		}
		
	};
	
	iandroid.init();
} )();
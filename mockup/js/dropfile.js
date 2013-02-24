(function($){
	function previewImage(file, imgId) {
		var reader = new FileReader();
		reader.onload = function (e) {
			$('#'+imgId).attr('src',e.target.result);
		};
		reader.readAsDataURL(file);
	}
	
	$.fn.dropfile = function(){
		$(this).each( function () {
			$(this).on(
				'dragover',
				function(e) {
					e.preventDefault();
					e.stopPropagation();
				}
			);
			$(this).on(
				'dragenter',
				function(e) {
					e.preventDefault();
					e.stopPropagation();
				}
			);
			$(this).on(
				'drop',
				function(e){
					e.preventDefault();
					previewImage(e.originalEvent.dataTransfer.files[0], $(this).attr('id'));
				}
			);
		});
    };
	
	$.fn.undropfile = function(){
		$(this).each( function () {
			$(this).off('dragover');
			$(this).off('dragenter');
			$(this).off('drop');
		});
    };
})(jQuery)
//cf. detection.js comme préliminaire
if ("onhashchange" in window) {
	function ciabler() {
		var ancre = document.location.hash.match(/(#.*)|(^[^#]*$)/)[0].replace("#",""); //document.location.hash toujours standard ?
		$(".target").removeClass("target");
		$("[id]").each(function() {
			var $t = $(this);
			if ($t.attr("id") == ancre) {
				$t.addClass("target");
				return false;
	}	});	}
	ciabler();
	window.onhashchange = ciabler;
}

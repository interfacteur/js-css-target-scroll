//cf. detection.js comme préliminaire
/* dépend du chargement de jQuery */
if ("onhashchange" in window) {
	var ciabler = function() {
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

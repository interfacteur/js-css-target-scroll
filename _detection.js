	var targetant = (function() { //Détection du support de la pseudo-classe ':target' - réf. http://www.zachleat.com/test/css-target-feature-test/querySelector.html
		if (Object.prototype.toString.call(window.operamini) !== "[object OperaMini]" && "querySelectorAll" in document) {
			try {
				document.querySelectorAll(":target");
				return true;
			} catch(e){}
		}
		return false;
	})();

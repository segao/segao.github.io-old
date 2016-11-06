$(document).ready(function() {
	var $menu = $("#sidebar-wrapper");
	var $ham = $("#hamburger");
	$(document).on("click", ".js-menu-open", function() {
		$menu.addClass("open");
		$ham.fadeOut();
		return false;
	})
	$(document).on("click", ".js-menu-close", function() {
		$menu.removeClass("open");
		$ham.fadeIn();
		return false;
	});
});

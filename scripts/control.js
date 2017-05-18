var currentPage = 0;
var pages = {
	0: "startPage",
	1: "selectPage",
	2: "canvasPage"
}
var selectedSong;



$(document).ready(function() {
	changePage(currentPage);
});

function changePage(pageIndex) {
	var pageName = pages[pageIndex];
	console.log("change page");
	$("#page").load("views/" + pageName + ".html", function() {
		$.getScript("scripts/directives/" + pageName + ".js");
		currentPage = pageIndex;
	});
}
$('.link_wrap  > button').click(function () {
	$('.link_wrap > button').removeClass('active');
	$(this).addClass('active');
});

$(document).ready(function () {
	$(".graph_wrapper").each(function () {
		const percentageText = $(this).find(".per").text().trim();
		const percentage = parseInt(percentageText, 10);

		if (!isNaN(percentage)) {
			$(this).find(".line_graph").css("width", `${percentage}%`);
		}
	});
});
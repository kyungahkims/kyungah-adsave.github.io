/* 버튼 신청 후 효과 */
$('.content_link a').click(function () {
	Swal.fire({
		title: "추후 서비스 예정입니다.",
		icon: "info",
		background: "#fff",
		color: "#222",
		confirmButtonText: "확인",
		customClass: {
			title: 'custom-swal-title',
			popup: 'custom-swal-popup',
			icon: 'custom-swal-icon',
			confirmButton: 'custom-swal-btn',
		}
	});
});

/* 지면 사이즈 선택 */
$('.form_box_wrapper1 .form_box_wrap button').click(function () {
	$('.form_box_wrapper1').find($('.form_box_wrap button')).removeClass('active');
	$(this).addClass('active');
	$('.form_box_wrapper2').css('display', 'flex');

	/* 처음 등록 시 .new 클래스 화면 예시*/
	if ($(this).parents('.form_box_wrapper1').hasClass('new')) {
		$('.form_box_wrapper2 .form_box').css('display', 'none');
		$('.form_box_wrapper2 .form_box_none').css('display', 'flex');
	}
});

$('.form_box_wrapper2 .form_box_wrap button').click(function () {
	$(this).toggleClass('active');
});

/* 최후의 순간 옵션 */
$('input[name="last"]').on('change', function () {
	const selectedId = $(this).attr('id');

	$('.radio_sel1, .radio_sel2').hide().find('select').prop('selectedIndex', 0).end().find('textarea').val('');

	if (selectedId === 'radio10') {
		$('.radio_sel1').css('display', 'flex');
	} else if (selectedId === 'radio11') {
		$('.radio_sel2').css('display', 'flex');
	}
});

/* 광고 선택 순위 이동 */
$(".move_wrap button").click(function () {
	const leftMove = $(this).prevAll(".move").first().text();
	const rightMove = $(this).nextAll(".move").first().text();

	$(this).prevAll(".move").first().text(rightMove);
	$(this).nextAll(".move").first().text(leftMove);
});
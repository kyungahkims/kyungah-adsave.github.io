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
$('.form_box_wrap button').click(function () {
	$('.form_box_wrap button').removeClass('active');
	$(this).addClass('active');
});
/* 사용자 마이페이지 토글 */
$('.user_btn').click(function (e) {
	$('.user_nav').slideToggle('300').addClass('active');
	e.stopPropagation();
});

$('.wrap').click(function () {
	$('.user_nav').slideUp('300').removeClass('active');
});

$('.user_nav').click(function (e) {
	e.stopPropagation();
});

$('.user_nav a').click(function () {
	$('.user_nav').slideUp('300').removeClass('active');
});

/* aside 메뉴 바 */
$(document).ready(function () {
	$('.subs.active2').each(function () {
		$(this).stop().slideDown('300');
	});
});

$('.navi').click(function () {
	$(this).stop().addClass('active');
	$(this).next('.subs').stop().slideToggle('300').addClass('active2');
	$(this).siblings('.active').each(function () {
		$(this).stop().removeClass('active');
	});
	$(this).siblings().next('.active2').each(function () {
		$(this).stop().slideUp('300').removeClass('active2');
	});
});

$(".navi").not(".navi_sub").click(function () {
	$(this).siblings('.subs').find("li").each(function () {
		$(this).removeClass('active3');
	})
});

$('.subs li').click(function () {
	$(this).stop().addClass('active3');
	$(this).siblings('.active3').each(function () {
		$(this).removeClass('active3');
	});
	$(this).parents(".subs").siblings().find('.active3').each(function () {
		$(this).removeClass('active3');
	});

	if ($('.wrapper > aside').hasClass('active')) {
		$('.subs').css('display', 'none');
	}
});

/* 사이드 메뉴 축소 확대 */
$('.aside_btn').click(function () {
	$('aside').toggleClass('active');
});

function onBarClick() {
	if ($(this).find('.navi-bars').hasClass('default')) {
		$(this).find('.navi-bars').removeClass('default').addClass('active');
	} else if ($(this).find('.navi-bars').hasClass('active')) {
		$(this).find('.navi-bars').removeClass('active').addClass('default');
	} else {
		$(this).find('.navi-bars').addClass('active');
	}
}

$('.aside_btn').click(onBarClick);

/* 날짜 선택 라이브러리 */
$('#dateInput').daterangepicker({
	startDate: moment().subtract(6, 'days'),
	endDate: moment(),
	alwaysShowCalendars: true,
	showCustomRangeLabel: false,
	autoApply: true,
	locale: {
		format: 'YYYY-MM-DD',
		daysOfWeek: ['일', '월', '화', '수', '목', '금', '토'],
		monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
	},
	ranges: {
		'오늘': [moment(), moment()],
		'어제': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
		'이번달': [moment().startOf('month'), moment()],
		'전월': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
		'전전월': [moment().subtract(2, 'month').startOf('month'), moment().subtract(2, 'month').endOf('month')],
		'최근 7일': [moment().subtract(7, 'days'), moment().subtract(1, 'days')],
		'최근 30일': [moment().subtract(30, 'days'), moment().subtract(1, 'days')],
		'최근 90일': [moment().subtract(90, 'days'), moment().subtract(1, 'days')],
		'최근 180일': [moment().subtract(180, 'days'), moment().subtract(1, 'days')]
	}
});

/* 테이블 컬럼 설정 */
/* $('.select_box_wrap button').click(function (e) {
	$('.select_box').slideToggle('300').addClass('active');
	e.stopPropagation();
});

$('.wrap').click(function () {
	$('.select_box').slideUp('300').removeClass('active');
});

$('.select_box').click(function (e) {
	e.stopPropagation();
});

$('.select_box li').click(function () {
	$(this).toggleClass('active');
}); */

/* 모달 닫기 */
$('.bt_close').click(function () {
	$('.modal_wrap').css('display', 'none')
});
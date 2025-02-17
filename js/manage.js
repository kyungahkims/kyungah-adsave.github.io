/* 데이터 테이블 */
$(document).ready(function () {
	const table = $("#table").DataTable({
		ajax: {
			url: "../json/paiement.json"
		},
		columns: [{
				data: 'checkbox',
				width: "40px",
				/* 체크박스 */
				"render": function (data, type, row) {
					return `<input type="checkbox" id="checkbox${data}"><label for="checkbox${data}"></label>`
				}
			},
			{
				data: "manage",
				width: "250px",
				'render': function (data) {
					/* 아이콘 1~6 */
					return `<div class="manage_wrap"><button title="ON" class="manage on"></button><button title="메모" class="manage memo"></button><a href="#" title="수정" class="manage modify"></a><a href="#" title="설정" class="manage setting"></a><a href="#" title="리포트" class="manage report"></a><button title="해시태그" class="manage hashtag"></button><a href="#" title="노출설정" class="manage exposure"></a><a href="#" title="마이원페이 연동" class="manage connection"></a></div>`;
				}
			},
			{
				data: "publication",
				width: "60px",
			},
			{
				data: "status",
				width: "60px",
			},
			{
				data: "type",
				width: "100px",
			},
			{
				data: "size",
				width: "100px",
			},
			{
				data: "name",
				width: "250px",
			},
			{
				data: "number",
				width: "80px",
			},
			{
				data: "account",
				width: "80px",
				'render': function (data) {
					/* 폰트 색상 블루 */
					return `<span class="blue">${data}</span>`;
				}
			},
			{
				data: "click",
				width: "80px",
			},
			{
				data: "rates",
				width: "80px",
				'render': function (data) {
					/* 폰트 색상 블루 */
					return `<span class="blue">${data}</span>`;
				}
			}
		],
		"language": {
			"emptyTable": "데이터가 없습니다.",
			"lengthMenu": "_MENU_ 개씩 보기",
			"info": "전체 <span>_TOTAL_</span>건",
			"infoEmpty": "데이터 없음",
			"infoFiltered": "( _MAX_건의 데이터에서 필터링됨 )",
			"search": "",
			"searchPlaceholder": "검색어를 입력하세요.",
			"zeroRecords": "일치하는 데이터가 없습니다.",
			"loadingRecords": "로딩중...",
			"processing": "잠시만 기다려 주세요..."
		},
		paging: false,
		scrollCollapse: true,
		scrollY: '750px',
		scrollX: "100%",
		scrollXInner: "1400px",
		info: false,
		orderCellsTop: true, // 정렬버튼 제일 상단이동
		order: [
			[8, "desc"]
		],
		retrieve: true,
	});

	$('#table_filter').hide();

	/* 컬럼 설정 버튼 복사 버튼, 엑셀 버튼 */
	const buttons = new $.fn.dataTable.Buttons(table, {
		buttons: [{
				extend: 'colvis',
				text: '컬럼 설정',
				columns: ':not(:first-child)',
				className: 'btncolumns',
			},
			{
				extend: 'copyHtml5',
				text: '복사',
				className: 'btncopy',
				action: function (e, dt, node, config) {
					$.fn.dataTable.ext.buttons.copyHtml5.action.call(this, e, dt, node, config);
					dt.buttons.info('', '테이블 데이터가 복사되었습니다.');
					setTimeout(function () {
						$('.dt-button-info').fadeOut();
					}, 1500);
				}
			},
			{
				extend: 'excelHtml5',
				text: '엑셀',
				filename: '일자별 수익금 보고서',
				className: 'btnexcel',
			}
		]
	});

	/* 버튼 위치 조정 */
	table.buttons().container().appendTo('.length_wrap');
	$('.btncopy').insertAfter('.select_box_wrap');
	$('.btncolumns').prependTo('.select_box_wrap');
});

/* 선택한 지면 건수 - 대량 복사 옵션 */
$('input[name="copy"]').on('change', function () {
	const selectedId = $(this).attr('id');

	$('.radio_sel1').css('visibility', 'hidden').find('input').val('');

	if (selectedId === 'copy2') {
		$('.radio_sel1').css('visibility', 'visible');
	}
});

$('.manage_copy').click(function () {
	$(".modal_wrap3").css('display', 'flex');
});

/* 테이블 on, off 버튼 */
$(document).on('click', '.manage.on, .manage.off', function () {
	if ($(this).hasClass('on')) {
		$(this).removeClass('on').addClass('off').attr('title', 'OFF');
	} else {
		$(this).removeClass('off').addClass('on').attr('title', 'ON');
	}
});

/* 테이블 모달 */
$('#table').on('click', '.manage.memo', function () {
	$(".modal_wrap1").css('display', 'flex');
});

$('#table').on('click', '.manage.hashtag', function () {
	$(".modal_wrap2").css('display', 'flex');
});

$('#table').on('click', '.manage.connection', function () {
	$(".modal_wrap4").css('display', 'flex');
});

/* 메모 모달 삭제 버튼 */
$(document).on("click", ".remove_btn", function () {
	Swal.fire({
		title: "삭제하시겠습니까?",
		icon: "warning",
		background: "#fff",
		color: "#222",
		confirmButtonText: "예",
		cancelButtonText: "아니오",
		showCancelButton: true,
		customClass: {
			title: 'custom-swal-title',
			popup: 'custom-swal-popup',
			icon: 'custom-swal-icon',
			confirmButton: 'custom-swal-btn',
		}
	})
});

/* 메모 모달 수정 버튼 */
$(document).on("click", ".modify_btn", function () {
	const memoText = $(this).closest("tr").find("div").text().trim();
	$(this).closest("tr").find("div").replaceWith(`<textarea>${memoText}</textarea>`);
	$(this).parent().html(`
			<button type="button" class="cancle_btn">취소</button>
			<button type="button" class="save_btn">저장</button>
	`);
});

/* 메모 모달 취소 버튼 */
$(document).on("click", ".cancle_btn", function () {
	const cancleText = $(this).closest("tr").find("textarea").text().trim();
	$(this).closest("tr").find("textarea").replaceWith(`<div>${cancleText}</div>`);
	$(this).parent().html(`
			<button type="button" class="modify_btn">수정</button>
			<button type="button" class="remove_btn">삭제</button>
	`);
});

/* 메모 모달 저장 버튼 */
$(document).on("click", ".save_btn", function () {
	const updateText = $(this).closest("tr").find("textarea").val().trim();
	$(this).closest("tr").find("textarea").replaceWith(`<div class="memo-content">${updateText}</div>`);
	$(this).parent().html(`
			<button type="button" class="modify_btn">수정</button>
			<button type="button" class="remove_btn">삭제</button>
	`);
});

/* 이벤트 기간 & 종료일 없음 */
function updateDatepicker() {
	if ($('#modal_checkbox').is(':checked')) {
		$('#dateInput2').daterangepicker({
			singleDatePicker: true,
			alwaysShowCalendars: true,
			showCustomRangeLabel: false,
			autoApply: true,
			locale: {
				format: 'YYYY-MM-DD',
				daysOfWeek: ['일', '월', '화', '수', '목', '금', '토'],
				monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
			}
		});
		$('#dateInput2').css('width', '130px');
	} else {
		$('#dateInput2').daterangepicker({
			/* startDate: moment().subtract(6, 'days'), */
			endDate: moment(),
			alwaysShowCalendars: true,
			showCustomRangeLabel: false,
			autoApply: true,
			locale: {
				format: 'YYYY-MM-DD',
				daysOfWeek: ['일', '월', '화', '수', '목', '금', '토'],
				monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
			},
		});
		$('#dateInput2').css('width', '200px');
	}
}

$('#modal_checkbox').on('change', updateDatepicker);
$(document).ready(updateDatepicker);
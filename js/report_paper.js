/* 데이터 테이블 */
$(document).ready(function () {
	const table = $("#table").DataTable({
		ajax: {
			url: "../json/paper.json"
		},
		columns: [{
				data: 'paper',
				width: "700px",
			},
			{
				data: "request",
				width: "100px",
				'render': function (data) {
					/* 폰트 색상 블루 */
					return `<span class="blue">${data}</span>`;
				}
			},
			{
				data: "account",
				width: "100px",
				'render': function (data) {
					/* 폰트 색상 블루 */
					return `<span class="blue">${data}</span>`;
				}
			},
			{
				data: "available",
				width: "100px",
			},
			{
				data: "scroll",
				width: "100px",
			},
			{
				data: "click",
				width: "100px",
			},
			{
				data: "rates",
				width: "100px",
				'render': function (data) {
					/* 폰트 색상 블루 */
					return `<span class="blue">${data}</span>`;
				}
			},
			{
				data: "averageclick",
				width: "100px",
			},
			{
				data: "exposure",
				width: "100px",
			},
			{
				data: "clicknumber",
				width: "100px",
			},
			{
				data: "clickrate",
				width: "100px",
			},
			{
				data: "profits",
				width: "150px",
				'render': function (data) {
					/* 폰트 색상 레드 */
					return `<span class="red">${data}</span>`;
				}
			},
			{
				data: "exhaustion",
				width: "150px",
			},
			{
				data: "average",
				width: "100px",
			},
			{
				data: "change",
				width: "100px",

			},
			{
				data: "rate",
				width: "100px",
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
		order: [
			[12, "desc"]
		],
		"retrieve": true
	});

	$('#table_filter').hide();

	/* 컬럼 설정 버튼 복사 버튼, 엑셀 버튼 */
	const buttons = new $.fn.dataTable.Buttons(table, {
		buttons: [{
				extend: 'colvis',
				text: '컬럼 설정',
				/* columns: ':not(:last-child)', */
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
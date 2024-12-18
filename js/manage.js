/* 데이터 테이블 */
$(document).ready(function () {
	const table = $("#table").DataTable({
		ajax: {
			url: "../json/paiement.json"
		},
		columns: [{
				data: 'checkbox',
				width: "20px",
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
					return `<div class="manage_wrap"><a href="#" title="ON" class="manage on"></a><a href="#" title="메모" class="manage memo"></a><a href="#" title="수정" class="manage modify"></a><a href="#" title="설정" class="manage setting"></a><a href="#" title="리포트" class="manage report"></a><a href="#" title="해시태그" class="manage hashtag"></a><a href="#" title="노출설정" class="manage exposure"></a></div>`;
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
		info: false,
		order: [
			[8, "desc"]
		],
		"retrieve": true
	});

	$('#table_filter').hide();

	/* 복사 버튼, 엑셀 버튼 */
	const buttons = new $.fn.dataTable.Buttons(table, {
		buttons: [{
				extend: 'copyHtml5',
				text: '복사',
				className: 'btncopy'
			},
			{
				extend: 'excelHtml5',
				text: '엑셀',
				filename: '지면관리',
				footer: true,
				bom: true,
				className: 'btnexcel',
				title: null,
				autoWidth: true,
				customize: function (xlsx) {
					const sheet = xlsx.xl.worksheets['sheet1.xml'];
					$('row c', sheet).each(function () {
						$(this).attr('s', '25');
					});
					$('row:first c', sheet).attr('s', '32');
					const col = $('col', sheet);
					$(col[0]).attr('width', 15);
					$(col[1]).attr('width', 15);
				}
			}
		]
	});

	/* 버튼 위치 조정 */
	table.button().container().appendTo('.length_wrap');
	$('.btncopy').insertAfter('.select_box_wrap');
});
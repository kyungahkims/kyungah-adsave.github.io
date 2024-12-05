/* 컬럼 설정 */
$('.select_box_wrap button').click(function (e) {
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
});

/* 데이터 테이블 */
$(document).ready(function () {
	var table = $("#table").DataTable({
		"dom": '<"top"B>',
		ajax: {
			url: "../json/paiement.json"
		},
		columns: [{
				data: 'checkbox',
				/* 체크박스 */
				"render": function (data, type, row) {
					return `<input type="checkbox" id="checkbox${data}"><label for="checkbox${data}"></label>`
				}
			},
			{
				data: "manage",
				'render': function (data) {
					/* 아이콘 1~6 */
					return `<a href="#" title="ON" class="manage on"></a><a href="#" title="메모" class="manage memo"></a><a href="#" title="수정" class="manage modify"></a><a href="#" title="설정" class="manage setting"></a><a href="#" title="리포트" class="manage report"></a><a href="#" title="해시태그" class="manage hashtag"></a>`;
				}
			},
			{
				data: "publication"
			},
			{
				data: "status"
			},
			{
				data: "type"
			},
			{
				data: "size"
			},
			{
				data: "name"
			},
			{
				data: "number"
			},
			{
				data: "account",
				'render': function (data) {
					/* 폰트 색상 블루 */
					return `<span class="blue">${data}</span>`;
				}
			},
			{
				data: "click"
			},
			{
				data: "rates",
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
		info: false,
		order: [
			[8, "desc"]
		],
		buttons: [{
			/* 엑셀 버튼 */
			extend: 'excelHtml5',
			filename: '지면관리',
			text: '엑셀',
			footer: true,
			bom: true,
			className: 'btnexcel',
			title: null,
			autoWidth: true,
			customize: function (xlsx) {
				var sheet = xlsx.xl.worksheets['sheet1.xml'];
				$('row c', sheet).each(function () {
					$(this).attr('s', '25');
				});
				$('row:first c', sheet).attr('s', '32');
				var col = $('col', sheet);
				$(col[0]).attr('width', 15);
				$(col[1]).attr('width', 15);
			}
		}],
		"retrieve": true
	});

	/* 엑셀 버튼 위치 조정 */
	$('.btnexcel').appendTo('.length_wrap');
});
/* 데이터 테이블 */
$(document).ready(function () {
	const table = $("#table").DataTable({
		ajax: {
			url: "../json/notice.json"
		},
		columns: [{
				data: 'number',
				width: "50px",
			},
			{
				data: "type",
				width: "100px",
			},
			{
				data: "title",
				width: "600px",
				'render': function (data) {
					/* 폰트 색상 블루 */
					return `<span class="title">${data}</span><span class=" file"></span>`;
				}
			},
			{
				data: "date",
				width: "100px",
			},
			{
				data: "view",
				width: "50px",
			}
		],
		
		"language": {
			"emptyTable": "등록 된 게시글이 없습니다.",
			"lengthMenu": `
				<select>
					<option value="15">15개씩 보기</option>
					<option value="30">30개씩 보기</option>
					<option value="50">50개씩 보기</option>
					<option value="100">100개씩 보기</option>
				</select>
			`,
			"info": "총 <span>_TOTAL_개</span>",
			"infoEmpty": "데이터 없음",
			"infoFiltered": "( _MAX_건의 데이터에서 필터링됨 )",
			"search": "",
			"searchPlaceholder": "검색어를 입력하세요.",
			"zeroRecords": "일치하는 데이터가 없습니다.",
			"loadingRecords": "로딩중...",
			"processing": "잠시만 기다려 주세요...",
			"paginate": {
				"first": '<span class="first_btn"></span>',
				"last": '<span class="last_btn"></span>',
				"next": '<span class="next_btn"></span>',
				"previous": '<span class="previous_btn"></span>',
			}
		},
		pagingType: "full_numbers",
		scrollX: "100%",
		scrollXInner: "1400px",
		info: true,
		order: [
			[0, "desc"]
		],
		lengthMenu: ['15개씩 보기', '30개씩 보기', '50개씩 보기', '100개씩 보기'],
		displayLength: 15,
		retrieve: true,
	});

	$('#table_filter').hide();

	/* 버튼 위치 조정 */
	$('.dataTables_length').prependTo('.length_group');
	$('.dataTables_info').prependTo('.length_wrap');
});


/* 파일 */
$(document).on("change", ".file_input", function () {
	$(".filename").html($(this).val());
	$(".design_input").val($(this).val());
	$('.cancle_btn').css('display', 'inline-block');
});

$('.cancle_btn').click(function () {
	$(".filename").html('');
	$(".design_input").val('')
	$('.cancle_btn').css('display', 'none');
});
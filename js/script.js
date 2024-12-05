/* 복사 */
$(".btn-copy").click(function () {
	const valOfDIV = $(".code_textarea").html().replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
	const textArea = $("<textarea></textarea>");
	textArea.val(valOfDIV);
	$("body").append(textArea);
	textArea.select();
	document.execCommand('copy');
	textArea.remove();
	const cnt = $(".copy_alert").length;
	init(cnt);
});

/* 복사 alert */
function init(cnt) {
	const html = `<div class="copy_alert">코드가 복사되었습니다.</div>`;
	document.querySelector(".copy_wrap").insertAdjacentHTML("beforeend", html);
	$(".copy_alert").eq(cnt).addClass("active").stop().animate({
		"margin-bottom": 16 + "px"
	}, 200);
	$(".copy_alert.active").eq(cnt).fadeOut(2000);
}
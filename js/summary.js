/* 10이상인 경우 카운팅 효과 */
$('strong[data-target]').each(function () {
	const $this = $(this);
	const target = +$(this).data('target');

	if (target >= 10) {
		const duration = 300;
		const frames = 60;
		const increment = target / frames;
		let current = 0;

		(function animate() {
			current += increment;
			$this.text(Math.min(Math.floor(current), target).toLocaleString());
			if (current < target) requestAnimationFrame(animate);
		})();
	} else if (target < 10) {
		$this.text(target.toLocaleString());
	}
});
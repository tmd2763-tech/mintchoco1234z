'use strict';
document.querySelectorAll('form').forEach((form) => {
  const result = form.querySelector('[role="status"]');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    result.textContent = '입력 형식을 확인했습니다. 연습용 폼이므로 전송·로그인·검색·예약·구매는 실행하지 않습니다.';
  });
  form.addEventListener('reset', () => { result.textContent = '아직 확인한 입력이 없습니다.'; });
});

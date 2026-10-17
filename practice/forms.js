'use strict';
const form = document.getElementById('book-form');
const result = document.getElementById('form-result');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const total = Number(data.get('price')) * Number(data.get('quantity'));
  result.textContent = `${data.get('book')} · ${data.get('format')} · ${data.get('quantity')}권 · 합계 ${total.toLocaleString('ko-KR')}원 (연습 결과이며 주문되지 않았습니다.)`;
});
form.addEventListener('reset', () => { result.textContent = '아직 확인한 입력이 없습니다.'; });

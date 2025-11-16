// utilitários testáveis (escape + validações)
function escapeHtml(str) {
  return String(str || '').replace(/[&<>"']/g, function (m) {
    return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m];
  });
}

function isValidPhone(phone) {
  if (!phone) return false;
  const phonePattern = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
  return phonePattern.test(phone.trim());
}

function isValidRating(v) {
  const n = Number(v);
  return !Number.isNaN(n) && n >= 0 && n <= 5;
}

module.exports = { escapeHtml, isValidPhone, isValidRating };

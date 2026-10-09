(() => {
  'use strict';
  const navButton = document.querySelector('.menu-button');
  const nav = document.getElementById('main-nav');
  const filters = [...document.querySelectorAll('[data-filter]')];
  const offers = [...document.querySelectorAll('[data-categories]')];
  const dialog = document.getElementById('interest-dialog');
  const form = document.getElementById('lead-form');
  const feedback = document.getElementById('form-feedback');
  const offerSelect = document.getElementById('field-opportunity');
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
  const offerLabels = {
    escola: 'Escola Digital Profissionalizante',
    bolsas: 'Unidade de Bolsas Educacionais',
    academia: 'Universidade Corporativa / Academia Digital Própria',
    vitrine: 'Vitrine Educacional Personalizada',
    saude: 'Licenciamento Comercial de Saúde Digital',
    geral: 'Avaliar meu objetivo / outra parceria'
  };
  if (navButton && nav) {
    navButton.addEventListener('click', () => {
      const expanded = navButton.getAttribute('aria-expanded') === 'true';
      navButton.setAttribute('aria-expanded', String(!expanded));
      navButton.setAttribute('aria-label', expanded ? 'Abrir menu' : 'Fechar menu');
      nav.classList.toggle('open', !expanded);
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open'); navButton.setAttribute('aria-expanded', 'false');
      navButton.setAttribute('aria-label', 'Abrir menu');
    }));
  }
  filters.forEach(button => button.addEventListener('click', () => {
    filters.forEach(item => { const current = item === button; item.classList.toggle('active', current); item.setAttribute('aria-pressed', String(current)); });
    const key = button.dataset.filter;
    offers.forEach(card => { card.hidden = key !== 'todos' && !card.dataset.categories.split(' ').includes(key); });
  }));
  document.querySelectorAll('[data-interest]').forEach(button => button.addEventListener('click', () => {
    if (!dialog) return;
    const label = offerLabels[button.dataset.interest] || offerLabels.geral;
    offerSelect.value = label;
    feedback.textContent = '';
    dialog.showModal();
    document.body.classList.add('dialog-open');
    const firstNameInput = form.elements.namedItem('nome');
    if (firstNameInput) firstNameInput.focus();
  }));
  if (!dialog || !form) return;
  const close = () => { dialog.close(); document.body.classList.remove('dialog-open'); };
  dialog.querySelector('.close-dialog').addEventListener('click', close);
  dialog.addEventListener('cancel', () => { document.body.classList.remove('dialog-open'); });
  dialog.addEventListener('click', event => { if (event.target === dialog) close(); });
  let submitChannel = 'whatsapp';
  form.querySelectorAll('[data-send]').forEach(button => button.addEventListener('click', () => { submitChannel = button.dataset.send; }));
  form.addEventListener('submit', event => {
    event.preventDefault();
    feedback.textContent = '';
    if (!form.checkValidity()) {
      form.reportValidity();
      feedback.textContent = 'Verifique os campos obrigatórios antes de continuar.';
      return;
    }
    const data = new FormData(form);
    const get = key => String(data.get(key) || '').trim();
    const phone = get('whatsapp').replace(/\D/g, '');
    if (phone.length < 10 || phone.length > 13) {
      feedback.textContent = 'Informe um WhatsApp válido com DDD.';
      form.elements.namedItem('whatsapp').focus();
      return;
    }
    const message = [
      'GEB PARCERIAS — INTERESSE COMERCIAL',
      '',
      'Oportunidade: ' + get('oportunidade'),
      'Nome: ' + get('nome'),
      'WhatsApp: ' + get('whatsapp'),
      'E-mail: ' + get('email'),
      'Objetivo: ' + get('objetivo'),
      'Momento: ' + get('momento'),
      ...(get('mensagem') ? ['Mensagem: ' + get('mensagem')] : []),
      '',
      'Origem: gebparcerias.grupoeduardabispo.com.br'
    ].join('\n');
    if (submitChannel === 'email') {
      const subject = 'GEB Parcerias — ' + get('oportunidade');
      window.location.href = 'mailto:parcerias@grupoeduardabispo.com.br?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(message);
      feedback.textContent = 'Seu aplicativo de e-mail foi solicitado. Confira e envie a mensagem para concluir o contato.';
      return;
    }
    const url = 'https://wa.me/551121105473?text=' + encodeURIComponent(message);
    // Navegação direta evita bloqueadores de pop-up; o visitante confirma o envio no WhatsApp.
    window.location.assign(url);
  });
})();
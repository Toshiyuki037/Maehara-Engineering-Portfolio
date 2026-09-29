document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
  heroVideo.muted = true;
  heroVideo.defaultMuted = true;
  heroVideo.playsInline = true;
  const play = () => heroVideo.play().catch(() => {});
  play();
  window.addEventListener('load', play, { once: true });
  document.addEventListener('visibilitychange', () => { if (!document.hidden) play(); });
}


const workRows = [...document.querySelectorAll('.work-index-row')];
const workPreviewImage = document.getElementById('workPreviewImage');
const workPreviewType = document.getElementById('workPreviewType');
const workPreviewTitle = document.getElementById('workPreviewTitle');
const workPreviewDescription = document.getElementById('workPreviewDescription');
const workPreviewMeta = document.getElementById('workPreviewMeta');
const workPreviewDate = document.getElementById('workPreviewDate');

function activateWorkRow(row) {
  if (!row || !workPreviewImage) return;
  workRows.forEach(item => item.classList.remove('is-active'));
  row.classList.add('is-active');

  workPreviewImage.style.opacity = '0';
  window.setTimeout(() => {
    workPreviewImage.src = row.dataset.image;
    workPreviewImage.alt = `${row.dataset.title} preview`;
    workPreviewType.textContent = row.dataset.type || '';
    workPreviewTitle.textContent = row.dataset.title || '';
    workPreviewDescription.textContent = row.dataset.description || '';
    workPreviewMeta.textContent = row.dataset.meta || '';
    workPreviewDate.textContent = row.dataset.date || '';
    workPreviewImage.style.opacity = '1';
  }, 90);
}

workRows.forEach(row => {
  row.addEventListener('mouseenter', () => activateWorkRow(row));
  row.addEventListener('focus', () => activateWorkRow(row));
});




const workPreviewPosition = document.getElementById('workPreviewPosition');

if (typeof activateWorkRow === 'function') {
  const previousActivateWorkRow = activateWorkRow;
  activateWorkRow = function(row) {
    previousActivateWorkRow(row);
    if (workPreviewPosition && row) {
      workPreviewPosition.textContent = row.dataset.position || '';
    }
  };
}

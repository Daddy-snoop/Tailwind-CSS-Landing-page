const navigation = document.querySelector('#navigation');
const menu = document.querySelector('.menu');
const cards = [...document.querySelectorAll('[data-course]')];
const search = document.querySelector('#course-search');
const results = document.querySelector('#results');
const panel = document.querySelector('#panel');
const basket = new Set();

function toggleMenu(open) {
  navigation.classList.toggle('open', open);
  menu.setAttribute('aria-expanded', open);
}
menu.addEventListener('click', () => toggleMenu(!navigation.classList.contains('open')));
navigation.addEventListener('click', () => toggleMenu(false));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    toggleMenu(false);
    menu.focus();
  }
});

function filterCourses(query) {
  let matches = 0;
  for (const card of cards) {
    card.hidden = !card.querySelector('h3').textContent.toLowerCase().includes(query.toLowerCase());
    if (!card.hidden) matches++;
  }
  results.hidden = !query;
  results.textContent = matches ? matches + ' matching course' + (matches === 1 ? '' : 's') : 'No matching courses. Explore courses to see the full list.';
  document.querySelector('#courses').scrollIntoView();
}
document.querySelector('#search-form').addEventListener('submit', event => {
  event.preventDefault();
  filterCourses(search.value.trim());
});
document.querySelector('#explore').addEventListener('click', () => {
  search.value = '';
  filterCourses('');
});

function showPanel(title, message) {
  document.querySelector('#panel-title').textContent = title;
  document.querySelector('#panel-content').textContent = message;
  panel.showModal();
}
for (const button of document.querySelectorAll('[data-add]')) {
  const id = button.dataset.add;
  const title = button.closest('article').querySelector('h3').textContent;
  button.addEventListener('click', () => {
    if (basket.has(id)) basket.delete(id);
    else basket.add(id);
    button.setAttribute('aria-pressed', basket.has(id));
    button.setAttribute('aria-label', basket.has(id) ? 'Remove ' + title + ' from basket' : 'Add ' + title + ' to basket');
    document.querySelector('#count').textContent = basket.size;
  });
}
document.querySelector('#basket').addEventListener('click', () => {
  showPanel('Course basket', basket.size ? '' : 'Your basket is empty.');
  if (!basket.size) return;
  const list = document.createElement('ul');
  for (const card of cards.filter(card => basket.has(card.dataset.course))) {
    const item = document.createElement('li');
    item.textContent = card.querySelector('h3').textContent + ' · Rs.499';
    list.append(item);
  }
  document.querySelector('#panel-content').append(list);
});
for (const button of document.querySelectorAll('.account')) {
  button.addEventListener('click', () => showPanel(button.textContent || 'Account', 'Account access is unavailable in this design preview.'));
}
document.querySelector('#subscribe').addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('#subscribe-status').textContent = 'Design preview only. Your email has not been submitted.';
});
document.querySelector('#video-info').addEventListener('click', () => {
  showPanel('Course introduction', 'This preview includes the course poster. The lesson video has not been supplied.');
});
const reviews = document.querySelector('.reviews');
const reviewCards = [...reviews.children];
reviewCards.forEach((card, index) => card.setAttribute('aria-label', 'Testimonial ' + (index + 1) + ' of 3'));
const reviewStatus = document.createElement('span');
reviewStatus.className = 'sr-only';
reviewStatus.setAttribute('role', 'status');
reviews.after(reviewStatus);
document.querySelectorAll('.review-buttons button').forEach((button, index) => {
  button.addEventListener('click', () => {
    if (index === 0) reviews.prepend(reviews.lastElementChild);
    else reviews.append(reviews.firstElementChild);
    reviewStatus.textContent = reviews.children[1].getAttribute('aria-label');
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
      reviews.children[1].animate([{ opacity: .45 }, { opacity: 1 }], { duration: 250 });
    }
  });
});

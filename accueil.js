

const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const allTabs = document.querySelectorAll('.tab');
    const allContents = document.querySelectorAll('.content');

    allTabs.forEach(tab => tab.classList.remove('tab-active'));
    allContents.forEach(content => content.classList.remove('active'));

    tab.classList.add('tab-active');
    const content = document.querySelector(`.${tab.classList[0]} .content`);
    content.classList.add('active');
  });
});


const darkModeButton = document.querySelector('.darkbutton');

darkModeButton.addEventListener('click', function() {
  const lowback = document.querySelector('.lowback');

  if (!lowback.classList.contains('darkmode')) {
    lowback.classList.add('darkmode');
  } else {
    lowback.classList.remove('darkmode');
  }
});
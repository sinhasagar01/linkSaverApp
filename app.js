const linkCategory = document.querySelector('#linkCategory');
const submitButton = document.querySelector('#submitButton');
const addBtn = document.querySelector('#addBtn');
const cancelBtn = document.querySelector('#cancelButton');
const addLinkPanel = document.querySelector('#addLinkPanel');

let linkCategories = [];
let links = [];

addBtn.addEventListener('click', (event) => {
  console.log('Add button clicked');
  showFormPanel();
});

cancelBtn.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Cancel button clicked');
  hideFormPanel();
});

function showFormPanel() {
  addLinkPanel.classList.remove('hidden');
}
function hideFormPanel() {
  addLinkPanel.classList.add('hidden');
}

linkCategory.addEventListener('keydown', function (event) {
  if (event.keyCode === 188) {
    event.preventDefault();

    linkCategories.push(linkCategory.value);
    console.log(linkCategories);

    linkCategory.value = '';

    // Display the updated Categories (tags)
    displayLinkCategories();
  }
});

function displayLinkCategories() {
  console.log('Diplaying link Categories');
}

submitButton.addEventListener('click', (event) => {
  // stop form from submitting
  event.preventDefault();

  let title = linkTitle.value;
  let url = linkUrl.value;
  let categories = linkCategories;

  const newLink = {
    title: title,
    url: url,
    categories: categories,

    // ES6 syntax for above object key value assinment can be easily done like below

    // title,
    // url,
    // categories
  };

  // push links to array
  links.push(newLink);

  // Empty out the form
  linkTitle.value = '';
  linkUrl.value = '';
  linkCategories = [];

  displayLinkCategories();

  // hide the addLinkPanel form
  hideFormPanel();
});

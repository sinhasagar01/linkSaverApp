const linkCategory = document.querySelector('#linkCategory');
const submitButton = document.querySelector('#submitButton');
const addBtn = document.querySelector('#addBtn');
const cancelBtn = document.querySelector('#cancelButton');
const addLinkPanel = document.querySelector('#addLinkPanel');
let addedCategories = document.querySelector('#addedCategories');

const linksList = document.querySelector('#linksList');

let editIndex = -1;

let linkCategories = [];
let links = [
  {
    title: 'New Link 1',
    url: 'url1.com',
    categories: ['node', 'angular'],
  },
  {
    title: 'New Link 2',
    url: 'url2.com',
    categories: ['js', 'angular'],
  },
  {
    title: 'New Link 3',
    url: 'url3.com',
    categories: ['react', 'angular'],
  },
];

displayLinks();

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
  displayLinkCategories();
}
function hideFormPanel() {
  addLinkPanel.classList.add('hidden');
  clearLinkForm();
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
  addedCategories.innerHTML = '';
  for (let category of linkCategories) {
    let categoryHTMLString = `<span class='category'>${category}</span>`;

    addedCategories.innerHTML += categoryHTMLString;
  }
}

function clearLinkForm() {
  // Empty out the form
  linkTitle.value = '';
  linkUrl.value = '';
  linkCategory.value = '';
  linkCategories = [];
  addedCategories.innerHTML = '';
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
  if (editIndex === -1) {
    // push links to array
    links.unshift(newLink);
  } else {
    links[editIndex] = newLink;
    editIndex = -1;
  }

  displayLinkCategories();

  // hide the addLinkPanel form
  hideFormPanel();
  displayLinks();
});

function displayLinks() {
  linksList.innerHTML = '';

  let index = 0;
  for (let link of links) {
    let linkHTMLString = `
      <div class='link panel'>
        <div class='link-options'>
          <button class='btn-sm' onclick="deleteLink(${index})">Delete</button>
          <button class='btn-sm' onclick="editLink(${index})">Edit</button>
        </div>
        <a href='${link.url}'>
          <h1 class='link-header'>${link.title}</h1>
        </a>
        <p class='link-date'>${Date.now()}</p>

        <div class='categories'>
        `;
    for (let category of link.categories) {
      linkHTMLString += `<span class='category'>${category}</span>`;
    }

    linkHTMLString += `</div></div>`;

    linksList.innerHTML += linkHTMLString;
    index++;
  }
}

function deleteLink(index) {
  links.splice(index, 1);
  displayLinks();
}
function editLink(index) {
  console.log('Editing link at index', index);

  editIndex = index;
  linkTitle.value = links[index].title;
  linkUrl.value = links[index].url;
  linkCategories = links[index].categories;

  showFormPanel();
}

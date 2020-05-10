const linkCategory = document.querySelector('#linkCategory');
const submitButton = document.querySelector('#submitButton');

let linkCategories = [];
let links = [];

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
});

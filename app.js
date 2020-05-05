const linkCategory = document.querySelector('#linkCategory');
const submitButton = document.querySelector('#submitButton');

let linkCategories = [];

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
  const title = linkTitle.value;
  const url = linkUrl.value;
  const categories = linkCategories;

  const newLink = {
    title,
    url,
    categories,
  };
  console.log(newLink);
  event.preventDefault();
});

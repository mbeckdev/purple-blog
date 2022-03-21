import articles from './articles.js';

let dom = {
  articlesContainer: document.getElementById('articles-container'),
};

// Create dom elements and text based on text inside the file articles.js
//   The order is - first in the list appears first on the page.
for (let i = 0; i < articles.length; i++) {
  let newArticle = document.createElement('div');
  newArticle.setAttribute('class', 'article');

  createArticleTitleSection(
    'article__title',
    articles[i].title,
    articles[i].link,
    newArticle
  );

  createArticleSection(
    'article__place-and-date',
    articles[i].placeAndDate,
    newArticle,
    'div'
  );

  createArticleSection(
    'article__description',
    articles[i].description,
    newArticle,
    'div'
  );

  dom.articlesContainer.appendChild(newArticle);
}

function createElementWithClass(type, className, appendTo) {
  let tempDomElement = document.createElement(type);
  tempDomElement.setAttribute('class', className);
  appendTo.appendChild(tempDomElement);
  return tempDomElement;
}

function createArticleSection(className, textToAdd, appendTo, type) {
  let section = createElementWithClass(type, className, appendTo);
  appendTo.appendChild(section);
  let sectionText = document.createTextNode(textToAdd);
  section.appendChild(sectionText);
}

function createArticleTitleSection(className, titleText, titleLink, appendTo) {
  let titleElement = document.createElement('a');
  titleElement.setAttribute('class', className);

  let titleTextElement = document.createTextNode(titleText);
  titleElement.appendChild(titleTextElement);

  titleElement.setAttribute('href', titleLink);
  appendTo.appendChild(titleElement);
}

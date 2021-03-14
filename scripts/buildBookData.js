const fs = require('fs');
const path = require('path');
const { argv } = require('process');
const axios = require('axios');

const projectRoot = path.join(__dirname, "..")
const inputFileName = argv[2];

const getData = async (key) => {
  const cacheFileName = key.replace(/\//g, '_');
  const cacheFilePath = path.join(projectRoot, `.cache/${cacheFileName}.json`);

  let data;
  if (fs.existsSync(cacheFilePath)) {
    data = JSON.parse(fs.readFileSync(cacheFilePath));
  } else {
    const response = await axios.get(`http://openlibrary.org${key}.json`);
    data = response.data;
    fs.writeFileSync(cacheFilePath, JSON.stringify(data));
  }
  return data;
};

const buildCache = async (isbnList) => {
  const booksByIsbn = {};
  const authorsByKey = {};

  for (const isbn of isbnList) {
    const book = await getData(`/isbn/${isbn}`);
    booksByIsbn[isbn] = book;
    const authors = book.authors?.map((author) => ({ [author.key]: null }));
    if (authors?.length) {
      Object.assign(authorsByKey, ...authors);
    }
  }

  for (const authorKey of Object.keys(authorsByKey)) {
    const author = await getData(authorKey);
    authorsByKey[authorKey] = author;
  }

  const bookData = Object.entries(booksByIsbn).map(([isbn, book]) => ({
    isbn,
    title: book.title,
    description: book.description ?? '',
    authors: book.authors?.map(({ key }) => authorsByKey[key].name) ?? []
  }));

  fs.writeFileSync(path.join(projectRoot, `data/data.json`), JSON.stringify(bookData, null, 2));
}

const { isbnList } = JSON.parse(fs.readFileSync(path.join(projectRoot, `${inputFileName}`)));
if (!isbnList.length) {
  throw new Error('Invalid or empty input list');
}
buildCache(isbnList);

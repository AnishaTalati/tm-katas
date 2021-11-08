const countWords = (string) => {
  let wordCount = string.split(' ');
  return wordCount.length;
};

module.exports = {countWords};

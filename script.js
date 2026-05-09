function translate(text){
  const langPair = "en|uk"; 
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${langPair}`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    data.responseData.translatedText
  })
  .catch(error => console.error("Помилка:", error));
}
//weather API and code below//


//meme portion + API code below//

const img = document.querySelector('img');

async function getMemes() {
  const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=xyF0rbnaqlJwPW2DrEeS6ygoQ8nZ3fQF&s=memes', {mode: 'cors'});
  const catData = await response.json();
  img.src = catData.data.images.original.url;
}
getMemes();
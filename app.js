
const container = document.querySelector(".container");

window.addEventListener('load', async e => {
    await fetchTrending();

    if ('serviceWorker' in navigator) {
        try {
            navigator.serviceWorker.register('serviceWorker.js');
            console.log('SW registered');

        } catch (error) {
            console.log('SW failed');

        }
    }
});

async function fetchTrending() {
    const apiKey="NskXLT7HuY0UtXNtPeNfSLcWmHrxX3CA";
    //const res = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25`);
    const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=christmas&limit=50`);
    
    const json = await res.json();
    console.log(json);

    container.innerHTML = json.data.map(json => {
       
        let card=(
            
        '<div class="card">'
            +'<div class="card-image">'
            +'<figure class="image is-4by3">'
                +'<img src='+json.images.downsized.url+' alt="Placeholder image">'
                +'</figure>'
            +'</div>'
        +'</div>');
    return card ;

    }).join('\n');
}


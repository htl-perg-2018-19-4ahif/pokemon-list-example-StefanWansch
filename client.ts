if (window.location.href.indexOf("id") == -1) {

    (async function () {

        const pokelist = await $.get('https://pokeapi.co/api/v2/pokemon/');

        let html = '';
        let counter = 1;
        for (const pokemon of pokelist.results) {
            html += `<li>${pokemon.name}</li>`;
            html += `<button onclick="location.href='details.html?id=${counter}/'">Details</button>`;
            counter++;
        }

        $('#pokemon')[0].innerHTML = html;

    })();
} else {
    (async function () {
        
        let PokeID = window.location.search.split("=")[1];
        let pokemon = await $.get('https://pokeapi.co/api/v2/pokemon/' + PokeID);
        $('.name')[0].innerHTML = `Name: ${pokemon.name}`;
        $('.bild')[0].innerHTML = `<img src="${pokemon.sprites.front_default}"></img>`;
        $('.gewicht')[0].innerHTML = `Gewicht: ${pokemon.weight}`;
        let abilities = "<ul>";
        for (const ability of pokemon.abilities) {
            abilities += `<li>${ability.ability.name}</li>`
        }
        abilities += "</ul>";
        $('.abilities')[0].innerHTML = abilities;
        //document.cookie = `name=${pokemon.name};img=${pokemon.sprites.front_default};weight=${pokemon.weight};expires=23456789`;

    })();
}

    
    
    


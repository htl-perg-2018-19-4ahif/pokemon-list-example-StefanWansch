"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
if (window.location.href.indexOf("id") == -1) {
    (function () {
        return __awaiter(this, void 0, void 0, function* () {
            const pokelist = yield $.get('https://pokeapi.co/api/v2/pokemon/');
            let html = '';
            let counter = 1;
            for (const pokemon of pokelist.results) {
                html += `<li>${pokemon.name}</li>`;
                html += `<button onclick="location.href='details.html?id=${counter}/'">Details</button>`;
                counter++;
            }
            $('#pokemon')[0].innerHTML = html;
        });
    })();
}
else {
    (function () {
        return __awaiter(this, void 0, void 0, function* () {
            let PokeID = window.location.search.split("=")[1];
            let pokemon = yield $.get('https://pokeapi.co/api/v2/pokemon/' + PokeID);
            $('.name')[0].innerHTML = `Name: ${pokemon.name}`;
            $('.bild')[0].innerHTML = `<img src="${pokemon.sprites.front_default}"></img>`;
            $('.gewicht')[0].innerHTML = `Gewicht: ${pokemon.weight}`;
            let abilities = "<ul>";
            for (const ability of pokemon.abilities) {
                abilities += `<li>${ability.ability.name}</li>`;
            }
            abilities += "</ul>";
            $('.abilities')[0].innerHTML = abilities;
            //document.cookie = `name=${pokemon.name};img=${pokemon.sprites.front_default};weight=${pokemon.weight};expires=23456789`;
        });
    })();
}

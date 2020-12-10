let beasts = {
    "array": [{
            "name": "Dragon",
            "img": "assets/img/TESL_Blood_Dragon-rev2_art.jpg",
            "infos": "Lorem ipsum dolor sit amet consectetur blablablablablablablablablabla",
            "alt": "un dragon utilisant la voix pour cracher du feu",
            "file": "dragon",
        },
        {
            "name": "Dremora",
            "img": "assets/img/TESL-Dremora_Markynaz.jpg",
            "infos": "Lorem ipsum dolor sit amet consectetur blablablablablablablablablabla",
            "alt": "Un groupe de Dremora",
            "file": "dremora"
        },
        {
            "name": "Dremora",
            "img": "assets/img/TESL-Dremora_Markynaz.jpg",
            "infos": "Lorem ipsum dolor sit amet consectetur blablablablablablablablablabla",
            "alt": "Un groupe de Dremora",
            "file": "dremora"
        },
        {
            "name": "Dremora",
            "img": "assets/img/TESL-Dremora_Markynaz.jpg",
            "infos": "Lorem ipsum dolor sit amet consectetur blablablablablablablablablabla",
            "alt": "Un groupe de Dremora",
            "file": "dremora"
        },
        {
            "name": "Dremora",
            "img": "assets/img/TESL-Dremora_Markynaz.jpg",
            "infos": "Lorem ipsum dolor sit amet consectetur blablablablablablablablablabla",
            "alt": "Un groupe de Dremora",
            "file": "dremora"
        },
        {
            "name": "Dremora",
            "img": "assets/img/TESL-Dremora_Markynaz.jpg",
            "infos": "Lorem ipsum dolor sit amet consectetur blablablablablablablablablabla",
            "alt": "Un groupe de Dremora",
            "file": "dremora"
        },
        {
            "name": "Dremora",
            "img": "assets/img/TESL-Dremora_Markynaz.jpg",
            "infos": "Lorem ipsum dolor sit amet consectetur blablablablablablablablablabla",
            "alt": "Un groupe de Dremora",
            "file": "dremora"
        },
    ]
}

function loadBestiary() {
    let beastiary = beasts.array
    for (let i = 0; i < beastiary.length; i++) {
        $('.cards').append(
            '<div class="card">' +
            '<div class="card-image card-img">' +
            '<img class="card-img" src="' + beastiary[i].img + '" alt="' + beastiary[i].alt + '"/> ' +
            '</div>' +
            '<div class="card-content">' +
            '<span class="card-title grey-text text-darken-4">' + beastiary[i].name + '</span>' +
            '<p><a href="' + beastiary[i].file + '.html ">En savoir plus</a></p>' +
            '</div>' +
            '</div>');

    }
}

loadBestiary();
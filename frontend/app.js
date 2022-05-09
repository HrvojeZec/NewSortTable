//"use strict";


// AJAX pozivi (moderni funkcija: fetch) // GET, POST, DELETE, PATCH, PUT
// Node.js + Express.js (web framework za Node.js)

fetch('http://localhost:3000/clubs', {
    method: 'GET',
    mode: 'no-cors',
    headers: {
        'Content-type': 'application/json'
    }
})
    .then(res => {
        if (res.ok) {
            console.log('success');

        } else {
            console.log('not successful');
        }

        return res.json();

    })
    .then(data => {
        $("#search-input").on("keyup", function () {
            let value = $(this).val();

            let newData = searchTable(value, data)
            buildTable(newData);
        })

        function searchTable(value, data) {
            var filteredData = [];
            for (var i = 0; i < data.length; i++) {
                value = value.toLowerCase();
                var name = data[i].name.toLowerCase()
                if (name.includes(value)) {
                    filteredData.push(data[i])
                }
            }

            return filteredData;
        }
        $("th").on("click", function () {
            const columnName = $(this).data("column");
            const sortOrder = $(this).data("order");
            const iconContainer = $(this).find("span");

            const clubsClone = data.slice();

            $("th").each((index, tableHeader) => {
                $(tableHeader).find("span").html("");
            });

            if (sortOrder == "desc") {
                $(this).data("order", "asc");
                clubsClone.sort((club1, club2) => club1[columnName] > club2[columnName] ? 1 : -1);
                iconContainer.html('<i class="bi-arrow-up"></i>');
            } else {
                $(this).data("order", "desc");
                clubsClone.sort((a, b) => a[columnName] < b[columnName] ? 1 : -1);
                iconContainer.html('<i class="bi-arrow-down"></i>');
            }

            buildTable(clubsClone);
        });

        const buildTable = (data) => {
            const tableContent = document.getElementById("myTable");

            const rows = [];

            for (let i = 0; i < data.length; i++) {
                const tableRow = document.createElement('tr');
                const rowData = data[i];
                const row = `<tr>
                                <td>${data[i].position}.</td>
                                <td><img src="${rowData.image}" width="24"> ${data[i].name}</td>
                                <td>${data[i].played}</td>
                                <td>${data[i].won}</td>
                                <td>${data[i].drawn}</td>
                                <td>${data[i].lose}</td>
                                <td>${data[i].gd}</td>
                                <td>${data[i].points} </td >
                            </tr > `;
                rows.push(row);
            }

            tableContent.innerHTML = rows.join('');
        }

        buildTable(data);

    })
    .catch(error => console.log(error))


//cors

// Baza (Firebase)
/*var clubs = [
    { "position": 1, "image": "./images/Manchester_City_FC.png", "name": "Manchester City", "played": 29, "won": 22, "drawn": 4, "lose": 3, "gd": 50 },
    { "position": 2, "image": "./images/Liverpool_FC.png", "name": "Liverpool", "played": 29, "won": 21, "drawn": 6, "lose": 2, "gd": 55 },
    { "position": 3, "image": "./images/Chelsea_FC.png", "name": "Chelsea", "played": 28, "won": 17, "drawn": 8, "lose": 3, "gd": 38 },
    { "position": 4, "image": "./images/Arsenal_FC.png", "name": "Arsenal", "played": 28, "won": 17, "drawn": 3, "lose": 8, "gd": 13, },
    { "position": 5, "image": "./images/Tottenham_hotspur.png", "name": "Tottenham Hotspur", "played": 29, "won": 16, "drawn": 3, "lose": 10, "gd": 11, },
    { "position": 6, "image": "./images/Manchester_United_FC.png", "name": "Manchester United", "played": 29, "won": 14, "drawn": 8, "lose": 7, "gd": 8, },
    { "position": 7, "image": "./images/West_Ham_United_FC.png", "name": "West Ham United", "played": 30, "won": 14, "drawn": 6, "lose": 10, "gd": 10, },
    { "position": 8, "image": "./images/wolverhampton.png", "name": "Wolverhampton Wanderers", "played": 30, "won": 14, "drawn": 4, "lose": 12, "gd": 5, },
    { "position": 9, "image": "./images/Aston_villa_FC.svg.png", "name": "Aston Villa", "played": 29, "won": 11, "drawn": 3, "lose": 15, "gd": 1, },
    { "position": 10, "image": "./images/Leicester_City_crest.png", "name": "Leicster City", "played": 27, "won": 10, "drawn": 6, "lose": 11, "gd": -4, },
    { "position": 11, "image": "./images/southampton.png", "name": "Southampton", "played": 29, "won": 8, "drawn": 11, "lose": 10, "gd": -9, },
    { "position": 12, "image": "./images/Crystal_palace_FC.png", "name": "Crystal Palace", "played": 29, "won": 7, "drawn": 13, "lose": 9, "gd": 1, },
    { "position": 13, "image": "./images/brighton.png", "name": "Brighton and Hove Albion", "played": 29, "won": 7, "drawn": 12, "lose": 10, "gd": -10, },
    { "position": 14, "image": "./images/Newcastle_United.png", "name": "Newcastle United", "played": 29, "won": 7, "drawn": 10, "lose": 12, "gd": -17, },
    { "position": 15, "image": "./images/Brentford_FC.png", "name": "Brentford", "played": 30, "won": 8, "drawn": 6, "lose": 16, "gd": -14, },
    { "position": 16, "image": "./images/Leeds.png", "name": "Leeds United", "played": 30, "won": 7, "drawn": 8, "lose": 15, "gd": -33, },
    { "position": 17, "image": "./images/everton.png", "name": "Everton", "played": 27, "won": 7, "drawn": 4, "lose": 16, "gd": -18, },
    { "position": 18, "image": "./images/Watford.png", "name": "Watford", "played": 29, "won": 6, "drawn": 4, "lose": 19, "gd": -26, },
    { "position": 19, "image": "./images/Burnley.png", "name": "Burnley", "played": 27, "won": 3, "drawn": 12, "lose": 12, "gd": -16, },
    { "position": 20, "image": "./images/Norwich_City.png", "name": "Norwich City", "played": 29, "won": 4, "drawn": 5, "lose": 20, "gd": -45, },
];

clubs.forEach((club) => club.points = club.won * 3 + club.drawn);*/
/* 
$(document).ready(function () {
    $("th").on("click", function () {
        const columnName = $(this).data("column");
        const sortOrder = $(this).data("order");
        const iconContainer = $(this).find("span");

        const clubsClone = clubs.slice();

        $("th").each((index, tableHeader) => {
            $(tableHeader).find("span").html("");
        });

        if (sortOrder == "desc") {
            $(this).data("order", "asc");
            clubsClone.sort((club1, club2) => club1[columnName] > club2[columnName] ? 1 : -1);
            iconContainer.html('<i class="bi-arrow-up"></i>');
        } else {
            $(this).data("order", "desc");
            clubsClone.sort((a, b) => a[columnName] < b[columnName] ? 1 : -1);
            iconContainer.html('<i class="bi-arrow-down"></i>');
        }

        buildTable(clubsClone);
    });

    const buildTable = (data) => {
        const tableContent = document.getElementById("myTable");

        const rows = [];

        for (let i = 0; i < data.length; i++) {
            const tableRow = document.createElement('tr');
            const rowData = data[i];
            const row = `<tr>
                            <td>${data[i].position}.</td>
                            <td><img src="${rowData.image}" width="24"> ${data[i].name}</td>
                            <td>${data[i].played}</td>
                            <td>${data[i].won}</td>
                            <td>${data[i].drawn}</td>
                            <td>${data[i].lose}</td>
                            <td>${data[i].gd}</td>
                            <td>${data[i].points} </td >
                        </tr > `;
            rows.push(row);
        }

        tableContent.innerHTML = rows.join('');
    }

    buildTable(clubs);
}); */

/*async function f() {
    return Promise.reject("ovo je errr");
}

//console.log('prije');
//f().then(value => console.log('rezultat = ' + value)).catch(err => console.log(err));
//console.log('poslije');

async function cekaj() {
    console.log('prije2');
    let rezultat = '';
    try {
        rezultat = await f();
    } catch (err) {
        console.error(err);
    }
    console.log('rezultat = ', rezultat);
    console.log('poslije2');
}

cekaj();


// read our JSON
let response = fetch('/article/promise-chaining/user.json');
let user = await response.json();

// read github user
let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
let githubUser = await githubResponse.json();

AudioBufferSourceNode
fetch1().then(response => {
    response.json().then(jsontxt => {
        fetch2(jsontext.bla).then()
    }
 asd)
*/
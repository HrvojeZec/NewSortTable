// In-memory databse

//import a from 'bla';

const Globalclubs = [
    { "position": 1, "image": "../images/Manchester_City_FC.png", "name": "Manchester City", "played": 29, "won": 22, "drawn": 4, "lose": 3, "gd": 50 },
    { "position": 2, "image": "../images/Liverpool_FC.png", "name": "Liverpool", "played": 29, "won": 21, "drawn": 6, "lose": 2, "gd": 55 },
    { "position": 3, "image": "../images/Chelsea_FC.png", "name": "Chelsea", "played": 28, "won": 17, "drawn": 8, "lose": 3, "gd": 38 },
    { "position": 4, "image": "../images/Arsenal_FC.png", "name": "Arsenal", "played": 28, "won": 17, "drawn": 3, "lose": 8, "gd": 13, },
    { "position": 5, "image": "../images/Tottenham_hotspur.png", "name": "Tottenham Hotspur", "played": 29, "won": 16, "drawn": 3, "lose": 10, "gd": 11, },
    { "position": 6, "image": "../images/Manchester_United_FC.png", "name": "Manchester United", "played": 29, "won": 14, "drawn": 8, "lose": 7, "gd": 8, },
    { "position": 7, "image": "../images/West_Ham_United_FC.png", "name": "West Ham United", "played": 30, "won": 14, "drawn": 6, "lose": 10, "gd": 10, },
    { "position": 8, "image": "../images/wolverhampton.png", "name": "Wolverhampton Wanderers", "played": 30, "won": 14, "drawn": 4, "lose": 12, "gd": 5, },
    { "position": 9, "image": "../images/Aston_villa_FC.svg.png", "name": "Aston Villa", "played": 29, "won": 11, "drawn": 3, "lose": 15, "gd": 1, },
    { "position": 10, "image": "../images/Leicester_City_crest.png", "name": "Leicster City", "played": 27, "won": 10, "drawn": 6, "lose": 11, "gd": -4, },
    { "position": 11, "image": "../images/southampton.png", "name": "Southampton", "played": 29, "won": 8, "drawn": 11, "lose": 10, "gd": -9, },
    { "position": 12, "image": "../images/Crystal_palace_FC.png", "name": "Crystal Palace", "played": 29, "won": 7, "drawn": 13, "lose": 9, "gd": 1, },
    { "position": 13, "image": "../images/brighton.png", "name": "Brighton and Hove Albion", "played": 29, "won": 7, "drawn": 12, "lose": 10, "gd": -10, },
    { "position": 14, "image": "../images/Newcastle_United.png", "name": "Newcastle United", "played": 29, "won": 7, "drawn": 10, "lose": 12, "gd": -17, },
    { "position": 15, "image": "../images/Brentford_FC.png", "name": "Brentford", "played": 30, "won": 8, "drawn": 6, "lose": 16, "gd": -14, },
    { "position": 16, "image": "../images/Leeds.png", "name": "Leeds United", "played": 30, "won": 7, "drawn": 8, "lose": 15, "gd": -33, },
    { "position": 17, "image": "../images/everton.png", "name": "Everton", "played": 27, "won": 7, "drawn": 4, "lose": 16, "gd": -18, },
    { "position": 18, "image": "../images/Watford.png", "name": "Watford", "played": 29, "won": 6, "drawn": 4, "lose": 19, "gd": -26, },
    { "position": 19, "image": "../images/Burnley.png", "name": "Burnley", "played": 27, "won": 3, "drawn": 12, "lose": 12, "gd": -16, },
    { "position": 20, "image": "../images/Norwich_City.png", "name": "Norwich City", "played": 29, "won": 4, "drawn": 5, "lose": 20, "gd": -45, },
];

var sum = 0;
Globalclubs.forEach((a) => { sum = a.won * 3 + a.drawn; a.points = sum; });
//clubs.forEach((club) => club.points = club.won * 3 + club.drawn);
module.exports = { Globalclubs };

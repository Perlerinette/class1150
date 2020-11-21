/*
OBJETCS
*/

let netflix = {
    id: 9,
    likes: 932,
    name: "The Good Place",
    seasonInfo: {
        season1: {
            numberOfEpisodes: 5,
            episodeInfo: [{
                episode: 1,
                episodeName: "Pilot"
            }, {
                episode: 2,
                episodeName: "Flying"
            }, {
                episode: 3,
                episodeName: "Tahani Al-Jamil"
            }, {
                episode: 4,
                episodeName: "Jason Mendoza"
            }, {
                episode: 5,
                episodeName: "Category 55 Emergency Doomsday Crisis"
            }]
        },
        season2: {
            numberOfEpisodes: 6,
            episodeInfo: [{
                episode: 1,
                episodeName: "Everything is Great!"
            }, {
                episode: 2,
                episodeName: "Dance Dance Resolution"
            }, {
                episode: 3,
                episodeName: "Team Cockroach"
            }, {
                episode: 4,
                episodeName: "Existential Crisis"
            }, {
                episode: 5,
                episodeName: "The Trolley Problem"
            }, {
                episode: 6,
                episodeName: "Janet and Michael"
            }]
        },
        season3: {
            numberOfEpisodes: 5,
            episodeInfo: [{
                episode: 1,
                episodeName: "Everything Is Bonzer!"
            }, {
                episode: 2,
                episodeName: "The Brainy Bunch"
            }, {
                episode: 3,
                episodeName: "The Snowplow"
            }, {
                episode: 4,
                episodeName: "Jeremy Bearimy"
            }, {
                episode: 5,
                episodeName: "The Ballad of Donkey Doug"
            }]
        }
    },
    description: "Four people and their otherworldly frienemy struggle in the afterlife to define what it means to be good."
};

console.log(netflix);
console.log(netflix.seasonInfo);
console.log(netflix.seasonInfo.season1.episodeInfo[1].episodeName);


// let myFavoriteMovie = {
//     nameOfMovie:'The Notebook',
//     runTime: 120,
//     characters: [ {
//             name:'Allie' ,
//             age:20 , 
//             items: ['dog', 'house']} , 
//         {
//           name: 'Noah', 
//           age:22 , 
//           items: ['wood', 'letter']}
//         ],
//     genre: 'drama'
//   }
  
// console.log(myFavoriteMovie.nameOfMovie);
// console.log(myFavoriteMovie.runTime);
// console.log(myFavoriteMovie.characters);
// console.log(myFavoriteMovie.characters[0].name);
// console.log(myFavoriteMovie.characters[0].items[1]);


// JSON -> JavaScript Object Notation
// has built-in notation, takes string and builds object notation

var json = {
    "workbench.colorTheme": "One Dark+ (Sublime)",
    "window.zoomLevel": 3,
    "files.exclude": {
        "**/.git": true,
        "**/.DS_Store": true,
        "**/*.js": {
            "when": "$(basename).ts"
        },
        "**/*.js.map": {
            "when": "$(basename)"
        }
    },
    "editor.fontFamily": "Monaco, 'Courier New', monospace",
    "editor.detectIndentation": false,
    "editor.letterSpacing": 0,
    "editor.tabSize": 2,
    "files.autoSave": "off",
    "editor.wordWrap": "on",
    "extensions.ignoreRecommendations": true,
    "[html]": {},
    "files.associations": {
        "*.html": "html",
        "*.js": "javascriptreact"
    },
    "html.format.indentInnerHtml": true,
    "editor.fontSize": 11,
    "liveServer.settings.donotShowInfoMsg": true,
    "liveServer.settings.port": 3500,
    "[javascriptreact]": {}
}
// json.parse()


let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

// build-in method common to all object Object.keys
// it returns an array consisting of the keys of our object
console.log(Object.keys(spaceJam)); // we got a data type array
console.log(Object.keys(spaceJam.toonSquad));

// toString() converts a lot of types into a string
console.log(Object.keys(spaceJam.toonSquad).toString()); // transforms the array into a string

console.log(Object.values(spaceJam)); // gives an array back of the values of our object

let garden = {
    vegetable: 'zucchini',
    flower: 'sunflower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}

console.log(garden.vegetable);

let inc = 'fruit';

console.log(garden[inc]);

let baking = {};
baking['zucchini'] = 'better make some bread!';
baking.bestKeyEver = 'zucchini';

console.log(baking.zucchini);
console.log(baking.bestKeyEver);
console.log(baking[baking.bestKeyEver]);

let g = 'water';
Object.keys(garden).forEach(key => {
    if (key == g){
        console.log(garden[key]);
    }
})
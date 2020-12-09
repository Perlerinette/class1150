

let groupData = [
    
    {
        name: "Laurine",
        age: 36,
        graduatedHSYear: 2002,
        pets: true,
        petsNames: ["Maggie"],
        mostRecentMovie:"The Impossible",
        car: [{make:"Dodge", model: "miniVan"}],
        favoritePotato:"roasted"
    },
    {
        name: "Bonnie",
        age: 71,
        graduatedHSYear: 2002,
        pets: true,
        petsNames: "Maggie",
        mostRecentMovie:"Downtown Abbey",
        car:  [
            {
                make:"Ford",
                model: "Focus"
            }
        ],
        favoritePotato:"roasted"

    },
    {
        name: "Bob",
        age: 36,
        graduatedHSYear: 2002,
        pets: true,
        petsNames: "Maggie",
        mostRecentMovie:"The Impossible",
        car:  [
            {
                make:"Opel",
                model: "corsa"
            }
        ],
        favoritePotato:"roasted"

    },
    {
        name: "Aaron",
        age: 36,
        graduatedHSYear: 2002,
        pets: true,
        petsNames: "Maggie",
        mostRecentMovie:"Dolly Parton",
        car:  [
            {
                make:"Dodge",
                model: "miniVan"
            }
        ],
        favoritePotato:"roasted"

    }


];

var moviesWatched = [];
var carModels = [];

// for (student of groupData){
//     moviesWatched.push(student.mostRecentMovie);
// }
// console.log(moviesWatched);

// groupData.forEach((student) => {
//     moviesWatched.push(student.mostRecentMovie);
// });
// console.log(moviesWatched);

for (student of groupData){

    carModels.push(student.car[0].model);
}
console.log(carModels);

// for (i = 0 ; i< groupData.length; i++){
//     moviesWatched.push(groupData[i].mostRecentMovie);
// }
// console.log(moviesWatched);
console.log('***** Music Collection *****')

let collection = [];
function addToCollection (title, artist, yearPublished){
    const music = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(music);
    return music;
}

console.log(addToCollection('Album1', 'Artist1', 2001));
console.log(addToCollection('Album2', 'Artist2', 2002));
console.log(addToCollection('Album3', 'Artist3', 2003));
console.log(addToCollection('Album4', 'Artist4', 2004));
console.log(addToCollection('Album5', 'Artist5', 2005));
console.log(addToCollection('Album6', 'Artist6', 2006));

console.log(collection);

globalA = 'hello'

let a = 7
const b = 'str'
var c = 9;

console.log(a)
console.log(typeof a)

a = 'str 9';

console.log(a)
console.log(typeof a)

console.log("5" - 2)
console.log(Number("5") + 2)

const price = "7.99"
const commision = 1.00

const actualPrice = Number(price) + commision
console.log(actualPrice)

console.log(Boolean(null) == Boolean(undefined))

console.log('=========')
// Boolean
console.log(Boolean(''))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(0)) // false
console.log(Boolean('0')) // true

console.log('=========')
console.log(null === undefined) // false

console.log('=========')
console.log("0" == 0)
console.log("0" === 0) // false

console.log('=========')
console.log(!"str") // false
console.log(!!"str") // true

console.log('=========')
console.log(Boolean("")) // false
console.log(!!"") // false

const MUSIC_GENRES = {
    RNB: 'RnB',
    HOUSE: 'House',
    MELODIC_TECHNO: 'Melodic Techno'
}

const ARTISTS = {
    ZHU: "ZHU",
    ARTBAT: "Artbat",
    WEEKND: 'Weeknd'
}

const playlist = {
    title: "Chill vibes",
    tracks: [
        { title: 'Twenty Eight', artist: ARTISTS.WEEKND, duration: 180, genre: MUSIC_GENRES.RNB },
        { title: 'Lost it', artist: ARTISTS.ZHU, duration: 180, genre: MUSIC_GENRES.HOUSE },
        { title: 'Tabu', artist: ARTISTS.ARTBAT, duration: 180, genre: MUSIC_GENRES.MELODIC_TECHNO },
        { title: '1', artist: ARTISTS.ARTBAT, duration: 180, genre: MUSIC_GENRES.MELODIC_TECHNO },
        { title: '2', artist: ARTISTS.ARTBAT, duration: 180, genre: MUSIC_GENRES.MELODIC_TECHNO },
    ]
}

const artbatTracks = playlist.tracks.filter((track) => track.artist === ARTISTS.ARTBAT)
console.log(artbatTracks)
console.log(playlist['title'])
console.log(playlist['tracks'])

function testVariable() {
    var testVar2 = 's';
}

if (true) {
    const testConst = '';
    var testVar = 'asdfs';
}

// console.log(testConst)
console.log('var- ', testVar)
console.log('var 2- ', testVar2)


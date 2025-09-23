/* Умовні оператори */

const MOOD = {
    SLEEPY: 'SLEEPY',
    HAPPY: 'HAPPY',
    ACTIVE: 'ACTIVE',
    COZY: 'COZY',
    NICE: 'NICE',
    INSPIRED: 'INSPIRED',
}

const mood = MOOD.SLEEPY

if (mood === MOOD.SLEEPY) {
    console.log("Play ambient 🤌")
} else if (mood === MOOD.HAPPY) {
    console.log("Play HOUSE 🤌")
} else {
    console.log("Play Trance 🤌")
}

console.log('Final')

/* with function and early */
const PLAYLIST_FOR_MOOD = {
    [MOOD.SLEEPY]: 'Ambient',
    [MOOD.HAPPY]: 'House',
    [MOOD.ACTIVE]: 'Trance',
    [MOOD.COZY]: 'Lo-Fi',
    [MOOD.NICE]: 'Classic',
    [MOOD.INSPIRED]: 'Alt Rock',
}

const getPlaylistForMood = (mood) => PLAYLIST_FOR_MOOD[mood] || 'Punk'

// getPlaylistForMood(MOOD.SLEEPY);


/* Ternary */
getPlaylistForSleepyMood = () => getPlaylistForMood(MOOD.SLEEPY)
getPlaylistForActiveMood = () => getPlaylistForMood(MOOD.ACTIVE)

const actualMood = MOOD.HAPPY
const getPlaylist = actualMood === MOOD.SLEEPY ? getPlaylistForSleepyMood : getPlaylistForActiveMood;

getPlaylist();

console.log('Day time::')

const dayTime = 'Evening'
const moodOfTheDayPart = dayTime === 'Night' ? MOOD.SLEEPY : MOOD.ACTIVE
getPlaylistForMood(moodOfTheDayPart)

/* Logical operators */

const getPlaylistForLoggedInUser = (isLoggedIn, isGuest, mood) => {
    return isLoggedIn || isGuest ? getPlaylistForMood(mood) : console.log('Access denied')
}

console.log('/* Logical operators */')

getPlaylistForLoggedInUser(true, false)
getPlaylistForLoggedInUser(false, true)
getPlaylistForLoggedInUser(false, false)

/* */
for (let i = 0; i < 10; i++) {
    console.log('Task # - ', i + 1)
}

let dishes = ["🍕", "🍔", "🍣"];
for (let food of dishes) {
  console.log("Я люблю " + food);
}

dishes.map(food => console.log('Страва - ', food))

const ratedDishes = dishes.map((food, index) => `${food} ${index + 1}`)
console.log(ratedDishes)
ratedDishes.map(food => console.log('Страва - ', food))

/* Mini demo */
const MOODS_LIST = Object.values(MOOD);

const getRandomMood = () => {
    const moodIndex = Math.floor(Math.random() * 5);
    
    return MOODS_LIST[moodIndex]
}

const dayMoods = Array.from({ length: 10 }, getRandomMood);
console.log(dayMoods)

console.log('Forn new mood -', getPlaylistForMood('New'))
console.log('++ Playlists for the day ++')

dayMoods.map(mood => console.log(`${mood} - ${getPlaylistForMood(mood)}`))

/* */
const getPlaylistForUsersMood = () => {
    const input = document.getElementById('input');
    const mood = input.value?.toUpperCase()

    console.log(getPlaylistForMood(mood))
}

getPlaylistForUsersMood()

const button = document.getElementById('button');

if (button) {
  button.addEventListener('click', getPlaylistForUsersMood);
}
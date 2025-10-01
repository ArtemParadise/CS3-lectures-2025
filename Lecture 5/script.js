const AVAILABLE_ACTIONS = {
    JUMP: 'jump',
    SLIDE: 'slide',
    CAPSULE: 'capsule',
    RUNE: 'rune',
}

const actions = [AVAILABLE_ACTIONS.JUMP, AVAILABLE_ACTIONS.SLIDE, AVAILABLE_ACTIONS.CAPSULE, AVAILABLE_ACTIONS.RUNE, AVAILABLE_ACTIONS.JUMP];

// Imperative approach
let score = 0;

for (let i = 0; i < actions.length; i++) {
    if (actions[i] === AVAILABLE_ACTIONS.JUMP) score += 10
    else if (actions[i] === AVAILABLE_ACTIONS.SLIDE) score += 8
    else if (actions[i] === AVAILABLE_ACTIONS.CAPSULE) score += 50
    else score += 5;
}

console.log('score imperative: ', score)

// Functional approach
const scoreMap = {
    [AVAILABLE_ACTIONS.JUMP]: 10,
    [AVAILABLE_ACTIONS.SLIDE]: 8,
    [AVAILABLE_ACTIONS.CAPSULE]: 50 ,
    [AVAILABLE_ACTIONS.RUNE]: 5,
}

const countPointsByAction = (action) => scoreMap[action]
const sum = (a, b) => a + b;

const scoreF = actions.map(countPointsByAction).reduce(sum, 0)

console.log('score functional: ', scoreF)

// ++++++++

function declaredFunction() {
    console.log('function decr -', this)
}
 
const functionExpression = function () {
    console.log('function expr', this)
}

const arrowFunction = () => console.log('function arrow', this)

declaredFunction()
functionExpression()
arrowFunction()

const getScroreA = () => this.score

function getScrore() { return this.score }
const getScroreArrow = () => this.score

const player1 = {
    name: 'Player 1',
    score: scoreF,
    action: declaredFunction,
    getScore: getScrore,
}

player1.action()

const player2 = {
    name: 'Player 2',
    score: scoreF,
    action: declaredFunction,
    getScroreArrow: () => this.score,
    getScore() {
       return getScroreArrow()
    }
}

player2.action()

const player3 = {
    name: 'Player 3',
    score: scoreF,
    action: () => console.log('function arrow', this)
}

player3.action()


console.log(player1.getScore())
console.log(player2.getScore())

// High Order Functions
const runes = [
    { name: 'Speed', effect: 'increase movement speed' },
    { name: 'Arcane', effect: 'decrease cooldow' },
    { name: 'Shield', effect: 'blocks 1000 damage' },
]

const findRune = (name) => runes.find(rune => rune.name === name);
console.log(findRune('Speed'));

const findRuneEffect = (name) => findRune(name).effect
console.log('findRuneEffect -', findRuneEffect('Speed'))

const createFindRuneEffect = (name) => () => findRune(name).effect

const findSpeedRuneEffect = createFindRuneEffect('Speed');
console.log('findSpeedRuneEffect -', findSpeedRuneEffect())

// Closures
const createCounter = () => {
    let count = 0;

    return {
        increaseCounter: () => count++,
        decreaseCounter: () => count--,
        getCount: () => count
    };
}

const counter = createCounter();
counter.increaseCounter()
counter.increaseCounter()
counter.increaseCounter()
console.log(counter.getCount())

counter.decreaseCounter()
console.log(counter.getCount())

console.log(count)


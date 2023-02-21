import Player from "./classes/Player/Player.js";
let shakib;
shakib = new Player('Shakib', 43, 'Bangladesh');
const Tamim = new Player('Tamim', 43, 'Bangladesh');
console.log(shakib.age, 'privet');
shakib.play();
const players = [];
players.push(shakib);
players.push(Tamim);
console.log(players);
function drawRactangle(options) {
    let width = options.width;
    let height = options.height;
    return width + height;
}
drawRactangle({
    width: 20,
    height: 40
});

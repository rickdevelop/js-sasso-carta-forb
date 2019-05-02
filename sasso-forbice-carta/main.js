var array = ['Carta', 'Forbici', 'Sasso'];
function random() {
  return array[Math.floor(array.length * Math.random())];
}
var giocatore_1 = random();
console.log('player 1 tira: ' + giocatore_1 );

var giocatore_2 = random();
console.log ('player 2 tira: ' + giocatore_2);

if ((giocatore_1 == 'Sasso' && giocatore_2 == 'Carta') || (giocatore_1 == 'Forbici' && giocatore_2=='Sasso') || (giocatore_1 == 'Carta' && giocatore_2 == 'Forbici')) {
  console.log('VITTORIA!!! PER IL GIOCATORE 2');
} else if ((giocatore_1 == 'Carta' && giocatore_2 == 'Sasso') || (giocatore_1 == 'Sasso' && giocatore_2 == 'Forbici') || (giocatore_1 == 'Forbici' && giocatore_2 == 'Carta')) {
  console.log('VITTORIA!!! PER IL GIOCATORE 1');
} else {
  console.log('PAREGGIO');
}

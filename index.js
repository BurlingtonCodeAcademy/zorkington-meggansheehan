const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

// remember the StateMachine lecture
// https://bootcamp.burlingtoncodeacademy.com/lessons/cs/state-machines
let states = {
  'roomOne': { canChangeTo: [ 'roomTwo' ] },
  'roomTwo': { canChangeTo: [ 'roomThree' ] },
  'roomThree': { canChangeTo: [ 'roomOne' ] }
};

let currentState = "green";

function enterState(newState) {
  let validTransitions = states[currentState].canChangeTo;
  if (validTransitions.includes(newState)) {
    currentState = newState;
  } else {
    throw 'Invalid state transition attempted - from ' + currentState + ' to ' + newState;
  }
}

start();

async function start() {
  const welcomeMessage = `109 Ontario Street
You are standing in a haunting wooded area at dusk. You hear crows cawing and fluttering 
their wings above. To the left there is a lantern. To the right is a bench. Behind you is a
church.' 
There is a door here. A keypad sits on the handle.
On the door is a handwritten sign.`;
  let answer = await ask(welcomeMessage);
  console.log('We Offer Sanctuary to Those in Need');
  process.exit('Sanctuary');
  break;
  default;
  console.log('Sorry, you can not enter.');
  break;
}
{
    console.log('You have sanctuary and are in the narthex. Now you must check-in with the residential 
    ghost priest. 
    This church has long been abandoned. Behind you, above the door you just entered, is a 
    stained glass rose window. In front of you is the nave. There is the left and right transept. 
    All the way to the front is the alter.')
        {
            switch (prompt('Please go check in.')){
                case "behind":
                console.log('The ghost priest is not there.');
                case "Left";
                console.log('The ghost is not there.');
                case "right";
                console.log('Nope, not there.'); 
                case "alter";
                console.log('Yes, the priest is at the alter.');
                // Do I have to use " or ' for both areas of text? Does it need to be consistent??
            }
    {
    console.log('I see you have come to seek sanctuary. Welcome. Welcome.');
    let answer = await ask(importantQuestion);
        console.log('Could you get me a glass of water from the kitchen');
        process.exit ('yes');
        break;
        default;
        console.log('That's quite rude.');
        break;
    }
            switch (prompt(// Do I need a prompt to do a switch??));
            case "behind";
            console.log('You just came from there. It's the entrance!');
            case "left";
            console.log('This is one of the transept quarters. There is a whispering arch, for the
            entrance, to a flight of stairs leading downwards.');
            case "whisper";
            console.log('The ghost kitchen key appears in midair. You must collect it to enter the 
            kitchen.');
            case "collect";
            {let inventory = [key];
                } 
            console.log('This is now in your inventory.");
            case "right";
            console.log('There is a old worn wooden door.');
            case "push";
            console.log('The wooden planks scream in protest at your forceful attempt.');
            case "use key";
            console.log('The door swings open on silent hinges.');
                let inventory = []
                    inventory.pop(key)                  
    {
        console.log('You have found the kitchen.')
        let answer = await ask(locationOfGlass);
            console.log('Where are the glasses?');
            process.exit ('In the cabinet.')
            break;
            default;
            console.log('Not there.')
                {let inventory = [glass]}
    }
            


        }
}
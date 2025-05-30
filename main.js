import Body from './modules/Body.js';

const CHARACTER = new Body();

window.addEventListener('load', (e)=>
{
  CHARACTER.setPosition(500,250);
  console.log(CHARACTER, CHARACTER.getPosition());
})

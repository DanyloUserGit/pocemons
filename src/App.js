import { useState } from 'react';
import Button from './components/Button.js';
import {Input} from './components/Input.js'
import Label from './components/Label.js';
import {Select, types} from './components/Select.js';
import Wrapper from './components/Wrapper.js';
import Damage from './functions/damage.js';
const damageParams = {};

function App() {
  const [damage, numDamage] = useState(0);
  const onButtonClickHandler = (event) => {
   numDamage (Damage(damageParams.selfType, damageParams.opponentType, damageParams.attack, damageParams.defense).damage);
  };
  const inputValue = (event, eventType) => {
    if(event.target.value !== '' && parseInt(event.target.value)){
      switch (eventType)
      {
        case "attack":
          damageParams.attack = event.target.value;
          break;
        case "defense":
          damageParams.defense = event.target.value;
          break;
        default:
          break;
      }
    }
  };
  return (
    <div className="App">
      <Wrapper>
        <div className='selection'>
          <Label Type={damageParams.selfType}>You</Label>
          <Label Type={damageParams.opponentType}>Opponent</Label>
        </div>
        <div className='selection'>
          <Select Type={damageParams.selfType} onChange={(event) => {damageParams.selfType = event.target.value}}>
            <option></option>
            <option value="fire">{types.fire}</option>
            <option value="water">{types.water}</option>
            <option value="electricity">{types.electricity}</option>
            <option value="grass">{types.grass}</option>
          </Select>
          <Select Type={damageParams.opponentType} onChange={(event) => {damageParams.opponentType = event.target.value}}>
            <option></option>
            <option value="fire">{types.fire}</option>
            <option value="water">{types.water}</option>
            <option value="electricity">{types.electricity}</option>
            <option value="grass">{types.grass}</option>
          </Select>
        </div>
        <div className='selection'>
          <Label Type={damageParams.selfType}>Attack</Label>
          <Label Type={damageParams.opponentType}>Defense</Label>
        </div>
        <div>
          <Input Type={damageParams.selfType} onChange={(event) => {inputValue(event,"attack")}}/>
          <Input Type={damageParams.opponentType} onChange={(event) => {inputValue(event,"defense")}}/>
        </div>
        <Button Type={damageParams.selfType} onClick={(event) => {onButtonClickHandler(event)}}>Submit</Button>
      </Wrapper>
      <Label Type={damageParams.selfType}>{damage}</Label>
    </div>
  );
}

export default App;

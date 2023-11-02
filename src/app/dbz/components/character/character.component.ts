import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {


@Output()
public onNewCharacter: EventEmitter<Character> = new EventEmitter(); 






  //[()] too wait data model
  //FormsModule va en los import
  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter():void{

    //debugger; //se detendra en esta linea

    console.log(this.character);
    if(this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);

    /*
    this.character.name = '';
    this.character.power = 0;
    */
   this.character = { name: '', power: 0};
  }
}

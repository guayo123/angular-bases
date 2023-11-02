import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';
//decorador que indica que esto es un servicio, va hacer un singleton por inyeccion de dependencias, saber el valor en ese momento
@Injectable({providedIn: 'root'})
export class DbzService {

    public characters: Character[] = [{
        id: uuid(),
        name: 'Krillin',
        power: 1000
    },{
        id: uuid(),
        name: 'Goku',
        power: 9500
    },{
        id: uuid(),
        name: 'Vegeta',
        power: 7500
    }
];

    addCharacter(character: Character):void{ //otra forma de destructurar { name, power}:Character 

        const newCharacter: Character =
        {
            id: uuid(), ...character //.. spred
            /*id: uuid(),
            name: character.name,
            power: character.power*/
        };
        this.characters.push(newCharacter);
        //this.characters.push(character); // push al final del arreglo 
        //console.log('MainPage');
        //console.log(character);
    }

    onDeleteCharacter(index: number):void{
        this.characters.splice(index,1);
        //console.log('MainPage');
        //console.log(index);
    }

    deleteCharacterById(id:string){
        this.characters = this.characters.filter(character => character.id !== id);
    }
    
}
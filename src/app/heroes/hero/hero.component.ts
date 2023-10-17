import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'IronMan';
  public age: number = 45;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription() : string{
    return ` ${this.name} -  ${ this.age} `
  }

  changeHero():void{
    this.name = 'SpiderMan'
  }

  changeAge():void{
    //throw 'Metodo no implementado';
    this.age = 25;
  }

  resetForm():void{
    this.name = 'IronMan';
    this.age = 45;
    
    //document.querySelectorAll('h1')!.forEach(element =>{
     // element.innerHTML = '<h1>Desde Angular </h1>';
    //});
  }


}

import { Component } from '@angular/core';
import { HeroListInterface } from '../../src/app/SuperInterfac';
import { Heros } from '../../src/app/superlist';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'superwars-oops';
  players: HeroListInterface[];

  ngOnInit() {
    this.players = Heros;
    this.viewPlayers(this.initPlayers(this.players));
  }
  i: number = 0;
  initPlayers = players => {
    let detailedPlayers = '';
    detailedPlayers = players.map((player, i) => {
      return {
        name: player.name,
        image: './assets/super-' + (i + 1) + '.png',
        strength: this.getRandomStrength(),
        type: i % 2 == 0 ? 'hero' : 'villain'
      };
    });
    return detailedPlayers;
  };
  getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
  };
  buildPlayers = (players, type) => {
    let fragment = '';

    fragment = players
      .filter(player => player.type == type)
      .map(
        player =>
          `<div class="player">
    <img src="${player.image}" alt=" ">
    <div class="name">${player.name}</div>
    <div class="strength">${player.strength}</div>
</div>`
      )
      .join('');
    return fragment;
  };
  viewPlayers = players => {
    document.getElementById('heroes').innerHTML = this.buildPlayers(
      players,
      'hero'
    );
    document.getElementById('villains').innerHTML = this.buildPlayers(
      players,
      'villain'
    );
  };
}
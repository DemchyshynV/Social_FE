import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-misic-page',
  templateUrl: './misic-page.component.html',
  styleUrls: ['./misic-page.component.css']
})
export class MisicPageComponent implements OnInit {
  list = [
    'Глюк`ozа - Вот такая любовь (Matsbeat Remix)',
    'SHENA - Проводи Меня До Дома (Remix)',
    'Rompasso - Body Talk Iizmailloff (Remix)',
    'Пропаганда - Жаль (Vladimir Koskin Remix)',
    'МYYO - Любил Тебя Я (NIKHCUR Remix)',
    'Клава Кока - Покинула Чат (Remix)',
    'Alesandi feat. & Alina Renae - Keep On Lovin\' Me (Lion Terza Remix)',
    'Денис Клявер & Слава - Дружба (Dj. Sasha Born Remix)',
    'Тату - Нас Не Догонят (Dj. Yonce & Dj. Kostas Radio Remix)',
    'AMCHI - Не сходи с ума (Dj. Safiter Remix)'
  ];

  constructor() {
  }

  ngOnInit() {
  }

}

import {Component} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is a description',
      'https://images.ctfassets.net/' +
      '314o13npeir2/BSe9tS2H4ayHBWmf58S7G/' +
      '322852b8d00f3075addd563bf554cb52/' +
      'kemences-pizza-budapest-14.jpg?w=1200&fl=progressive&q=80')
  ];
}

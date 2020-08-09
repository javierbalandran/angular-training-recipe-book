import { HttpEvent, HttpRequest, HttpResponse, HttpBackend } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

export class MockXHRBackend implements HttpBackend {
  private recipeItems = [
    {
      id: 1,
      name: 'Green Smoothie',
      medium: 'Article',
      category: 'Breakfast',
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: false
    },
    {
      id: 2,
      name: 'Ham Sandwich',
      medium: 'YouTube',
      category: 'Lunch',
      year: 2014,
      watchedOn: null,
      isFavorite: false
    },
    {
      id: 3,
      name: 'Pancakes',
      medium: 'Article',
      category: 'Breakfast',
      year: 2018,
      watchedOn: null,
      isFavorite: true
    },
    {
      id: 4,
      name: 'Chicken Teriyaki',
      medium: 'YouTube',
      category: 'Dinner',
      year: 2012,
      watchedOn: 1457166565384,
      isFavorite: true
    },
    {
      id: 5,
      name: 'Shrimp Scampi',
      medium: 'YouTube',
      category: 'Dinner',
      year: 2015,
      watchedOn: 1457166565384,
      isFavorite: false
    }
  ];

  handle(request: HttpRequest<any>): Observable<HttpEvent<any>> {
    return new Observable((responseObserver: Observer<HttpResponse<any>>) => {
      let responseOptions;
      switch (request.method) {
        case 'GET':
          if (request.urlWithParams.indexOf('recipeItems?medium=') >= 0 || request.url === 'recipeItems') {
            let medium;
            if (request.urlWithParams.indexOf('?') >= 0) {
              medium = request.urlWithParams.split('=')[1];
              if (medium === 'undefined') { medium = ''; }
            }
            let recipeItems;
            if (medium) {
              recipeItems = this.recipeItems.filter(i => i.medium === medium);
            } else {
              recipeItems = this.recipeItems;
            }
            responseOptions = {
              body: {recipeItems: JSON.parse(JSON.stringify(recipeItems))},
              status: 200
            };
          } else {
            let recipeItems;
            const idToFind = parseInt(request.url.split('/')[1], 10);
            recipeItems = this.recipeItems.filter(i => i.id === idToFind);
            responseOptions = {
              body: JSON.parse(JSON.stringify(recipeItems[0])),
              status: 200
            };
          }
          break;
        case 'POST':
          const recipeItem = request.body;
          recipeItem.id = this._getNewId();
          this.recipeItems.push(recipeItem);
          responseOptions = {status: 201};
          break;
        case 'DELETE':
          const id = parseInt(request.url.split('/')[1], 10);
          this._deleteRecipeItem(id);
          responseOptions = {status: 200};
      }

      const responseObject = new HttpResponse(responseOptions);
      responseObserver.next(responseObject);
      responseObserver.complete();
      return () => {
      };
    });
  }

  _deleteRecipeItem(id) {
    const recipeItem = this.recipeItems.find(i => i.id === id);
    const index = this.recipeItems.indexOf(recipeItem);
    if (index >= 0) {
      this.recipeItems.splice(index, 1);
    }
  }

  _getNewId() {
    if (this.recipeItems.length > 0) {
      return Math.max.apply(Math, this.recipeItems.map(recipeItem => recipeItem.id)) + 1;
    } else {
      return 1;
    }
  }
}

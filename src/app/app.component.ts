import { Component } from '@angular/core';
import { Article } from './models/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  errorMessage: string = '';

  private articles: Article[] = [];

  addArticle(title: HTMLInputElement, link:HTMLInputElement): boolean {
    
    this.errorMessage = '';

    if (title.value === '' || link.value === '') {
      this.errorMessage = 'Title and link are required';
      return false;
    }

    if (this.articles.find((a) => a.title === title.value && a.link === link.value) != null) {
      this.errorMessage = 'Article already exsists!';
      return false;
    }

    const article = new Article(title.value, link.value);
    this.articles.push(article);

    title.value = '';
    link.value = '';

    return false;
  }

  hasArticles(): boolean {
    return this.articles.length > 0;
  }

  sortArticles(): Article[] {
    return this.articles.sort((a, b) => b.votes - a.votes);
  }
}
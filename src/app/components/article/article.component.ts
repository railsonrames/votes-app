import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  @HostBinding('attr.class')
  hostCssClass = 'row';

  @Input()
  article?: Article;

  votes: number = 0;

  voteUp(): void {
    this.article?.addVote();
  }

  voteDown(): void {
    this.article?.removeVote();
  }

}

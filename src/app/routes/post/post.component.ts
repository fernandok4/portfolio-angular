import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarkdownService } from 'ngx-markdown';
import { fader } from 'src/app/route-animation';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import * as jsonPosts from 'src/assets/posts/posts.json'  
import { AngularFireAnalytics } from '@angular/fire/analytics';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  animations: [
    fader
  ]
})
export class PostComponent implements OnInit {

  private fileName: string = ""
  public postInfo: any;
  public content: string = ""
  public faAngleLeft = faAngleLeft;

  constructor(private route: ActivatedRoute, private markdownService: MarkdownService, private router: Router, 
    private angularAnalytics: AngularFireAnalytics){}

  ngOnInit() {
    this.route.params.subscribe(parameters => {
      this.handleParameters(parameters)
      this.loadContent()
    });
  }

  private loadContent = async () => {
    this.postInfo = (jsonPosts as any).default.find(item => item.fileName == this.fileName)
    let fullContent = await this.getMarkdownSource()
    this.content = fullContent.replace(/---[\s\S]+---/g, "")
  }

  private getMarkdownSource = async () => {
    let content = ""
    try{
      content = await this.markdownService.getSource(this.postInfo.path).toPromise()
      this.angularAnalytics.logEvent('select_content', {content_type: "blog_post", content_id: this.postInfo.path})
    }catch(e){
      throw ("Ocorreu um erro para trazer o conteudo do post.")
    }
    return content
  }

  private handleParameters = (parameters) => {
    if(!parameters["fileName"]){
      throw ("Não foi passado o nome do post")
    }
    this.fileName = parameters["fileName"]
  }

  goBackToBlog = () => {
    this.router.navigate(["blog"])
  }
}

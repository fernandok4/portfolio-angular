import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as jsonPosts from 'src/assets/posts/posts.json'  

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public posts: Array<String> = []

  constructor(private router: Router) { }

  ngOnInit() {
    this.getFilesFromDirectory()
  }

  getFilesFromDirectory = () => {
    let posts = []
    try{
      posts = (jsonPosts as any).default
      posts = posts.sort((a, b) => b.id - a.id)
    } catch(e){
      console.error("Houve um erro ao capturar os posts", e)
    }
    this.posts = posts
  }

  openPostContent = (post) => {
    this.router.navigate(["blog/post", post.fileName])
  }
}

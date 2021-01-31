import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {Post} from '../../../models/post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];

  singlePost: Post;


  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(value => this.posts = value);
  }

  getBubbleP(post: Post): void {
    this.singlePost = post;
  }
}

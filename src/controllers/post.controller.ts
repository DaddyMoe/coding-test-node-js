import { Router, Request, Response } from "express";
import Post from "../common/common";
import PostsService from "../services/post.service";

class PostsController {
  public path = '/posts';
  public router = Router();
  public srvPost: PostsService = new PostsService();

  constructor() {
    this.intializeRoutes();
    this.srvPost = new PostsService();
  }

  public intializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.post(this.path, this.createAPost);
  }

  getAllPosts = async (request: Request, response: Response) => {
    try {
      let res = await this.srvPost.getAllPosts(request);
      response.send(res);
    } catch (err) {
      response.send(err);
    }
  }

  createAPost = (request: Request, response: Response) => {
    const post: Post = request.body;
    // this.posts.push(post);
    response.send(post);
  }
}

export default PostsController;
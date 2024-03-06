import App from './app/app';
import PostsController from './controllers/post.controller';
import UserController from './controllers/user.controller';

const app = new App([new PostsController(), new UserController()], 4000);

app.listen();
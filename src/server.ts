import App from './src/app';
import PostsController from './controllers/post.controller';

const app = new App([new PostsController()], 5000);

app.listen();
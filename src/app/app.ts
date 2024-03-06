
import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
 
class App {
  public app: express.Application;
  public port: number;

  public allowedOrigins = ['http://localhost:4200'];
 
  constructor(controllers: any, port: number) {
    this.app = express();
    this.port = port;
 
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }
 
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());

    const options: cors.CorsOptions = {
      origin: this.allowedOrigins
    };
    this.app.use(cors(options));
  }
 
  private initializeControllers(controllers: any) {
    controllers.forEach((controller: any) => {
      this.app.use('/', controller.router);
    });
  }
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
 
export default App;
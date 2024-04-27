import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';
import * as yaml from 'js-yaml';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);

// Load Swagger config from YAML file
const fileContents = fs.readFileSync('./src/swagger/operation-api.yaml' , 'utf8');
const swaggerConfig = await yaml.load(fileContents);

let info = swaggerConfig["info"];

const options = new DocumentBuilder()
  .setTitle(info.title)
  .setDescription(info.description)
  .setVersion(info.version)
  .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'JWT',
      description: 'Enter JWT token',
      in: 'header',
    },
    'access-token'
  )
  .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('', app, document);

  await app.listen(3000);
}

bootstrap();



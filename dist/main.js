"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const fs = require("fs");
const yaml = require("js-yaml");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const fileContents = fs.readFileSync('./src/swagger/operation-api.yaml', 'utf8');
    const swaggerConfig = await yaml.load(fileContents);
    let info = swaggerConfig["info"];
    const options = new swagger_1.DocumentBuilder()
        .setTitle(info.title)
        .setDescription(info.description)
        .setVersion(info.version)
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
    }, 'access-token')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map
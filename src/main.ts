import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('NestJS Prisma CRUD API')
    .setDescription(
      'API documentation for NestJS CRUD with Prisma and PostgreSQL',
    )
    .setVersion('1.0')
    .addTag('users') // Optional: Group by tags
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  await app.listen(4000);
}
bootstrap();

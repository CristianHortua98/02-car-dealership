import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //SOLO PERMITE LA DATA QUE SE ESTA ESPERANDO EN EL DTO
      forbidNonWhitelisted: true //MUESTRA LAS PROPIEDADES QUE NO SON ESPERADAS EN EL DTO
    })
  )

  await app.listen(3000);
}
bootstrap();

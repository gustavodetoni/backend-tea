import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const port = process.env.PORT || 3333

  app.useGlobalPipes(new ValidationPipe())

  app.setGlobalPrefix('api')  

  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true
  })

  await app.listen(port, () => console.log(`Running on port ${port}`))
}
bootstrap()

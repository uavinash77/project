import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HeadModule } from './app/Assignment2/head.module';
import { AppModule } from './app/app.module';
import { FootModule } from './app/Assignment2/foot.module';
platformBrowserDynamic().bootstrapModule(AppModule);
platformBrowserDynamic().bootstrapModule(HeadModule);
platformBrowserDynamic().bootstrapModule(FootModule);


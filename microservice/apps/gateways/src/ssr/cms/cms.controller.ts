import { Controller, Get, Header, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('ssr/cms')
export class CmsController {
  @Get('welcome')
  @Header('Content-Type', 'text/html; charset=utf-8')
  welcome(@Res() res: Response) {
    res.render('welcome', { title: 'welcome' });
    return res.end();
  }

  @Get('home')
  @Header('Content-Type', 'text/html; charset=utf-8')
  home(@Res() res: Response) {
    res.render('home', { title: 'home' });
    return res.end();
  }

  @Get('tag')
  @Header('Content-Type', 'text/html; charset=utf-8')
  tag(@Res() res: Response) {
    res.render('tag', { title: 'tag' });
    return res.end();
  }

  @Get('timeline')
  @Header('Content-Type', 'text/html; charset=utf-8')
  timeline(@Res() res: Response) {
    res.render('timeline', { title: 'timeline' });
    return res.end();
  }

  @Get('article')
  @Header('Content-Type', 'text/html; charset=utf-8')
  article(@Res() res: Response) {
    res.render('article', { title: 'article' });
    return res.end();
  }
}

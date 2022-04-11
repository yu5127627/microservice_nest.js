import { Controller, Get, Header, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { CmsService } from './cms.service';
const menuList = [
  { title: '主页', path: '/' },
  { title: '归档', path: '/ssr/cms/timeline' },
  { title: '标签', path: '/ssr/cms/tag' },
  { title: '友链', path: '/ssr/cms/friends' },
  { title: '关于我', path: '/ssr/cms/about' },
  { title: '随笔', path: '/ssr/cms/note' },
  { title: '播放器', path: '/ssr/cms/player' },
];
@Controller('ssr/cms')
export class CmsController {
  constructor(private readonly cmsService: CmsService) {}

  @Get('welcome')
  @Header('Content-Type', 'text/html; charset=utf-8')
  welcome(@Res() res: Response) {
    res.render('welcome', { title: 'welcome' });
    return res.end();
  }

  @Get('home')
  @Header('Content-Type', 'text/html; charset=utf-8')
  async home(@Res() res: Response) {
    const { articleList } = await this.cmsService.home();
    res.render('home', { title: '首页', menuList, articleList });
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

  @Get('article/:id')
  @Header('Content-Type', 'text/html; charset=utf-8')
  async article(@Res() res: Response, @Param('id') id: number) {
    const article = await this.cmsService.article(id);
    res.render('article', { title: article.title, menuList, article });
    return res.end();
  }
}

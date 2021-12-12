import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ManageJwtStrategy extends PassportStrategy(Strategy, 'ManageJwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: '12121',
    });
  }

  async validate(payload: any) {
    console.log(payload);

    return { userId: payload.sub, username: payload.username };
  }
}

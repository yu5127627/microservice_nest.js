import type { Emitter } from 'mitt';
import mitt from 'mitt';

type Events = {
  'list-reload': string
};

export const emitter: Emitter<Events> = mitt<Events>();

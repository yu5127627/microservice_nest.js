import type { Emitter } from 'mitt';
import mitt from 'mitt';

type Events = {
  'list-reload': object
};

export const emitter: Emitter<Events> = mitt<Events>();

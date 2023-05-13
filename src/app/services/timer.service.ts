export class TimerService {
  interval: NodeJS.Timer | undefined = undefined;

  callback: () => any = () => {};
  delay: number = 0;
  started: number = Date.now();
  paused: number = Date.now();

  remaining: any = 0;

  constructor(callback: () => any, delay: number) {
    this.callback = callback;
    this.delay = delay;
    this.started = Date.now();
    this.start(callback,delay);
  }

  start(callback: () => {}, delay: number) {
    this.interval = setInterval(callback, delay);
  }

  pause() {
    this.paused = Date.now();
    clearInterval(this.interval);
  }

  resume() {
    this.remaining = (this.paused - this.started) % this.delay;
    this.interval = setInterval(() => {
      this.callback();
      clearInterval(this.interval);
      this.interval = setInterval(this.callback, this.delay);
    }, this.remaining);
  }

  stop() {
    clearInterval(this.interval);
  }
}

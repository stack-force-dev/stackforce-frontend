import { Dispatch, SetStateAction } from 'react';

class Scroll {
  private DARK_HEADER_SCREENS = [3];
  private setHeaderDark;

  constructor(setHeaderDark: Dispatch<SetStateAction<boolean>>) {
    this.setHeaderDark = setHeaderDark;
  }

  public init() {
    if (window.innerWidth < 1024) return this.mobile();
    this.desktop();
  }

  private desktop() {
    let scrolling = false;
    let lastSrc = null;
    // let lastTouch = 0;

    const scrollListener = (down, src) => {
      if (scrolling || src === lastSrc || src.classList.contains('menu')) return;

      scrolling = true;

      const currentScroll = window.pageYOffset + 1;
      const screen = Math.ceil(currentScroll / window.innerHeight) || 1;
      const newScreen = down ? screen + 1 : screen - 1;

      const section = document.querySelector(`#section-${newScreen}`);
      if (!section) {
        scrolling = false;
        return;
      }

      this.scrollToTarget(section, newScreen, down, this.setHeaderDark);

      setTimeout(() => {
        scrolling = false;
      }, 1000);

      lastSrc = src;
    };

    // window.addEventListener('touchstart', (e) => (lastTouch = e.touches[0].pageY));
    // window.addEventListener('touchmove', (e) => scrollListener(lastTouch - e.touches[0].pageY > 0, e.target));
    window.addEventListener('wheel', (e) => scrollListener(e.deltaY > 0, e.target));
  }

  private mobile() {
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY + 1;
      const screen = Math.ceil(currentScroll / window.innerHeight);

      this.setHeaderDark(this.DARK_HEADER_SCREENS.includes(screen));
    });
  }

  private scrollToTarget(target, screen, down, setHeaderDark) {
    const start = window.pageYOffset;
    const top = target.getBoundingClientRect().top;

    const duration = 500;

    let startTime = 0;
    let requestId;

    const loop = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const time = currentTime - startTime;

      const percent = Math.min(time / duration, 1);
      window.scrollTo(0, start + top * percent);

      if (time < duration) {
        requestId = window.requestAnimationFrame(loop);
      } else {
        window.cancelAnimationFrame(requestId);
        if (down) setHeaderDark(this.DARK_HEADER_SCREENS.includes(screen));
      }
    };

    if (!down) setHeaderDark(this.DARK_HEADER_SCREENS.includes(screen));

    requestId = window.requestAnimationFrame(loop);
  }
}

export default Scroll;

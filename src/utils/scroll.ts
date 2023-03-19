import { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { darkSections } from '../config';

class Scroll {
  private DARK_HEADER_SCREENS = darkSections;
  private setHeaderDark;

  constructor(setHeaderDark: Dispatch<SetStateAction<boolean>>) {
    this.setHeaderDark = setHeaderDark;
  }

  public init() {
    this.links();

    if (window.innerWidth < 1024) return this.mobile();
    this.desktop();
  }

  private desktop() {
    let scrolling = false;
    let lastSrc = null;
    let lastScreen = 1;
    // let lastTouch = 0;

    const scrollListener = (down, src, keyScroll = false) => {
      if (scrolling || (!keyScroll && src === lastSrc) || src?.classList.contains('ignore-scroll')) return;

      scrolling = true;

      const currentScroll = window.pageYOffset + 1;
      const screen = Math.ceil(currentScroll / window.innerHeight) || 1;
      const newScreen = down ? screen + 1 : screen - 1;

      const section = document.querySelector(`#section-${newScreen}`);
      if (!section) {
        scrolling = false;
        return;
      }

      this.scrollToTarget(section, newScreen, down);

      setTimeout(
        () => {
          scrolling = false;
        },
        keyScroll ? 200 : 1000
      );

      lastSrc = src;
      lastScreen = newScreen;
    };

    const keyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') return scrollListener(true, lastSrc, true);
      if (e.key === 'ArrowUp') return scrollListener(false, lastSrc, true);
    };

    // window.addEventListener('touchstart', (e) => (lastTouch = e.touches[0].pageY));
    // window.addEventListener('touchmove', (e) => scrollListener(lastTouch - e.touches[0].pageY > 0, e.target));
    window.addEventListener('wheel', (e) => scrollListener(e.deltaY > 0, e.target));
    window.addEventListener('keydown', keyDown);
  }

  private mobile() {
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY + 1;
      const screen = Math.ceil(currentScroll / window.innerHeight);

      this.setHeaderDark(this.DARK_HEADER_SCREENS.includes(screen));
    });
  }

  private links() {
    const links = document.querySelectorAll('.route-link');

    links.forEach((link) => {
      link?.addEventListener('click', (e) => {
        const newScreen = Number((e.target as HTMLTextAreaElement).getAttribute('data-section'));

        const section = document.querySelector(`#section-${newScreen}`);
        if (!section) return;

        section.scrollIntoView();
        this.setHeaderDark(this.DARK_HEADER_SCREENS.includes(newScreen));
      });
    });
  }

  private scrollToTarget(target, screen, down) {
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
        if (down) this.setHeaderDark(this.DARK_HEADER_SCREENS.includes(screen));
      }
    };

    if (!down) this.setHeaderDark(this.DARK_HEADER_SCREENS.includes(screen));

    requestId = window.requestAnimationFrame(loop);
  }
}

export default Scroll;

import { Dispatch, SetStateAction } from "react";

import { darkSections } from "@root/config";

class Scroll {
  private DARK_HEADER_SCREENS = darkSections;
  private SCROLL_LIMIT = 100;
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
    let lastSection = 1;
    // let lastTouch = 0;

    const scrollListener = (down, section, keyScroll = false) => {
      if (scrolling || (!keyScroll && lastSection !== 1 && section === lastSection)) return;

      scrolling = true;

      const currentScroll = window.pageYOffset + 2;
      const screen = Math.ceil(currentScroll / window.innerHeight) || 1;
      const newScreen = down ? screen + 1 : screen - 1;
      const newSection = document.querySelector(`#section-${newScreen}`);
      if (!newSection) {
        scrolling = false;
        return;
      }

      this.scrollToTarget(newSection, newScreen, down);

      setTimeout(
        () => {
          scrolling = false;
        },
        keyScroll ? 200 : 1000
      );

      lastSection = section;
    };

    const keyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") return scrollListener(true, lastSection, true);
      if (e.key === "ArrowUp") return scrollListener(false, lastSection, true);
    };

    const getSection = (target: Element): number | null => {
      const [section, id] = target.id.split("-");
      if (section === "section") return Number(id);

      const { parentElement } = target;
      if (!parentElement) return null;

      return getSection(parentElement);
    };

    // window.addEventListener("touchstart", (e) => (lastTouch = e.touches[0].pageY));
    // window.addEventListener("touchmove", (e) => scrollListener(lastTouch - e.touches[0].pageY > 0, e.target));
    window.addEventListener("wheel", (e) => {
      const target = e.target as Element;

      const section = getSection(target);
      if (!section || target.classList.contains("ignore-scroll")) return;

      scrollListener(e.deltaY > 0, section);
    });
    window.addEventListener("keydown", keyDown);
  }

  private mobile() {
    const body = document.body;

    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 0;

    const scroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > this.SCROLL_LIMIT && currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        document.body.classList.remove(scrollUp);
        document.body.classList.add(scrollDown);
      } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
        document.body.classList.remove(scrollDown);
        document.body.classList.add(scrollUp);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", scroll);
  }

  private links() {
    const links = document.querySelectorAll("[data-section-link]");

    links.forEach((link) => {
      link?.addEventListener("click", (e) => {
        const newScreen = Number(link.getAttribute("data-section-link"));

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

import Pageable from 'pageable';

const whiteScreens = [2];

export const initPageable = (setHeaderDark) => {
  let lastScroll = 0;
  let currentScreen = 0;

  new Pageable('#container', {
    anchors: ['Page 1', 'Page 2', 'Page 3'],
    animation: 600,
    delay: 500,
    swipeThreshold: 20,
    onFinish: (e) => {
      if (currentScreen === e.index) return;
      if (e.index > currentScreen) setHeaderDark(whiteScreens.includes(e.index));

      lastScroll = e.scrolled;
      currentScreen = e.index;
    },
    onScroll: (e) => {
      if (currentScreen === e.index) return;

      lastScroll = e.scrolled;

      if (e.index > currentScreen) return;
      setHeaderDark(whiteScreens.includes(e.index));
      currentScreen = e.index;
    },
    onInit: (e) => {
      setHeaderDark(whiteScreens.includes(e.index));
    },
  });
};

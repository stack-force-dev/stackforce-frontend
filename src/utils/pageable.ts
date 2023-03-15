import Pageable from 'pageable';

const whiteScreens = [2];

export const initPageable = (setHeaderDark) => {
  let currentScreen = 0;

  new Pageable('#container', {
    animation: 600,
    delay: 350,
    swipeThreshold: 20,
    onFinish: (e) => {
      if (currentScreen === e.index) return;
      if (e.index > currentScreen) setHeaderDark(whiteScreens.includes(e.index));

      currentScreen = e.index;
    },
    onScroll: (e) => {
      if (currentScreen === e.index) return;

      if (e.index > currentScreen) return;
      setHeaderDark(whiteScreens.includes(e.index));
      currentScreen = e.index;
    },
    onInit: (e) => {
      setHeaderDark(whiteScreens.includes(e.index));
    },
  });
};

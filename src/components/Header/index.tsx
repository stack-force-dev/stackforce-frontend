import React, { FC, useEffect, useRef } from 'react';

const Header: FC = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const height = window.innerHeight - ref.current.offsetHeight / 2;
    const darkHeaderScreens = [3, 5];

    window.addEventListener('scroll', () => {
      if (!ref.current) return;

      const currentScroll = window.pageYOffset;
      const screen = Math.ceil(currentScroll / height);

      if (darkHeaderScreens.includes(screen)) {
        ref.current.classList.add('dark');
      } else {
        ref.current.classList.remove('dark');
      }
    });
  }, []);

  return (
    <header ref={ref}>
      <div>aaaaa</div>
      <div>bbbb</div>
    </header>
  );
};

export default Header;

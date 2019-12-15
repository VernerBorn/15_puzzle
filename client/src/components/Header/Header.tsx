import React from 'react';
import IconAdjust from './IconAdjust';

const Header: React.FC = (): JSX.Element => {
  const switchTheme = (e: React.MouseEvent) => {
    document.body.classList.toggle('dark');
  };
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__icon-theme--wrap" onClick={e => switchTheme(e)}>
          <IconAdjust className="header__icon-theme" />
        </div>
        <h1 className="header__title">Пятнашки</h1>
      </div>
    </header>
  );
};

export default Header;

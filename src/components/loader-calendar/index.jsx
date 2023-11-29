import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/themeContext';
import './styles.sass';

function LoaderCalendar() {
  const { globalTheme } = useContext(ThemeContext);

  const style = {
    backgroundColor: globalTheme.primaryColor || '#3F88C5',
  };

  return (
    <div className="container-loader" style={style}>
      <span className="loader" />
    </div>
  );
}

export default LoaderCalendar;

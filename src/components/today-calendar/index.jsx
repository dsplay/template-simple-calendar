import { format } from 'date-fns';
// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import './styles.sass';
import { useTemplateVal } from '@dsplay/react-template-utils';
import { i18n } from '../../i18n';
import { ThemeContext } from '../../contexts/themeContext';

function TodayCalendar({ clock, dateFromNow }) {
  const heightValue = window.innerHeight;
  const { globalTheme } = useContext(ThemeContext);
  const primaryColor = globalTheme.primaryColor ? globalTheme.primaryColor : '#3F88C5';
  const logo = useTemplateVal('logo');
  return (
    <>
      {
        heightValue > 100 ? (
          <div className="today-calendar-container" style={{ backgroundColor: primaryColor }}>
            <h1>{format(dateFromNow, 'EEEE', { locale: i18n.t('locale', { returnObjects: true }) })}</h1>
            <span>{format(dateFromNow, 'dd', { locale: i18n.t('locale', { returnObjects: true }) })}</span>
            <p>
              {`${clock}`}
            </p>
            <div>
              <img alt="company" src={logo} />
            </div>
          </div>
        ) : (
          <div className="today-calendar-container" style={{ backgroundColor: primaryColor }}>
            <div>
              {`${clock}`}
            </div>
            <div>
              {format(dateFromNow, 'PPPP', { locale: i18n.t('locale', { returnObjects: true }) })}
            </div>
          </div>
        )
      }
    </>
  );
}

export default TodayCalendar;

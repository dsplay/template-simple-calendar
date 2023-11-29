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
  const logo = useTemplateVal('logo');
  const primaryColor = globalTheme.primaryColor ? globalTheme.primaryColor : '#3F88C5';
  const { primaryFontColor } = globalTheme;
  const weekDayFontColor = globalTheme.weekDayFontColor || primaryFontColor || '#ffff';
  const dayFontColor = globalTheme.dayFontColor || primaryFontColor || '#ffff';
  const timeFontColor = globalTheme.timeFontColor || primaryFontColor || '#ffff';
  const logoBgColor = globalTheme.logoBgColor || 'transparent';

  return (
    <>
      {
        heightValue > 100 ? (
          <div className="today-calendar-container" style={{ backgroundColor: primaryColor }}>
            <h1 style={{ color: weekDayFontColor }}>{format(dateFromNow, 'EEEE', { locale: i18n.t('locale', { returnObjects: true }) })}</h1>
            <span style={{ color: dayFontColor }}>{format(dateFromNow, 'dd', { locale: i18n.t('locale', { returnObjects: true }) })}</span>
            <p style={{ color: timeFontColor }}>
              {`${clock}`}
            </p>
            {logo && (
              <div style={{ backgroundColor: logoBgColor, borderRadius: 10 }} className="logoArea">
                <img alt="company" src={logo} />
              </div>
            )}
          </div>
        ) : (
          <div className="today-calendar-container" style={{ backgroundColor: primaryColor, color: globalTheme.primaryFontColor }}>
            <div style={{ color: timeFontColor }}>
              {`${clock}`}
            </div>
            <div style={{ color: weekDayFontColor }}>
              {format(dateFromNow, 'PPPP', { locale: i18n.t('locale', { returnObjects: true }) })}
            </div>
          </div>
        )
      }
    </>
  );
}

export default TodayCalendar;

/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { CaretLeft, CaretRight } from 'phosphor-react';
import {
  addDays,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
  endOfMonth,
  isSameMonth,
  isSameDay,
  subMonths,
  addMonths,
} from 'date-fns';
import './styles.sass';
import { i18n } from '../../i18n';
import { ThemeContext } from '../../contexts/themeContext';

const now = new Date();

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(now);
  const [activeDate, setActiveDate] = useState(now);
  const heightValue = window.innerHeight;
  const { globalTheme } = useContext(ThemeContext);
  const secondaryColor = globalTheme.secondaryColor ? globalTheme.secondaryColor : '#032B43';
  const { secondaryFontColor } = globalTheme;
  const fullDateFontColor = globalTheme.fullDateFontColor || secondaryFontColor || '#ffff';
  const activeDays = globalTheme.activeDaysFontColor || secondaryFontColor || '#ffff';
  const inactiveDaysFontColor = globalTheme.inactiveDaysFontColor || secondaryFontColor || '#9e9e9e';
  const weekDaysFontColor = globalTheme.weekDaysFontColor || secondaryFontColor || '#cccbcb';
  const todayBgColor = globalTheme.todayBgColor || secondaryFontColor || '#3366ff';
  const getHeader = () => (
    <div className="header-calendar">
      <div>
        <h2 style={{ color: fullDateFontColor }} className="currentMonth">
          {format(activeDate,
            'PPP', { locale: i18n.t('locale', { returnObjects: true }) })}
        </h2>
      </div>
    </div>
  );
  const getWeekDaysNames = () => {
    const weekStartDate = startOfWeek(activeDate);
    const weekdays = [];

    // eslint-disable-next-line no-plusplus
    for (let day = 0; day < 7; day++) {
      weekdays.push(
        <div style={{ color: weekDaysFontColor }} className="day weekNames" key={day + weekStartDate}>
          {format(addDays(weekStartDate, day), 'EE', { locale: i18n.t('locale', { returnObjects: true }) })}
        </div>,
      );
    }

    return <div className="weekContainer">{weekdays}</div>;
  };
  const generateDatesForCurrentWeek = ({ date, selectedDate, activeDate }) => {
    // eslint-disable-next-line prefer-const
    let currentDate = date;
    const week = [];

    // eslint-disable-next-line no-plusplus
    for (let day = 0; day < 7; day++) {
      const cloneDate = currentDate;
      const weekFonts = isSameMonth(currentDate, activeDate) ? activeDays : inactiveDaysFontColor;
      const background = isSameDay(currentDate, now) ? todayBgColor : '';
      week.push(
        <div
          style={{ color: weekFonts, backgroundColor: background }}
          className={`day
          ${isSameMonth(currentDate, activeDate) ? '' : 'inactiveDay'}
          ${isSameDay(currentDate, selectedDate) ? 'selectedDay' : ''}
          ${isSameDay(currentDate, now) ? 'today' : ''}
        `}
          onClick={() => {
            setSelectedDate(cloneDate);
          }}
          key={day + cloneDate}
        >
          {format(currentDate, 'dd')}
        </div>,
      );

      currentDate = addDays(currentDate, 1);
    }
    return week;
  };
  const getDates = () => {
    const startOfTheSelectedMonth = startOfMonth(activeDate);
    const endOfTheSelectedMonth = endOfMonth(activeDate);
    const startDate = startOfWeek(startOfTheSelectedMonth);
    const endDate = endOfWeek(endOfTheSelectedMonth);

    let currentDate = startDate;

    const allWeeks = [];
    const i = 0;
    while (currentDate <= endDate) {
      allWeeks.push(
        generateDatesForCurrentWeek({ date: currentDate, selectedDate, activeDate }),
      );
      currentDate = addDays(currentDate, 7);
    }

    return (
      <div className="weekContainer">{allWeeks}</div>
    );
  };

  return (
    <>
      {
        heightValue > 100 ? (
          <div className="calendarContainer" style={{ backgroundColor: secondaryColor }}>
            <div className="content">
              {getHeader()}
              {getWeekDaysNames()}
              {getDates()}
            </div>
          </div>
        )
          : (
            <div className="calendarContainer" style={{ backgroundColor: secondaryColor, color: globalTheme.secondaryFontColor }}>
              <div className="content">
                {getWeekDaysNames()}
                {
                  <div className="weekContainer">
                    {
                      generateDatesForCurrentWeek({ date: startOfWeek(activeDate), activeDate })
                    }
                  </div>
                }
              </div>
            </div>
          )
      }
    </>
  );
}

export default Calendar;

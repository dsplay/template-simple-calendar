/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';
import { useTemplateVal } from '@dsplay/react-template-utils';

export const ThemeContext = createContext({
  globalTheme: {
    primaryColor: '',
    primaryFontColor: '',
    secondaryColor: '',
    secondaryFontColor: '',
    weekDayFontColor: '',
    dayFontColor: '',
    timeFontColor: '',
    logoBgColor: 'transparent',
    fullDateFontColor: '',
    activeDaysFontColor: '',
    inactiveDaysFontColor: '',
    weekDaysFontColor: '',
    todayBgColor: '',
  },
});

const ThemeContextParent = (props) => {
  const primary = useTemplateVal('primaryColor');
  const secondary = useTemplateVal('secondaryColor');
  const secondaryFont = useTemplateVal('secondaryFontColor');
  const primaryFont = useTemplateVal('primaryFontColor');
  const weekDayFont = useTemplateVal('weekDayFontColor');
  const dayFont = useTemplateVal('dayFontColor');
  const timeFont = useTemplateVal('timeFontColor');
  const logoBg = useTemplateVal('logoBgColor');
  const fullDateFont = useTemplateVal('fullDateFontColor');
  const activeDaysFont = useTemplateVal('activeDaysFontColor');
  const inactiveDaysFont = useTemplateVal('inactiveDaysFontColor');
  const weekDaysFont = useTemplateVal('weekDaysFontColor');
  const todayBg = useTemplateVal('todayBgColor');

  const { children } = props;

  const value = {
    globalTheme: {
      primaryColor: primary,
      secondaryColor: secondary,
      primaryFontColor: primaryFont,
      secondaryFontColor: secondaryFont,
      weekDayFontColor: weekDayFont,
      dayFontColor: dayFont,
      timeFontColor: timeFont,
      logoBgColor: logoBg,
      fullDateFontColor: fullDateFont,
      activeDaysFontColor: activeDaysFont,
      inactiveDaysFontColor: inactiveDaysFont,
      weekDaysFontColor: weekDaysFont,
      todayBgColor: todayBg,
    },
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextParent;

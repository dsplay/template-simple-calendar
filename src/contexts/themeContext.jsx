/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';
import { useTemplateVal } from '@dsplay/react-template-utils';

export const ThemeContext = createContext({
  globalTheme: {
    primaryColor: '',
    secondaryColor: '',
    primaryFontColor: '',
    secondaryFontColor: '',
  },
});

const ThemeContextParent = (props) => {
  const primary = useTemplateVal('primaryColor');
  const secondary = useTemplateVal('secondaryColor');
  const secondaryFont = useTemplateVal('secondaryFontColor');
  const primaryFont = useTemplateVal('primaryFontColor');

  const { children } = props;

  const value = {
    globalTheme: {
      primaryColor: primary,
      secondaryColor: secondary,
      primaryFontColor: primaryFont,
      secondaryFontColor: secondaryFont,
    },
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextParent;

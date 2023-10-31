/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';
import { useTemplateVal } from '@dsplay/react-template-utils';

export const ThemeContext = createContext({
  globalTheme: {
    primaryColor: '',
    secondaryColor: '',
  },
});

const ThemeContextParent = (props) => {
  const primary = useTemplateVal('primaryColor');
  const secondary = useTemplateVal('secondaryColor');

  const { children } = props;

  const value = {
    globalTheme: {
      primaryColor: primary,
      secondaryColor: secondary,
    },
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextParent;

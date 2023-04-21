/**********************************************************************
 *
 *   Component hook generated by Quest
 *
 *   Code Logic for the component goes in this hook
 *   To setup bindings that use the data here or call the functions here, use the Quest editor
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { styled } from '@mui/material/styles';
import questTheme from 'src/MyDesignSystemLightTheme';

const useHeader = () => {
  let data: any = {
    primaryDark: questTheme.palette.primary.dark
  };

  let fns: any = {};
  return { data, fns };
};

export default useHeader;

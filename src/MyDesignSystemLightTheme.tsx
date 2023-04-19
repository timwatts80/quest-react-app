import React from 'react';

import { createTheme } from '@mui/material/styles';

import SvgIcon from '@mui/material/SvgIcon';

import { ReactComponent as CheckBoxOutlineBlank } from 'src/assets/images/_CheckBoxOutlineBlankOutlined.svg';
import { ReactComponent as IndeterminateCheckBo } from 'src/assets/images/_IndeterminateCheckBoxFilled.svg';
import { ReactComponent as CheckBoxFilled } from 'src/assets/images/_CheckBoxFilled.svg';
import { ReactComponent as ErrorOutline } from 'src/assets/images/_ErrorOutline.svg';
import { ReactComponent as WarningAmberOutlined } from 'src/assets/images/_WarningAmberOutlined.svg';
import { ReactComponent as InfoOutlined } from 'src/assets/images/_InfoOutlined.svg';
import { ReactComponent as CheckCircleOutlined } from 'src/assets/images/_CheckCircleOutlined.svg';

const globalTheme: any = createTheme({
  palette: {
    mode: 'light',
    divider: 'rgba(0, 0, 0, 0.12)',
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    primary: {
      main: 'rgba(16, 84, 138, 1)',
      dark: 'rgba(0, 60, 110, 1)',
      light: 'rgba(66, 165, 245, 1)',
      contrast: 'rgba(255, 255, 255, 1)',
      states: {
        hover: 'rgba(16, 84, 138, 0.04)',
        selected: 'rgba(16, 84, 138, 0.08)',
        focus: 'rgba(16, 84, 138, 0.12)',
        focusVisible: 'rgba(16, 84, 138, 0.3)',
        outlinedBorder: 'rgba(16, 84, 138, 0.5)',
      },
    },
    secondary: {
      main: 'rgba(156, 39, 176, 1)',
      dark: 'rgba(123, 31, 162, 1)',
      light: 'rgba(186, 104, 200, 1)',
      contrast: 'rgba(255, 255, 255, 1)',
      states: {
        hover: 'rgba(156, 39, 176, 0.04)',
        selected: 'rgba(156, 39, 176, 0.08)',
        focus: 'rgba(156, 39, 176, 0.12)',
        focusVisibile: 'rgba(156, 39, 176, 0.3)',
        outlinedBorder: 'rgba(156, 39, 176, 0.5)',
      },
    },
    action: {
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      focus: 'rgba(0, 0, 0, 0.12)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      active: 'rgba(0, 0, 0, 0.56)',
    },
    error: {
      main: 'rgba(211, 47, 47, 1)',
      dark: 'rgba(198, 40, 40, 1)',
      light: 'rgba(239, 83, 80, 1)',
      contrast: 'rgba(255, 255, 255, 1)',
      states: {
        hover: 'rgba(211, 47, 47, 0.04)',
        selected: 'rgba(211, 47, 47, 0.08)',
        focusVisible: 'rgba(211, 47, 47, 0.3)',
        outlinedBorder: 'rgba(211, 47, 47, 0.5)',
      },
    },
    warning: {
      main: 'rgba(237, 108, 2, 1)',
      dark: 'rgba(230, 81, 0, 1)',
      light: 'rgba(255, 152, 0, 1)',
      contrast: 'rgba(255, 255, 255, 1)',
      states: {
        hovered: 'rgba(237, 108, 2, 0.04)',
        selected: 'rgba(237, 108, 2, 0.04)',
        focusVisible: 'rgba(237, 108, 2, 0.3)',
        outlinedBorder: 'rgba(237, 108, 2, 0.5)',
      },
    },
    info: {
      main: 'rgba(2, 136, 209, 1)',
      dark: 'rgba(1, 87, 155, 1)',
      light: 'rgba(3, 169, 244, 1)',
      contrast: 'rgba(255, 255, 255, 1)',
      states: {
        hover: 'rgba(2, 136, 209, 0.04)',
        selected: 'rgba(2, 136, 209, 0.08)',
        focusVisible: 'rgba(2, 136, 209, 0.3)',
        outlinedBorder: 'rgba(2, 136, 209, 0.5)',
      },
    },
    success: {
      main: 'rgba(46, 125, 50, 1)',
      dark: 'rgba(27, 94, 32, 1)',
      light: 'rgba(76, 175, 80, 1)',
      contrast: 'rgba(255, 255, 255, 1)',
      states: {
        hover: 'rgba(46, 125, 50, 0.04)',
        selected: 'rgba(46, 125, 50, 0.08)',
        focusVisible: 'rgba(46, 125, 50, 0.3)',
        outlinedBorder: 'rgba(46, 125, 50, 0.5)',
      },
    },
    background: {
      default: 'rgba(255, 255, 255, 1)',
      'paper-elevation-0': 'rgba(255, 255, 255, 1)',
      'paper-elevation-1': 'rgba(255, 255, 255, 1)',
      'paper-elevation-2': 'rgba(255, 255, 255, 1)',
      'paper-elevation-3': 'rgba(255, 255, 255, 1)',
      'paper-elevation-4': 'rgba(255, 255, 255, 1)',
      'paper-elevation-5': 'rgba(255, 255, 255, 1)',
      'paper-elevation-6': 'rgba(255, 255, 255, 1)',
      'paper-elevation-7': 'rgba(255, 255, 255, 1)',
      'paper-elevation-8': 'rgba(255, 255, 255, 1)',
      'paper-elevation-9': 'rgba(255, 255, 255, 1)',
      'paper-elevation-10': 'rgba(255, 255, 255, 1)',
      'paper-elevation-11': 'rgba(255, 255, 255, 1)',
      'paper-elevation-12': 'rgba(255, 255, 255, 1)',
      'paper-elevation-13': 'rgba(255, 255, 255, 1)',
      'paper-elevation-14': 'rgba(255, 255, 255, 1)',
      'paper-elevation-15': 'rgba(255, 255, 255, 1)',
      'paper-elevation-16': 'rgba(255, 255, 255, 1)',
      'paper-elevation-17': 'rgba(255, 255, 255, 1)',
      'paper-elevation-18': 'rgba(255, 255, 255, 1)',
      'paper-elevation-19': 'rgba(255, 255, 255, 1)',
      'paper-elevation-20': 'rgba(255, 255, 255, 1)',
      'paper-elevation-21': 'rgba(255, 255, 255, 1)',
      'paper-elevation-22': 'rgba(255, 255, 255, 1)',
      'paper-elevation-23': 'rgba(255, 255, 255, 1)',
      'paper-elevation-24': 'rgba(255, 255, 255, 1)',
    },
    _inherit: {
      white: {
        main: 'rgba(255, 255, 255, 1)',
        hover: 'rgba(255, 255, 255, 0.04)',
        selected: 'rgba(255, 255, 255, 0.08)',
        focus: 'rgba(255, 255, 255, 0.12)',
        focusVisible: 'rgba(255, 255, 255, 0.3)',
      },
      textPrimary: {
        main: 'rgba(0, 0, 0, 0.87)',
        hover: 'rgba(0, 0, 0, 0.04)',
        selected: 'rgba(0, 0, 0, 0.08)',
        focus: 'rgba(0, 0, 0, 0.12)',
        focusVisible: 'rgba(0, 0, 0, 0.3)',
      },
    },
    alert: {
      errorContent: 'rgba(84, 19, 19, 1)',
      errorFill: 'rgba(251, 234, 234, 1)',
      warningContent: 'rgba(95, 43, 1, 1)',
      warningFill: 'rgba(253, 240, 230, 1)',
      infoContent: 'rgba(1, 54, 84, 1)',
      infoFill: 'rgba(230, 243, 250, 1)',
      successContent: 'rgba(18, 50, 20, 1)',
      successFill: 'rgba(234, 242, 234, 1)',
    },
    appbar: {
      defaultFill: 'rgba(245, 245, 245, 1)',
    },
    avatar: {
      fill: 'rgba(189, 189, 189, 1)',
    },
    backdrop: {
      fill: 'rgba(0, 0, 0, 0.5)',
    },
    breadcrumbs: {
      collapseFill: 'rgba(245, 245, 245, 1)',
    },
    chip: {
      defaultCloseFill: 'rgba(0, 0, 0, 1)',
      defaultHoverFill: 'rgba(0, 0, 0, 0.12)',
      defaultFocusFill: 'rgba(255, 255, 255, 0.2)',
      defaultEnabledBorder: 'rgba(97, 97, 97, 1)',
    },
    input: {
      standard: {
        enabledBorder: 'rgba(0, 0, 0, 0.42)',
        hoverBorder: 'rgba(0, 0, 0, 1)',
      },
      filled: {
        enabledFill: 'rgba(0, 0, 0, 0.06)',
        hoverFill: 'rgba(0, 0, 0, 0.09)',
      },
      outlined: {
        enabledBorder: 'rgba(0, 0, 0, 0.23)',
        hoverBorder: 'rgba(0, 0, 0, 1)',
      },
    },
    rating: {
      enabledBorder: 'rgba(0, 0, 0, 0.23)',
    },
    colors: {
      grey: {
        '50': 'rgba(250, 250, 250, 1)',
        '100': 'rgba(245, 245, 245, 1)',
        '200': 'rgba(238, 238, 238, 1)',
        '300': 'rgba(224, 224, 224, 1)',
        '400': 'rgba(189, 189, 189, 1)',
        '500': 'rgba(158, 158, 158, 1)',
        '600': 'rgba(117, 117, 117, 1)',
        '700': 'rgba(97, 97, 97, 1)',
        '800': 'rgba(66, 66, 66, 1)',
        '900': 'rgba(33, 33, 33, 1)',
        A100: 'rgba(213, 213, 213, 1)',
        A200: 'rgba(170, 170, 170, 1)',
        A400: 'rgba(97, 97, 97, 1)',
        A700: 'rgba(48, 48, 48, 1)',
      },
      indigo: {
        '50': 'rgba(232, 234, 246, 1)',
        '100': 'rgba(197, 202, 233, 1)',
        '200': 'rgba(159, 168, 218, 1)',
        '300': 'rgba(121, 134, 203, 1)',
        '400': 'rgba(92, 107, 192, 1)',
        '500': 'rgba(63, 81, 181, 1)',
        '600': 'rgba(57, 73, 171, 1)',
        '700': 'rgba(48, 63, 159, 1)',
        '800': 'rgba(40, 53, 147, 1)',
        '900': 'rgba(26, 35, 126, 1)',
        A100: 'rgba(140, 158, 255, 1)',
        A200: 'rgba(83, 109, 254, 1)',
        A400: 'rgba(61, 90, 254, 1)',
        A700: 'rgba(48, 79, 254, 1)',
      },
      deepPurple: {
        '50': 'rgba(237, 231, 246, 1)',
        '100': 'rgba(209, 196, 233, 1)',
        '200': 'rgba(179, 157, 219, 1)',
        '300': 'rgba(149, 117, 205, 1)',
        '400': 'rgba(126, 87, 194, 1)',
        '500': 'rgba(103, 58, 183, 1)',
        '600': 'rgba(94, 53, 177, 1)',
        '700': 'rgba(81, 45, 168, 1)',
        '800': 'rgba(69, 39, 160, 1)',
        '900': 'rgba(49, 27, 146, 1)',
        A100: 'rgba(179, 136, 255, 1)',
        A200: 'rgba(124, 77, 255, 1)',
        A400: 'rgba(101, 31, 255, 1)',
        A700: 'rgba(98, 0, 234, 1)',
      },
      amber: {
        '50': 'rgba(255, 248, 225, 1)',
        '100': 'rgba(255, 236, 179, 1)',
        '200': 'rgba(255, 224, 130, 1)',
        '300': 'rgba(255, 213, 79, 1)',
        '400': 'rgba(255, 202, 40, 1)',
        '500': 'rgba(255, 193, 7, 1)',
        '600': 'rgba(255, 179, 0, 1)',
        '700': 'rgba(255, 160, 0, 1)',
        '800': 'rgba(255, 143, 0, 1)',
        '900': 'rgba(255, 111, 0, 1)',
        A100: 'rgba(255, 229, 127, 1)',
        A200: 'rgba(255, 215, 64, 1)',
        A400: 'rgba(255, 196, 0, 1)',
        A700: 'rgba(255, 171, 0, 1)',
      },
      orange: {
        '50': 'rgba(255, 243, 224, 1)',
        '100': 'rgba(255, 224, 178, 1)',
        '200': 'rgba(255, 204, 128, 1)',
        '300': 'rgba(255, 183, 77, 1)',
        '400': 'rgba(255, 167, 38, 1)',
        '500': 'rgba(255, 152, 0, 1)',
        '600': 'rgba(251, 140, 0, 1)',
        '700': 'rgba(245, 124, 0, 1)',
        '800': 'rgba(239, 108, 0, 1)',
        '900': 'rgba(230, 81, 0, 1)',
        A100: 'rgba(255, 209, 128, 1)',
        A200: 'rgba(255, 171, 64, 1)',
        A400: 'rgba(255, 145, 0, 1)',
        A700: 'rgba(255, 109, 0, 1)',
      },
      pink: {
        '50': 'rgba(252, 228, 236, 1)',
        '100': 'rgba(248, 187, 208, 1)',
        '200': 'rgba(244, 143, 177, 1)',
        '300': 'rgba(240, 98, 146, 1)',
        '400': 'rgba(236, 64, 122, 1)',
        '500': 'rgba(233, 30, 99, 1)',
        '600': 'rgba(216, 27, 96, 1)',
        '700': 'rgba(194, 24, 91, 1)',
        '800': 'rgba(173, 20, 87, 1)',
        '900': 'rgba(136, 14, 79, 1)',
        A100: 'rgba(255, 128, 171, 1)',
        A200: 'rgba(255, 64, 129, 1)',
        A400: 'rgba(245, 0, 87, 1)',
        A700: 'rgba(197, 17, 98, 1)',
      },
      deepOrange: {
        '50': 'rgba(251, 233, 231, 1)',
        '100': 'rgba(255, 204, 188, 1)',
        '200': 'rgba(255, 171, 145, 1)',
        '300': 'rgba(255, 138, 101, 1)',
        '400': 'rgba(255, 112, 67, 1)',
        '500': 'rgba(255, 87, 34, 1)',
        '600': 'rgba(244, 81, 30, 1)',
        '700': 'rgba(230, 74, 25, 1)',
        '800': 'rgba(216, 67, 21, 1)',
        '900': 'rgba(191, 54, 12, 1)',
        A100: 'rgba(255, 158, 128, 1)',
        A200: 'rgba(255, 110, 64, 1)',
        A400: 'rgba(255, 61, 0, 1)',
        A700: 'rgba(221, 44, 0, 1)',
      },
      green: {
        '50': 'rgba(232, 245, 233, 1)',
        '100': 'rgba(200, 230, 201, 1)',
        '200': 'rgba(165, 214, 167, 1)',
        '300': 'rgba(129, 199, 132, 1)',
        '400': 'rgba(102, 187, 106, 1)',
        '500': 'rgba(76, 175, 80, 1)',
        '600': 'rgba(67, 160, 71, 1)',
        '700': 'rgba(56, 142, 60, 1)',
        '800': 'rgba(46, 125, 50, 1)',
        '900': 'rgba(27, 94, 32, 1)',
        A100: 'rgba(185, 246, 202, 1)',
        A200: 'rgba(105, 240, 174, 1)',
        A400: 'rgba(0, 230, 118, 1)',
        A700: 'rgba(0, 200, 83, 1)',
      },
      red: {
        '50': 'rgba(254, 235, 238, 1)',
        '100': 'rgba(254, 205, 210, 1)',
        '200': 'rgba(239, 154, 154, 1)',
        '300': 'rgba(229, 115, 115, 1)',
        '400': 'rgba(239, 83, 80, 1)',
        '500': 'rgba(244, 67, 54, 1)',
        '600': 'rgba(229, 57, 53, 1)',
        '700': 'rgba(211, 47, 47, 1)',
        '800': 'rgba(198, 40, 40, 1)',
        '900': 'rgba(183, 28, 28, 1)',
        A100: 'rgba(255, 138, 128, 1)',
        A200: 'rgba(255, 82, 82, 1)',
        A400: 'rgba(255, 23, 68, 1)',
        A700: 'rgba(213, 0, 0, 1)',
      },
      lightGreen: {
        '50': 'rgba(241, 248, 233, 1)',
        '100': 'rgba(220, 237, 200, 1)',
        '200': 'rgba(197, 225, 165, 1)',
        '300': 'rgba(174, 213, 129, 1)',
        '400': 'rgba(139, 195, 74, 1)',
        '500': 'rgba(139, 195, 74, 1)',
        '600': 'rgba(124, 179, 66, 1)',
        '700': 'rgba(104, 159, 56, 1)',
        '800': 'rgba(85, 139, 47, 1)',
        '900': 'rgba(51, 105, 30, 1)',
        A100: 'rgba(204, 255, 144, 1)',
        A200: 'rgba(178, 255, 89, 1)',
        A400: 'rgba(118, 255, 3, 1)',
        A700: 'rgba(100, 221, 23, 1)',
      },
      purple: {
        '50': 'rgba(243, 229, 245, 1)',
        '100': 'rgba(225, 190, 231, 1)',
        '200': 'rgba(206, 147, 216, 1)',
        '300': 'rgba(186, 104, 200, 1)',
        '400': 'rgba(171, 71, 188, 1)',
        '500': 'rgba(156, 39, 176, 1)',
        '600': 'rgba(142, 36, 170, 1)',
        '700': 'rgba(123, 31, 162, 1)',
        '800': 'rgba(106, 27, 154, 1)',
        '900': 'rgba(74, 20, 140, 1)',
        A100: 'rgba(234, 128, 252, 1)',
        A200: 'rgba(224, 64, 251, 1)',
        A400: 'rgba(213, 0, 249, 1)',
        A700: 'rgba(170, 0, 255, 1)',
      },
      lime: {
        '50': 'rgba(249, 251, 231, 1)',
        '100': 'rgba(240, 244, 195, 1)',
        '200': 'rgba(230, 238, 156, 1)',
        '300': 'rgba(220, 231, 117, 1)',
        '400': 'rgba(212, 225, 87, 1)',
        '500': 'rgba(205, 220, 57, 1)',
        '600': 'rgba(192, 202, 51, 1)',
        '700': 'rgba(175, 180, 43, 1)',
        '800': 'rgba(158, 157, 36, 1)',
        '900': 'rgba(130, 119, 23, 1)',
        A100: 'rgba(244, 255, 129, 1)',
        A200: 'rgba(238, 255, 65, 1)',
        A400: 'rgba(198, 255, 0, 1)',
        A700: 'rgba(174, 234, 0, 1)',
      },
      lightBlue: {
        '50': 'rgba(225, 245, 254, 1)',
        '100': 'rgba(179, 229, 252, 1)',
        '200': 'rgba(129, 212, 250, 1)',
        '300': 'rgba(79, 195, 247, 1)',
        '400': 'rgba(41, 182, 246, 1)',
        '500': 'rgba(3, 169, 244, 1)',
        '600': 'rgba(3, 155, 229, 1)',
        '700': 'rgba(2, 136, 209, 1)',
        '800': 'rgba(2, 119, 189, 1)',
        '900': 'rgba(1, 87, 155, 1)',
        A100: 'rgba(128, 216, 255, 1)',
        A200: 'rgba(64, 196, 255, 1)',
        A400: 'rgba(0, 176, 255, 1)',
        A700: 'rgba(0, 145, 234, 1)',
      },
      yellow: {
        '50': 'rgba(255, 253, 231, 1)',
        '100': 'rgba(255, 249, 196, 1)',
        '200': 'rgba(255, 245, 157, 1)',
        '300': 'rgba(255, 241, 118, 1)',
        '400': 'rgba(255, 238, 88, 1)',
        '500': 'rgba(255, 235, 59, 1)',
        '600': 'rgba(253, 216, 53, 1)',
        '700': 'rgba(251, 192, 45, 1)',
        '800': 'rgba(249, 168, 37, 1)',
        '900': 'rgba(245, 127, 23, 1)',
        A100: 'rgba(255, 255, 141, 1)',
        A200: 'rgba(255, 255, 0, 1)',
        A400: 'rgba(255, 234, 0, 1)',
        A700: 'rgba(255, 214, 0, 1)',
      },
      cyan: {
        '50': 'rgba(224, 247, 250, 1)',
        '100': 'rgba(178, 235, 242, 1)',
        '200': 'rgba(128, 222, 234, 1)',
        '300': 'rgba(77, 208, 225, 1)',
        '400': 'rgba(38, 198, 218, 1)',
        '500': 'rgba(0, 188, 212, 1)',
        '600': 'rgba(0, 172, 193, 1)',
        '700': 'rgba(0, 151, 167, 1)',
        '800': 'rgba(0, 131, 143, 1)',
        '900': 'rgba(0, 96, 100, 1)',
        A100: 'rgba(132, 255, 255, 1)',
        A200: 'rgba(24, 255, 255, 1)',
        A400: 'rgba(0, 229, 255, 1)',
        A700: 'rgba(0, 184, 212, 1)',
      },
      teal: {
        '50': 'rgba(224, 242, 241, 1)',
        '100': 'rgba(178, 223, 219, 1)',
        '200': 'rgba(128, 203, 196, 1)',
        '300': 'rgba(77, 182, 172, 1)',
        '400': 'rgba(38, 166, 154, 1)',
        '500': 'rgba(0, 150, 136, 1)',
        '600': 'rgba(0, 137, 123, 1)',
        '700': 'rgba(0, 121, 107, 1)',
        '800': 'rgba(0, 105, 92, 1)',
        '900': 'rgba(0, 77, 64, 1)',
        A100: 'rgba(167, 255, 235, 1)',
        A200: 'rgba(100, 255, 218, 1)',
        A400: 'rgba(29, 233, 182, 1)',
        A700: 'rgba(0, 191, 165, 1)',
      },
      blue: {
        '50': 'rgba(227, 242, 253, 1)',
        '100': 'rgba(187, 222, 251, 1)',
        '200': 'rgba(144, 202, 249, 1)',
        '300': 'rgba(25, 118, 210, 1)',
        '400': 'rgba(66, 165, 245, 1)',
        '500': 'rgba(33, 150, 243, 1)',
        '600': 'rgba(30, 136, 229, 1)',
        '700': 'rgba(0, 87, 178, 1)',
        '800': 'rgba(21, 101, 192, 1)',
        '900': 'rgba(13, 71, 161, 1)',
        A100: 'rgba(130, 177, 255, 1)',
        A200: 'rgba(68, 138, 255, 1)',
        A400: 'rgba(41, 121, 255, 1)',
        A700: 'rgba(41, 98, 255, 1)',
      },
      blueGrey: {
        '50': 'rgba(236, 239, 241, 1)',
        '100': 'rgba(207, 216, 220, 1)',
        '200': 'rgba(176, 190, 197, 1)',
        '300': 'rgba(144, 164, 174, 1)',
        '400': 'rgba(120, 144, 156, 1)',
        '500': 'rgba(96, 125, 139, 1)',
        '600': 'rgba(84, 110, 122, 1)',
        '700': 'rgba(69, 90, 100, 1)',
        '800': 'rgba(55, 71, 79, 1)',
        '900': 'rgba(38, 50, 56, 1)',
      },
    },
    switch: {
      knobFill: 'rgba(250, 250, 250, 1)',
      slideFill: 'rgba(0, 0, 0, 1)',
    },
  },
  typography: {
    typography: {
      h1: {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 300,
        fontSize: '96px',
        letterSpacing: '-1.44px',
        textDecoration: 'none',
        lineHeight: '116.70000553131104%',
        textTransform: 'none',
      },
      h2: {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 300,
        fontSize: '60px',
        letterSpacing: '-0.3px',
        textDecoration: 'none',
        lineHeight: '120.00000476837158%',
        textTransform: 'none',
      },
      h3: {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '48px',
        letterSpacing: '0px',
        textDecoration: 'none',
        lineHeight: '116.70000553131104%',
        textTransform: 'none',
      },
      h4: {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '34px',
        letterSpacing: '0.085px',
        textDecoration: 'none',
        lineHeight: '123.50000143051147%',
        textTransform: 'none',
      },
      h5: {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '24px',
        letterSpacing: '0px',
        textDecoration: 'none',
        lineHeight: '133.39999914169312%',
        textTransform: 'none',
      },
      h6: {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: '20px',
        letterSpacing: '0.030000001192092896px',
        textDecoration: 'none',
        lineHeight: '160.0000023841858%',
        textTransform: 'none',
      },
      body1: {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '16px',
        letterSpacing: '0.024000000953674317px',
        textDecoration: 'none',
        lineHeight: '150%',
        textTransform: 'none',
      },
      body2: {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '14px',
        letterSpacing: '0.023800000250339508px',
        textDecoration: 'none',
        lineHeight: '142.99999475479126%',
        textTransform: 'none',
      },
      subtitle1: {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '16px',
        letterSpacing: '0.024000000953674317px',
        textDecoration: 'none',
        lineHeight: '175%',
        textTransform: 'none',
      },
      subtitle2: {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: '14px',
        letterSpacing: '0.014000000208616257px',
        textDecoration: 'none',
        lineHeight: '157.00000524520874%',
        textTransform: 'none',
      },
      subtitle3: {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 600,
        fontSize: '16px',
        letterSpacing: '0.024000000953674317px',
        textDecoration: 'none',
        lineHeight: '175%',
        textTransform: 'none',
      },
      overline1: {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '12px',
        letterSpacing: '0.12px',
        textDecoration: 'none',
        lineHeight: '266.00000858306885%',
        textTransform: 'uppercase',
      },
      caption: {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '12px',
        letterSpacing: '0.04800000071525574px',
        textDecoration: 'none',
        lineHeight: '165.9999966621399%',
        textTransform: 'none',
      },
    },
    components: {
      'alert-title': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: '16px',
        letterSpacing: '0.024000000953674317px',
        textDecoration: 'none',
        lineHeight: '150%',
        textTransform: 'none',
      },
      'alert-description': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: '14px',
        letterSpacing: '0.021000000834465026px',
        textDecoration: 'none',
        lineHeight: '142.99999475479126%',
        textTransform: 'none',
      },
      'avatar-initials': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '20px',
        letterSpacing: '0.02800000011920929px',
        textDecoration: 'none',
        lineHeight: '20px',
        textTransform: 'none',
      },
      'badge-label': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: '12px',
        letterSpacing: '0.016800000071525573px',
        textDecoration: 'none',
        lineHeight: '20px',
        textTransform: 'none',
      },
      'button-large': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: '15px',
        letterSpacing: '0.06900000125169754px',
        textDecoration: 'none',
        lineHeight: '26px',
        textTransform: 'uppercase',
      },
      'button-medium': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: '14px',
        letterSpacing: '0.056000000834465026px',
        textDecoration: 'none',
        lineHeight: '24px',
        textTransform: 'uppercase',
      },
      'button-small': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: '13px',
        letterSpacing: '0.05980000108480454px',
        textDecoration: 'none',
        lineHeight: '22px',
        textTransform: 'uppercase',
      },
      'input-label': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '12px',
        letterSpacing: '0.01800000071525574px',
        textDecoration: 'none',
        lineHeight: '12px',
        textTransform: 'none',
      },
      'helper-text': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '12px',
        letterSpacing: '0.04800000071525574px',
        textDecoration: 'none',
        lineHeight: '165.9999966621399%',
        textTransform: 'none',
      },
      'input-text': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '16px',
        letterSpacing: '0.024000000953674317px',
        textDecoration: 'none',
        lineHeight: '24px',
        textTransform: 'none',
      },
      'chip-label': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '13px',
        letterSpacing: '0.020799999535083772px',
        textDecoration: 'none',
        lineHeight: '18px',
        textTransform: 'none',
      },
      'tooltip-label': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: '10px',
        letterSpacing: '0px',
        textDecoration: 'none',
        lineHeight: '14px',
        textTransform: 'none',
      },
      'table-header': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: '14px',
        letterSpacing: '0.023800000250339508px',
        textDecoration: 'none',
        lineHeight: '24px',
        textTransform: 'none',
      },
      'menu-item': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '16px',
        letterSpacing: '0.024000000953674317px',
        textDecoration: 'none',
        lineHeight: '150%',
        textTransform: 'none',
      },
      'menu-item-dense': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '14px',
        letterSpacing: '0.023800000250339508px',
        textDecoration: 'none',
        lineHeight: '24px',
        textTransform: 'none',
      },
      'list-subheader': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: '14px',
        letterSpacing: '0.014000000208616257px',
        textDecoration: 'none',
        lineHeight: '48px',
        textTransform: 'none',
      },
      'bottom-navigation-active-label': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '14px',
        letterSpacing: '0.056000000834465026px',
        textDecoration: 'none',
        lineHeight: '165.9999966621399%',
        textTransform: 'none',
      },
      tab: {
        fontStyle: 'normal',
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '12px',
        letterSpacing: '0px',
        textDecoration: 'none',
        textTransform: 'none',
      },
      'tab-header': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 600,
        fontSize: '16px',
        letterSpacing: '0.024000000953674317px',
        textDecoration: 'none',
        lineHeight: '175%',
        textTransform: 'uppercase',
      },
      'tab-subheader': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '12px',
        letterSpacing: '0.01800000071525574px',
        textDecoration: 'none',
        lineHeight: '150%',
        textTransform: 'none',
      },
    },
  },
  customShadows: {
    elevation: {
      '1': {
        boxShadow:
          '0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)',
      },
      '2': {
        boxShadow:
          '0px 3px 1px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
      },
      '3': {
        boxShadow:
          '0px 3px 3px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12)',
      },
      '4': {
        boxShadow:
          '0px 2px 4px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12)',
      },
      '5': {
        boxShadow:
          '0px 3px 5px rgba(0, 0, 0, 0.2), 0px 5px 8px rgba(0, 0, 0, 0.14), 0px 1px 14px rgba(0, 0, 0, 0.12)',
      },
      '6': {
        boxShadow:
          '0px 3px 5px rgba(0, 0, 0, 0.2), 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12)',
      },
      '7': {
        boxShadow:
          '0px 4px 5px rgba(0, 0, 0, 0.2), 0px 7px 10px rgba(0, 0, 0, 0.14), 0px 2px 16px rgba(0, 0, 0, 0.12)',
      },
      '8': {
        boxShadow:
          '0px 5px 5px rgba(0, 0, 0, 0.2), 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12)',
      },
      '9': {
        boxShadow:
          '0px 5px 6px rgba(0, 0, 0, 0.2), 0px 9px 12px rgba(0, 0, 0, 0.14), 0px 3px 16px rgba(0, 0, 0, 0.12)',
      },
      '10': {
        boxShadow:
          '0px 6px 6px rgba(0, 0, 0, 0.2), 0px 10px 14px rgba(0, 0, 0, 0.14), 0px 4px 18px rgba(0, 0, 0, 0.12)',
      },
      '11': {
        boxShadow:
          '0px 6px 7px rgba(0, 0, 0, 0.2), 0px 11px 15px rgba(0, 0, 0, 0.14), 0px 4px 20px rgba(0, 0, 0, 0.12)',
      },
      '12': {
        boxShadow:
          '0px 7px 8px rgba(0, 0, 0, 0.2), 0px 12px 17px rgba(0, 0, 0, 0.14), 0px 5px 22px rgba(0, 0, 0, 0.12)',
      },
      '13': {
        boxShadow:
          '0px 7px 8px rgba(0, 0, 0, 0.2), 0px 13px 19px rgba(0, 0, 0, 0.14), 0px 5px 24px rgba(0, 0, 0, 0.12)',
      },
      '14': {
        boxShadow:
          '0px 7px 9px rgba(0, 0, 0, 0.2), 0px 14px 21px rgba(0, 0, 0, 0.14), 0px 5px 26px rgba(0, 0, 0, 0.12)',
      },
      '15': {
        boxShadow:
          '0px 8px 9px rgba(0, 0, 0, 0.2), 0px 15px 22px rgba(0, 0, 0, 0.14), 0px 6px 28px rgba(0, 0, 0, 0.12)',
      },
      '16': {
        boxShadow:
          '0px 8px 10px rgba(0, 0, 0, 0.2), 0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12)',
      },
      '17': {
        boxShadow:
          '0px 8px 11px rgba(0, 0, 0, 0.2), 0px 17px 26px rgba(0, 0, 0, 0.14), 0px 6px 32px rgba(0, 0, 0, 0.12)',
      },
      '18': {
        boxShadow:
          '0px 9px 11px rgba(0, 0, 0, 0.2), 0px 18px 28px rgba(0, 0, 0, 0.14), 0px 7px 34px rgba(0, 0, 0, 0.12)',
      },
      '19': {
        boxShadow:
          '0px 9px 12px rgba(0, 0, 0, 0.2), 0px 19px 29px rgba(0, 0, 0, 0.14), 0px 7px 36px rgba(0, 0, 0, 0.12)',
      },
      '20': {
        boxShadow:
          '0px 10px 13px rgba(0, 0, 0, 0.2), 0px 20px 31px rgba(0, 0, 0, 0.14), 0px 8px 38px rgba(0, 0, 0, 0.12)',
      },
      '21': {
        boxShadow:
          '0px 10px 13px rgba(0, 0, 0, 0.2), 0px 21px 33px rgba(0, 0, 0, 0.14), 0px 8px 40px rgba(0, 0, 0, 0.12)',
      },
      '22': {
        boxShadow:
          '0px 10px 14px rgba(0, 0, 0, 0.2), 0px 22px 35px rgba(0, 0, 0, 0.14), 0px 8px 42px rgba(0, 0, 0, 0.12)',
      },
      '23': {
        boxShadow:
          '0px 11px 14px rgba(0, 0, 0, 0.2), 0px 23px 36px rgba(0, 0, 0, 0.14), 0px 9px 44px rgba(0, 0, 0, 0.12)',
      },
      '24': {
        boxShadow:
          '0px 11px 15px rgba(0, 0, 0, 0.2), 0px 24px 38px rgba(0, 0, 0, 0.14), 0px 9px 46px rgba(0, 0, 0, 0.12)',
      },
      outlined: {
        boxShadow: '0px 0px 0px rgba(224, 224, 224, 1)',
      },
    },
  },
} as any);

const questTheme = createTheme(
  {
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiButton: {
        styleOverrides: {
          containedSizeLarge: {
            fontStyle:
              globalTheme.typography['components']['button-large'].fontStyle,
            fontFamily:
              globalTheme.typography['components']['button-large'].fontFamily,
            fontWeight:
              globalTheme.typography['components']['button-large'].fontWeight,
            fontSize:
              globalTheme.typography['components']['button-large'].fontSize,
            letterSpacing:
              globalTheme.typography['components']['button-large']
                .letterSpacing,
            lineHeight:
              globalTheme.typography['components']['button-large'].lineHeight,
            textDecoration:
              globalTheme.typography['components']['button-large']
                .textDecoration,
            textTransform:
              globalTheme.typography['components']['button-large']
                .textTransform,
            padding: `8px 22px`,
            borderRadius: `4px`,
            height: `42px`,
          },
          containedSizeMedium: {
            fontStyle:
              globalTheme.typography['components']['button-medium'].fontStyle,
            fontFamily:
              globalTheme.typography['components']['button-medium'].fontFamily,
            fontWeight:
              globalTheme.typography['components']['button-medium'].fontWeight,
            fontSize:
              globalTheme.typography['components']['button-medium'].fontSize,
            letterSpacing:
              globalTheme.typography['components']['button-medium']
                .letterSpacing,
            lineHeight:
              globalTheme.typography['components']['button-medium'].lineHeight,
            textDecoration:
              globalTheme.typography['components']['button-medium']
                .textDecoration,
            textTransform:
              globalTheme.typography['components']['button-medium']
                .textTransform,
            padding: `6px 16px`,
            borderRadius: `4px`,
            height: `36px`,
          },
          containedSizeSmall: {
            fontStyle:
              globalTheme.typography['components']['button-small'].fontStyle,
            fontFamily:
              globalTheme.typography['components']['button-small'].fontFamily,
            fontWeight:
              globalTheme.typography['components']['button-small'].fontWeight,
            fontSize:
              globalTheme.typography['components']['button-small'].fontSize,
            letterSpacing:
              globalTheme.typography['components']['button-small']
                .letterSpacing,
            lineHeight:
              globalTheme.typography['components']['button-small'].lineHeight,
            textDecoration:
              globalTheme.typography['components']['button-small']
                .textDecoration,
            textTransform:
              globalTheme.typography['components']['button-small']
                .textTransform,
            padding: `4px 10px`,
            borderRadius: `4px`,
            height: `30px`,
          },
          containedPrimary: {
            backgroundColor: globalTheme.palette['primary']['main'],
            boxShadow: globalTheme.customShadows['elevation']['2'].boxShadow,
            color: `rgba(255, 255, 255, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['primary']['dark'],
              boxShadow: globalTheme.customShadows['elevation']['4'].boxShadow,
              color: `rgba(255, 255, 255, 1)`,
            },
            '&:disabled': {
              backgroundColor:
                globalTheme.palette['action']['disabledBackground'],
              color: `rgba(0, 0, 0, 0.38)`,
            },
          },
          containedSecondary: {
            backgroundColor: globalTheme.palette['secondary']['main'],
            boxShadow: globalTheme.customShadows['elevation']['2'].boxShadow,
            color: `rgba(255, 255, 255, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['secondary']['dark'],
              boxShadow: globalTheme.customShadows['elevation']['4'].boxShadow,
              color: `rgba(255, 255, 255, 1)`,
            },
            '&:disabled': {
              backgroundColor:
                globalTheme.palette['action']['disabledBackground'],
              color: `rgba(0, 0, 0, 0.38)`,
            },
          },
          containedError: {
            backgroundColor: globalTheme.palette['error']['main'],
            boxShadow: globalTheme.customShadows['elevation']['2'].boxShadow,
            color: `rgba(255, 255, 255, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['error']['dark'],
              boxShadow: globalTheme.customShadows['elevation']['4'].boxShadow,
              color: `rgba(255, 255, 255, 1)`,
            },
            '&:disabled': {
              backgroundColor:
                globalTheme.palette['action']['disabledBackground'],
              color: `rgba(0, 0, 0, 0.38)`,
            },
          },
          containedSuccess: {
            backgroundColor: globalTheme.palette['success']['main'],
            boxShadow: globalTheme.customShadows['elevation']['2'].boxShadow,
            color: `rgba(255, 255, 255, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['success']['dark'],
              boxShadow: globalTheme.customShadows['elevation']['4'].boxShadow,
              color: `rgba(255, 255, 255, 1)`,
            },
            '&:disabled': {
              backgroundColor:
                globalTheme.palette['action']['disabledBackground'],
              color: `rgba(0, 0, 0, 0.38)`,
            },
          },
          containedInfo: {
            backgroundColor: globalTheme.palette['info']['main'],
            boxShadow: globalTheme.customShadows['elevation']['2'].boxShadow,
            color: `rgba(255, 255, 255, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['info']['dark'],
              boxShadow: globalTheme.customShadows['elevation']['4'].boxShadow,
              color: `rgba(255, 255, 255, 1)`,
            },
            '&:disabled': {
              backgroundColor:
                globalTheme.palette['action']['disabledBackground'],
              color: `rgba(0, 0, 0, 0.38)`,
            },
          },
          containedWarning: {
            backgroundColor: globalTheme.palette['warning']['main'],
            boxShadow: globalTheme.customShadows['elevation']['2'].boxShadow,
            color: `rgba(255, 255, 255, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['warning']['dark'],
              boxShadow: globalTheme.customShadows['elevation']['4'].boxShadow,
              color: `rgba(255, 255, 255, 1)`,
            },
            '&:disabled': {
              backgroundColor:
                globalTheme.palette['action']['disabledBackground'],
              color: `rgba(0, 0, 0, 0.38)`,
            },
          },
          textSizeMedium: {
            fontStyle:
              globalTheme.typography['components']['button-medium'].fontStyle,
            fontFamily:
              globalTheme.typography['components']['button-medium'].fontFamily,
            fontWeight:
              globalTheme.typography['components']['button-medium'].fontWeight,
            fontSize:
              globalTheme.typography['components']['button-medium'].fontSize,
            letterSpacing:
              globalTheme.typography['components']['button-medium']
                .letterSpacing,
            lineHeight:
              globalTheme.typography['components']['button-medium'].lineHeight,
            textDecoration:
              globalTheme.typography['components']['button-medium']
                .textDecoration,
            textTransform:
              globalTheme.typography['components']['button-medium']
                .textTransform,
            padding: `6px 8px`,
            borderRadius: `4px`,
            height: `36px`,
          },
          textSizeLarge: {
            fontStyle:
              globalTheme.typography['components']['button-large'].fontStyle,
            fontFamily:
              globalTheme.typography['components']['button-large'].fontFamily,
            fontWeight:
              globalTheme.typography['components']['button-large'].fontWeight,
            fontSize:
              globalTheme.typography['components']['button-large'].fontSize,
            letterSpacing:
              globalTheme.typography['components']['button-large']
                .letterSpacing,
            lineHeight:
              globalTheme.typography['components']['button-large'].lineHeight,
            textDecoration:
              globalTheme.typography['components']['button-large']
                .textDecoration,
            textTransform:
              globalTheme.typography['components']['button-large']
                .textTransform,
            padding: `8px 11px`,
            borderRadius: `4px`,
            height: `42px`,
          },
          textSizeSmall: {
            fontStyle:
              globalTheme.typography['components']['button-small'].fontStyle,
            fontFamily:
              globalTheme.typography['components']['button-small'].fontFamily,
            fontWeight:
              globalTheme.typography['components']['button-small'].fontWeight,
            fontSize:
              globalTheme.typography['components']['button-small'].fontSize,
            letterSpacing:
              globalTheme.typography['components']['button-small']
                .letterSpacing,
            lineHeight:
              globalTheme.typography['components']['button-small'].lineHeight,
            textDecoration:
              globalTheme.typography['components']['button-small']
                .textDecoration,
            textTransform:
              globalTheme.typography['components']['button-small']
                .textTransform,
            padding: `4px 5px`,
            borderRadius: `4px`,
            height: `30px`,
          },
          textPrimary: {
            color: `rgba(16, 84, 138, 1)`,
            '&:hover': {
              backgroundColor:
                globalTheme.palette['primary']['states']['hover'],
              color: `rgba(16, 84, 138, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              color: `rgba(0, 0, 0, 0.38)`,
            },
          },
          textSecondary: {
            color: `rgba(156, 39, 176, 1)`,
            '&:hover': {
              backgroundColor:
                globalTheme.palette['secondary']['states']['hover'],
              color: `rgba(156, 39, 176, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              color: `rgba(0, 0, 0, 0.38)`,
            },
          },
          textError: {
            color: `rgba(211, 47, 47, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['error']['states']['hover'],
              color: `rgba(211, 47, 47, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              color: `rgba(0, 0, 0, 0.38)`,
            },
          },
          textSuccess: {
            color: `rgba(46, 125, 50, 1)`,
            '&:hover': {
              backgroundColor:
                globalTheme.palette['success']['states']['hover'],
              color: `rgba(46, 125, 50, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              color: `rgba(0, 0, 0, 0.38)`,
            },
          },
          textInfo: {
            color: `rgba(2, 136, 209, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['info']['states']['hover'],
              color: `rgba(2, 136, 209, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              color: `rgba(0, 0, 0, 0.38)`,
            },
          },
          textWarning: {
            color: `rgba(237, 108, 2, 1)`,
            '&:hover': {
              backgroundColor:
                globalTheme.palette['warning']['states']['hovered'],
              color: `rgba(237, 108, 2, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              color: `rgba(0, 0, 0, 0.38)`,
            },
          },
          outlinedSizeLarge: {
            fontStyle:
              globalTheme.typography['components']['button-large'].fontStyle,
            fontFamily:
              globalTheme.typography['components']['button-large'].fontFamily,
            fontWeight:
              globalTheme.typography['components']['button-large'].fontWeight,
            fontSize:
              globalTheme.typography['components']['button-large'].fontSize,
            letterSpacing:
              globalTheme.typography['components']['button-large']
                .letterSpacing,
            lineHeight:
              globalTheme.typography['components']['button-large'].lineHeight,
            textDecoration:
              globalTheme.typography['components']['button-large']
                .textDecoration,
            textTransform:
              globalTheme.typography['components']['button-large']
                .textTransform,
            padding: `8px 22px`,
            borderRadius: `4px`,
            height: `42px`,
          },
          outlinedSizeMedium: {
            fontStyle:
              globalTheme.typography['components']['button-medium'].fontStyle,
            fontFamily:
              globalTheme.typography['components']['button-medium'].fontFamily,
            fontWeight:
              globalTheme.typography['components']['button-medium'].fontWeight,
            fontSize:
              globalTheme.typography['components']['button-medium'].fontSize,
            letterSpacing:
              globalTheme.typography['components']['button-medium']
                .letterSpacing,
            lineHeight:
              globalTheme.typography['components']['button-medium'].lineHeight,
            textDecoration:
              globalTheme.typography['components']['button-medium']
                .textDecoration,
            textTransform:
              globalTheme.typography['components']['button-medium']
                .textTransform,
            padding: `6px 16px`,
            borderRadius: `4px`,
            height: `36px`,
          },
          outlinedSizeSmall: {
            fontStyle:
              globalTheme.typography['components']['button-small'].fontStyle,
            fontFamily:
              globalTheme.typography['components']['button-small'].fontFamily,
            fontWeight:
              globalTheme.typography['components']['button-small'].fontWeight,
            fontSize:
              globalTheme.typography['components']['button-small'].fontSize,
            letterSpacing:
              globalTheme.typography['components']['button-small']
                .letterSpacing,
            lineHeight:
              globalTheme.typography['components']['button-small'].lineHeight,
            textDecoration:
              globalTheme.typography['components']['button-small']
                .textDecoration,
            textTransform:
              globalTheme.typography['components']['button-small']
                .textTransform,
            padding: `4px 10px`,
            borderRadius: `4px`,
            height: `30px`,
          },
          outlinedPrimary: {
            border: `1px solid rgba(16, 84, 138, 0.5)`,
            boxSizing: `border-box`,
            color: `rgba(16, 84, 138, 1)`,
            '&:hover': {
              backgroundColor:
                globalTheme.palette['primary']['states']['hover'],
              border: `1px solid rgba(16, 84, 138, 0.5)`,
              boxSizing: `border-box`,
              color: `rgba(16, 84, 138, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.38)`,
            },
          },
          outlinedSecondary: {
            border: `1px solid rgba(156, 39, 176, 0.5)`,
            boxSizing: `border-box`,
            color: `rgba(156, 39, 176, 1)`,
            '&:hover': {
              backgroundColor:
                globalTheme.palette['secondary']['states']['hover'],
              border: `1px solid rgba(156, 39, 176, 0.5)`,
              boxSizing: `border-box`,
              color: `rgba(156, 39, 176, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.38)`,
            },
          },
          outlinedError: {
            border: `1px solid rgba(211, 47, 47, 0.5)`,
            boxSizing: `border-box`,
            color: `rgba(211, 47, 47, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['error']['states']['hover'],
              border: `1px solid rgba(211, 47, 47, 0.5)`,
              boxSizing: `border-box`,
              color: `rgba(211, 47, 47, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.38)`,
            },
          },
          outlinedSuccess: {
            border: `1px solid rgba(46, 125, 50, 0.5)`,
            boxSizing: `border-box`,
            color: `rgba(46, 125, 50, 1)`,
            '&:hover': {
              backgroundColor:
                globalTheme.palette['success']['states']['hover'],
              border: `1px solid rgba(46, 125, 50, 0.5)`,
              boxSizing: `border-box`,
              color: `rgba(46, 125, 50, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.38)`,
            },
          },
          outlinedInfo: {
            border: `1px solid rgba(2, 136, 209, 0.5)`,
            boxSizing: `border-box`,
            color: `rgba(2, 136, 209, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['info']['states']['hover'],
              border: `1px solid rgba(2, 136, 209, 0.5)`,
              boxSizing: `border-box`,
              color: `rgba(2, 136, 209, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.38)`,
            },
          },
          outlinedWarning: {
            border: `1px solid rgba(237, 108, 2, 0.5)`,
            boxSizing: `border-box`,
            color: `rgba(237, 108, 2, 1)`,
            '&:hover': {
              backgroundColor:
                globalTheme.palette['warning']['states']['hovered'],
              border: `1px solid rgba(237, 108, 2, 0.5)`,
              boxSizing: `border-box`,
              color: `rgba(237, 108, 2, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.38)`,
            },
          },
        },
      },
      MuiCheckbox: {
        defaultProps: {
          icon: <SvgIcon component={CheckBoxOutlineBlank} />,
          indeterminateIcon: <SvgIcon component={IndeterminateCheckBo} />,
          checkedIcon: <SvgIcon component={CheckBoxFilled} />,
        },
        styleOverrides: {
          root: {
            '&:hover': {
              backgroundColor:
                globalTheme.palette['primary']['states']['hover'],
              borderRadius: `19px`,
            },
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          label: {
            color: globalTheme.palette['text']['primary'],
            fontStyle: globalTheme.typography['typography']['body1'].fontStyle,
            fontFamily:
              globalTheme.typography['typography']['body1'].fontFamily,
            fontWeight:
              globalTheme.typography['typography']['body1'].fontWeight,
            fontSize: globalTheme.typography['typography']['body1'].fontSize,
            letterSpacing:
              globalTheme.typography['typography']['body1'].letterSpacing,
            lineHeight:
              globalTheme.typography['typography']['body1'].lineHeight,
            textDecoration:
              globalTheme.typography['typography']['body1'].textDecoration,
            textTransform:
              globalTheme.typography['typography']['body1'].textTransform,
            '&.Mui-disabled': {
              color: globalTheme.palette['action']['disabled'],
              fontStyle:
                globalTheme.typography['typography']['body1'].fontStyle,
              fontFamily:
                globalTheme.typography['typography']['body1'].fontFamily,
              fontWeight:
                globalTheme.typography['typography']['body1'].fontWeight,
              fontSize: globalTheme.typography['typography']['body1'].fontSize,
              letterSpacing:
                globalTheme.typography['typography']['body1'].letterSpacing,
              lineHeight:
                globalTheme.typography['typography']['body1'].lineHeight,
              textDecoration:
                globalTheme.typography['typography']['body1'].textDecoration,
              textTransform:
                globalTheme.typography['typography']['body1'].textTransform,
            },
          },
          root: {
            marginLeft: '0px',
          },
        },
      },
      MuiRadio: {
        styleOverrides: {
          root: {
            '&.MuiRadio-colorPrimary': {
              color: `rgba(0, 0, 0, 0.6)`,
              '&.Mui-checked': {
                color: `rgba(16, 84, 138, 1)`,
              },
              '&:hover': {
                backgroundColor: `rgba(16, 84, 138, 0.04)`,
              },
            },
            '&.MuiRadio-colorSecondary': {
              color: `rgba(0, 0, 0, 0.6)`,
              '&.Mui-checked': {
                color: `rgba(156, 39, 176, 1)`,
              },
              '&:hover': {
                backgroundColor: `rgba(156, 39, 176, 0.04)`,
              },
            },
            '&.MuiRadio-colorError': {
              color: `rgba(0, 0, 0, 0.6)`,
              '&.Mui-checked': {
                color: `rgba(211, 47, 47, 1)`,
              },
              '&:hover': {
                backgroundColor: `rgba(211, 47, 47, 0.04)`,
              },
            },
            '&.MuiRadio-colorWarning': {
              color: `rgba(0, 0, 0, 0.6)`,
              '&.Mui-checked': {
                color: `rgba(237, 108, 2, 1)`,
              },
              '&:hover': {
                backgroundColor: `rgba(237, 108, 2, 0.04)`,
              },
            },
            '&.MuiRadio-colorSuccess': {
              color: `rgba(0, 0, 0, 0.6)`,
              '&.Mui-checked': {
                color: `rgba(46, 125, 50, 1)`,
              },
              '&:hover': {
                backgroundColor: `rgba(46, 125, 50, 0.04)`,
              },
            },
            '&.MuiRadio-colorInfo': {
              color: `rgba(0, 0, 0, 0.6)`,
              '&.Mui-checked': {
                color: `rgba(2, 136, 209, 1)`,
              },
              '&:hover': {
                backgroundColor: `rgba(2, 136, 209, 0.04)`,
              },
            },
            '&.Mui-disabled': {
              color: `rgba(0, 0, 0, 0.38)`,
            },
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          switchBase: {
            '&.MuiSwitch-colorPrimary': {
              color: 'rgba(250, 250, 250, 1)',
              borderRadius: `100px`,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
              '&.Mui-checked': {
                color: 'rgba(16, 84, 138, 1)',
                '&:hover': {
                  backgroundColor: 'rgba(16, 84, 138, 0.04)',
                },
              },
            },
            '&.MuiSwitch-colorSecondary': {
              color: 'rgba(250, 250, 250, 1)',
              borderRadius: `100px`,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
              '&.Mui-checked': {
                color: 'rgba(156, 39, 176, 1)',
                '&:hover': {
                  backgroundColor: 'rgba(156, 39, 176, 0.04)',
                },
              },
            },
            '&.MuiSwitch-colorError': {
              color: 'rgba(250, 250, 250, 1)',
              borderRadius: `100px`,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
              '&.Mui-checked': {
                color: 'rgba(211, 47, 47, 1)',
                '&:hover': {
                  backgroundColor: 'rgba(211, 47, 47, 0.04)',
                },
              },
            },
            '&.MuiSwitch-colorWarning': {
              color: 'rgba(250, 250, 250, 1)',
              borderRadius: `100px`,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
              '&.Mui-checked': {
                color: 'rgba(237, 108, 2, 1)',
                '&:hover': {
                  backgroundColor: 'rgba(237, 108, 2, 0.04)',
                },
              },
            },
            '&.MuiSwitch-colorSuccess': {
              color: 'rgba(250, 250, 250, 1)',
              borderRadius: `100px`,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
              '&.Mui-checked': {
                color: 'rgba(46, 125, 50, 1)',
                '&:hover': {
                  backgroundColor: 'rgba(46, 125, 50, 0.04)',
                },
              },
            },
            '&.MuiSwitch-colorInfo': {
              color: 'rgba(250, 250, 250, 1)',
              borderRadius: `100px`,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
              '&.Mui-checked': {
                color: 'rgba(2, 136, 209, 1)',
                '&:hover': {
                  backgroundColor: 'rgba(2, 136, 209, 0.04)',
                },
              },
            },
          },
          track: {
            '.MuiSwitch-colorPrimary + &': {
              borderRadius: '10px',
              backgroundColor: 'rgba(0, 0, 0, 1)',
            },
            '.Mui-checked.MuiSwitch-colorPrimary.Mui-checked + &': {
              backgroundColor: 'rgba(16, 84, 138, 1)',
            },
            '.MuiSwitch-colorSecondary + &': {
              borderRadius: '10px',
              backgroundColor: 'rgba(0, 0, 0, 1)',
            },
            '.Mui-checked.MuiSwitch-colorSecondary.Mui-checked + &': {
              backgroundColor: 'rgba(156, 39, 176, 1)',
            },
            '.MuiSwitch-colorError + &': {
              borderRadius: '10px',
              backgroundColor: 'rgba(0, 0, 0, 1)',
            },
            '.Mui-checked.MuiSwitch-colorError.Mui-checked + &': {
              backgroundColor: 'rgba(211, 47, 47, 1)',
            },
            '.MuiSwitch-colorWarning + &': {
              borderRadius: '10px',
              backgroundColor: 'rgba(0, 0, 0, 1)',
            },
            '.Mui-checked.MuiSwitch-colorWarning.Mui-checked + &': {
              backgroundColor: 'rgba(237, 108, 2, 1)',
            },
            '.MuiSwitch-colorSuccess + &': {
              borderRadius: '10px',
              backgroundColor: 'rgba(0, 0, 0, 1)',
            },
            '.Mui-checked.MuiSwitch-colorSuccess.Mui-checked + &': {
              backgroundColor: 'rgba(46, 125, 50, 1)',
            },
            '.MuiSwitch-colorInfo + &': {
              borderRadius: '10px',
              backgroundColor: 'rgba(0, 0, 0, 1)',
            },
            '.Mui-checked.MuiSwitch-colorInfo.Mui-checked + &': {
              backgroundColor: 'rgba(2, 136, 209, 1)',
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            color: globalTheme.palette['text']['primary'],
            fontStyle:
              globalTheme.typography['components']['input-text'].fontStyle,
            fontFamily:
              globalTheme.typography['components']['input-text'].fontFamily,
            fontWeight:
              globalTheme.typography['components']['input-text'].fontWeight,
            fontSize:
              globalTheme.typography['components']['input-text'].fontSize,
            letterSpacing:
              globalTheme.typography['components']['input-text'].letterSpacing,
            lineHeight:
              globalTheme.typography['components']['input-text'].lineHeight,
            textDecoration:
              globalTheme.typography['components']['input-text'].textDecoration,
            textTransform:
              globalTheme.typography['components']['input-text'].textTransform,
          },
          sizeSmall: {
            color: globalTheme.palette['text']['primary'],
            fontStyle:
              globalTheme.typography['components']['input-text'].fontStyle,
            fontFamily:
              globalTheme.typography['components']['input-text'].fontFamily,
            fontWeight:
              globalTheme.typography['components']['input-text'].fontWeight,
            fontSize:
              globalTheme.typography['components']['input-text'].fontSize,
            letterSpacing:
              globalTheme.typography['components']['input-text'].letterSpacing,
            lineHeight:
              globalTheme.typography['components']['input-text'].lineHeight,
            textDecoration:
              globalTheme.typography['components']['input-text'].textDecoration,
            textTransform:
              globalTheme.typography['components']['input-text'].textTransform,
          },
        },
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            color: globalTheme.palette['text']['secondary'],
            fontStyle:
              globalTheme.typography['components']['helper-text'].fontStyle,
            fontFamily:
              globalTheme.typography['components']['helper-text'].fontFamily,
            fontWeight:
              globalTheme.typography['components']['helper-text'].fontWeight,
            fontSize:
              globalTheme.typography['components']['helper-text'].fontSize,
            letterSpacing:
              globalTheme.typography['components']['helper-text'].letterSpacing,
            lineHeight:
              globalTheme.typography['components']['helper-text'].lineHeight,
            textDecoration:
              globalTheme.typography['components']['helper-text']
                .textDecoration,
            textTransform:
              globalTheme.typography['components']['helper-text'].textTransform,
            '&.MuiError': {
              color: globalTheme.palette['error']['main'],
              fontStyle:
                globalTheme.typography['components']['helper-text'].fontStyle,
              fontFamily:
                globalTheme.typography['components']['helper-text'].fontFamily,
              fontWeight:
                globalTheme.typography['components']['helper-text'].fontWeight,
              fontSize:
                globalTheme.typography['components']['helper-text'].fontSize,
              letterSpacing:
                globalTheme.typography['components']['helper-text']
                  .letterSpacing,
              lineHeight:
                globalTheme.typography['components']['helper-text'].lineHeight,
              textDecoration:
                globalTheme.typography['components']['helper-text']
                  .textDecoration,
              textTransform:
                globalTheme.typography['components']['helper-text']
                  .textTransform,
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: globalTheme.palette['text']['secondary'],
            fontStyle:
              globalTheme.typography['components']['input-text'].fontStyle,
            fontFamily:
              globalTheme.typography['components']['input-text'].fontFamily,
            fontWeight:
              globalTheme.typography['components']['input-text'].fontWeight,
            fontSize:
              globalTheme.typography['components']['input-text'].fontSize,
            letterSpacing:
              globalTheme.typography['components']['input-text'].letterSpacing,
            lineHeight:
              globalTheme.typography['components']['input-text'].lineHeight,
            textDecoration:
              globalTheme.typography['components']['input-text'].textDecoration,
            textTransform:
              globalTheme.typography['components']['input-text'].textTransform,
          },
          sizeSmall: {
            color: globalTheme.palette['text']['secondary'],
            fontStyle:
              globalTheme.typography['components']['input-text'].fontStyle,
            fontFamily:
              globalTheme.typography['components']['input-text'].fontFamily,
            fontWeight:
              globalTheme.typography['components']['input-text'].fontWeight,
            fontSize:
              globalTheme.typography['components']['input-text'].fontSize,
            letterSpacing:
              globalTheme.typography['components']['input-text'].letterSpacing,
            lineHeight:
              globalTheme.typography['components']['input-text'].lineHeight,
            textDecoration:
              globalTheme.typography['components']['input-text'].textDecoration,
            textTransform:
              globalTheme.typography['components']['input-text'].textTransform,
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            color: globalTheme.palette['text']['primary'],
            fontStyle:
              globalTheme.typography['components']['input-text'].fontStyle,
            fontFamily:
              globalTheme.typography['components']['input-text'].fontFamily,
            fontWeight:
              globalTheme.typography['components']['input-text'].fontWeight,
            fontSize:
              globalTheme.typography['components']['input-text'].fontSize,
            letterSpacing:
              globalTheme.typography['components']['input-text'].letterSpacing,
            lineHeight:
              globalTheme.typography['components']['input-text'].lineHeight,
            textDecoration:
              globalTheme.typography['components']['input-text'].textDecoration,
            textTransform:
              globalTheme.typography['components']['input-text'].textTransform,
          },
          sizeSmall: {
            color: globalTheme.palette['text']['primary'],
            fontStyle:
              globalTheme.typography['components']['input-text'].fontStyle,
            fontFamily:
              globalTheme.typography['components']['input-text'].fontFamily,
            fontWeight:
              globalTheme.typography['components']['input-text'].fontWeight,
            fontSize:
              globalTheme.typography['components']['input-text'].fontSize,
            letterSpacing:
              globalTheme.typography['components']['input-text'].letterSpacing,
            lineHeight:
              globalTheme.typography['components']['input-text'].lineHeight,
            textDecoration:
              globalTheme.typography['components']['input-text'].textDecoration,
            textTransform:
              globalTheme.typography['components']['input-text'].textTransform,
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            color: globalTheme.palette['text']['primary'],
            fontStyle:
              globalTheme.typography['components']['input-text'].fontStyle,
            fontFamily:
              globalTheme.typography['components']['input-text'].fontFamily,
            fontWeight:
              globalTheme.typography['components']['input-text'].fontWeight,
            fontSize:
              globalTheme.typography['components']['input-text'].fontSize,
            letterSpacing:
              globalTheme.typography['components']['input-text'].letterSpacing,
            lineHeight:
              globalTheme.typography['components']['input-text'].lineHeight,
            textDecoration:
              globalTheme.typography['components']['input-text'].textDecoration,
            textTransform:
              globalTheme.typography['components']['input-text'].textTransform,
          },
          sizeSmall: {
            color: globalTheme.palette['text']['primary'],
            fontStyle:
              globalTheme.typography['components']['input-text'].fontStyle,
            fontFamily:
              globalTheme.typography['components']['input-text'].fontFamily,
            fontWeight:
              globalTheme.typography['components']['input-text'].fontWeight,
            fontSize:
              globalTheme.typography['components']['input-text'].fontSize,
            letterSpacing:
              globalTheme.typography['components']['input-text'].letterSpacing,
            lineHeight:
              globalTheme.typography['components']['input-text'].lineHeight,
            textDecoration:
              globalTheme.typography['components']['input-text'].textDecoration,
            textTransform:
              globalTheme.typography['components']['input-text'].textTransform,
          },
        },
      },
      MuiAvatar: {
        styleOverrides: {
          circular: {},
          square: {},
          rounded: {
            borderRadius: `4px`,
          },
          colorDefault: {
            color: globalTheme.palette['background']['paper-elevation-0'],
            fontStyle:
              globalTheme.typography['components']['avatar-initials'].fontStyle,
            fontFamily:
              globalTheme.typography['components']['avatar-initials']
                .fontFamily,
            fontWeight:
              globalTheme.typography['components']['avatar-initials']
                .fontWeight,
            fontSize:
              globalTheme.typography['components']['avatar-initials'].fontSize,
            letterSpacing:
              globalTheme.typography['components']['avatar-initials']
                .letterSpacing,
            lineHeight:
              globalTheme.typography['components']['avatar-initials']
                .lineHeight,
            textDecoration:
              globalTheme.typography['components']['avatar-initials']
                .textDecoration,
            textTransform:
              globalTheme.typography['components']['avatar-initials']
                .textTransform,
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: `rgba(97, 97, 97, 0.9)`,
            borderRadius: `4px`,
            color: globalTheme.palette['_inherit']['white']['main'],
            fontStyle:
              globalTheme.typography['components']['tooltip-label'].fontStyle,
            fontFamily:
              globalTheme.typography['components']['tooltip-label'].fontFamily,
            fontWeight:
              globalTheme.typography['components']['tooltip-label'].fontWeight,
            fontSize:
              globalTheme.typography['components']['tooltip-label'].fontSize,
            letterSpacing:
              globalTheme.typography['components']['tooltip-label']
                .letterSpacing,
            lineHeight:
              globalTheme.typography['components']['tooltip-label'].lineHeight,
            textDecoration:
              globalTheme.typography['components']['tooltip-label']
                .textDecoration,
            textTransform:
              globalTheme.typography['components']['tooltip-label']
                .textTransform,
          },
          arrow: {
            color: `rgba(97, 97, 97, 0.9)`,
          },
        },
      },
      MuiAlert: {
        defaultProps: {
          iconMapping: {
            error: <SvgIcon component={ErrorOutline} />,
            warning: <SvgIcon component={WarningAmberOutlined} />,
            info: <SvgIcon component={InfoOutlined} />,
            success: <SvgIcon component={CheckCircleOutlined} />,
          },
        },
        styleOverrides: {
          filledError: {
            backgroundColor: globalTheme.palette['error']['main'],
            borderRadius: `4px`,
          },
          filledWarning: {
            backgroundColor: globalTheme.palette['warning']['main'],
            borderRadius: `4px`,
          },
          filledInfo: {
            backgroundColor: globalTheme.palette['info']['main'],
            borderRadius: `4px`,
          },
          filledSuccess: {
            backgroundColor: globalTheme.palette['success']['main'],
            borderRadius: `4px`,
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          root: {
            borderRadius: `4px`,
            boxShadow: globalTheme.customShadows['elevation']['24'].boxShadow,
          },
          paper: {
            backgroundColor:
              globalTheme.palette['background']['paper-elevation-24'],
          },
        },
      },
    },
  },
  globalTheme
);

export default questTheme;

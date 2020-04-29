import * as colors from './src/utils/colors'

export default {
  title: 'E-Learning Dokumentation EZW Freiburg',
  base: '/docs',
  ignore: ['**/blog/**', 'Readme.md'],
  menu: ['Getting Started', "Tools", "Videos", "Umfragen"],
  themeConfig: {
    colors: {
      primary: colors.primary,
    },
  },
}

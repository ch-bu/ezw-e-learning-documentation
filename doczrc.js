import * as colors from './src/utils/colors'

export default {
  title: 'E-Learning Dokumentation EZW Freiburg',
  base: '/docs',
  ignore: ['**/blog/**', 'readme.md'],
  menu: ['Getting Started', 'Components', "Tools", "Videos", "Umfragen"],
  themeConfig: {
    colors: {
      primary: colors.primary,
    },
  },
}

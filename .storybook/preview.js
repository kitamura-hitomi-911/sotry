import '../stories/assets/scss/_reset.scss'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (story, context) => {
    const ret = document.createElement('div');
    ret.className='theme-'+context.globals.Theme;
    ret.appendChild(story())
    return ret;
  }
]

export const globalTypes = {
  Theme: {
    name: 'Theme',
    description: 'Themeを設定します',
    defaultValue: 'default',
    toolbar: {
      icon: 'circlehollow',
      items: ['default', 'white', 'black']
    }
  }
}
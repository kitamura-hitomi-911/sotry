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
    document.addEventListener("DOMContentLoaded", e => {
      Array.prototype.forEach.call(document.body.classList, function (class_name, index) {
        if(class_name.match(/^theme-/)){
          document.body.classList.remove(class_name);
        }
      });
      document.body.classList.add('theme-'+context.globals.Theme);
    });
    return story();
  }
]

export const globalTypes = {
  Theme: {
    name: 'Theme',
    description: 'Themeを設定します',
    defaultValue: 'default',
    toolbar: {
      icon: 'circle',
      items: ['default', 'white', 'black']
    }
  }
}
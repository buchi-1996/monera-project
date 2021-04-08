module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    fontFamily: {
      default: ['Roboto', 'sans-serif']
    },
    extend: {
      spacing: {
        15: '64px'
      },
      borderRadius: {},
      borderColor: {
        input: '#E8E8E8'
      },
      backgroundColor: {
        'baby-pink': '#FCCCD5',
        'charcoal-main': '#424651',
        approval: '#58BC82',
        primary: '#F0002F',
        'red-main': '#780018',
        'landing-body': '#F8F8F8',
        'charcoal-light': '#D9DADC',
        'monsell-dark-red': '#780018',
        'eerie-black': '#15191C'
      },
      fontSize: {
        md: '1rem'
      },
      maxHeight: {
        box: '682px'
      },
      minHeight: {
        box: '682px'
      },
      textColor: {
        'charcoal-light': '#A1A3A8',
        'charcoal-light-4': '#81848B',
        'charcoal-light-text': '#62656E',
        'charcoal-dark': '#212329',
        'charcoal-main': '#424651',
        'dark-800': '#2D3748',
        'pale-red': '#F0002F',
        dark: '#500010'
      }
    }
  }
}

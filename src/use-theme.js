import { ref, shallowRef, watch, defineAsyncComponent } from 'vue'

const theme = ref('bootstrap')

const setRootStyles = async (theme) => {
  let styles = '';
  if (theme.value === 'bootstrap') {
    styles = (await import('./bootstrap-theme')).default;
  } else {
    styles = (await import('./vuetify-theme')).default;
  }
  document.querySelector('#vendor-css').innerHTML = styles;
}

export function useTheme() {
  const setup = () => {
    watch(theme, () => {
      setRootStyles(theme)
    })

    setRootStyles(theme)
  }

  return {
    theme,
    setup,
  }
}

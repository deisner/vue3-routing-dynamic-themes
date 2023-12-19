import { ref, shallowRef, watch, defineAsyncComponent,configureCompat } from 'vue'

const theme = ref('bootstrap')

const setRootStyles = async (theme) => {
  let styles = '';
  let mode = 3;
  if (theme.value === 'bootstrap') {
    styles = (await import('./bootstrap-theme')).default;
    mode = 2;
  } else {
    styles = (await import('./vuetify-theme')).default;
    mode = 3;
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

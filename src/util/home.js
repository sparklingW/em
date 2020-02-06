import { store } from '../store.js'

// util
/* Navigates home and resets the scroll position */
export const home = () => {
  store.dispatch({ type: 'setCursor', thoughtsRanked: null, cursorHistoryClear: true })
  window.scrollTo(0, 0)
}

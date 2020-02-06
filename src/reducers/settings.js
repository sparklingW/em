// util
import {
  syncRemote,
} from '../util.js'

import * as localForage from 'localforage'
// SIDE EFFECTS: localStorage, syncRemote
export default (state, { key, value, remote = true }) => {

  // use synchronous localStorage for tutorial settings to prevent render delay
  if (key === 'scaleSize' || key === 'tutorial' || key === 'tutorialChoice' || key === 'tutorialStep') {
    localStorage.setItem('settings-' + key, value)
  }
  else {
    localForage.setItem('settings-' + key, value).catch(err => {
      throw new Error(err)
    })
  }

  if (remote) {
    setTimeout(() => {
      syncRemote({}, {}, null, { ['settings/' + key]: value })
    })
  }

  return {
    settings: Object.assign({}, state.settings, { [key]: value })
  }
}

import { store } from '../store.js'

// constants
import {
  TUTORIAL_STEP_SUCCESS,
  TUTORIAL2_STEP_SUCCESS,
} from '../constants.js'

/** Advances the tutorial one step (whole step by default; optional hint argument for fractional step). */
export const tutorialNext = ({ hint } = {}) => {
  const tutorialStep = store.getState().settings.tutorialStep

  // end
  if (tutorialStep === TUTORIAL_STEP_SUCCESS || tutorialStep === TUTORIAL2_STEP_SUCCESS) {
    store.dispatch({
      type: 'tutorial',
      value: false
    })
  }
  // next
  else {
    store.dispatch({
      type: 'tutorialStep',
      value: !hint ? Math.floor(tutorialStep) + 1 : tutorialStep + 0.1
    })
  }

}

/** Disaddvances the tutorial one step (whole step by default; optional hint argument for fractional step). */
export const tutorialPrev = ({ hint } = {}) => {
  const tutorialStep = store.getState().settings.tutorialStep
  store.dispatch({ type: 'tutorialStep', value: !hint ? Math.floor(tutorialStep) - 1 : tutorialStep - 0.1 })
}

/** Returns true if the current tutorialStep is a hint */
export const isHint = () => {
  const tutorialStep = store.getState().settings.tutorialStep
  return tutorialStep !== Math.floor(tutorialStep)
}

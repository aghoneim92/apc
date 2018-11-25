import { createStore, Action } from 'redux'
import Actions from './actions'
import State from './model/State'
import AdmissionRequestPersistenceService from './service/AdmissionRequestPersistenceService'

const initialState: State = {
  admissionRequests: AdmissionRequestPersistenceService.loadAll(),
}

interface ActionObject extends Action<Actions> {
  payload: any
}

const rootReducer = (state = initialState, action: ActionObject): State => {
  const { type, payload } = action
  switch (type) {
    case Actions.NEW_ADMISSION_REQUEST:
      return {
        ...state,
        admissionRequests: state.admissionRequests.concat([payload]),
      }
    case Actions.START_ADMISSION:
      return { ...state, currentAdmission: payload }
    case Actions.UPDATE_ADMISSION:
      const { currentAdmission } = state

      if (currentAdmission) {
        return { ...state, currentAdmission: payload }
      }

      return state
    default:
      return state
  }
}

const store = createStore(rootReducer)

export default store

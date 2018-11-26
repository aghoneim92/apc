import { createStore, Action } from 'redux'
import Actions from './actions'
import State from './model/State'
import AdmissionRequestPersistenceService from './service/AdmissionRequestPersistenceService'
import AdmissionPeristenceService from './service/AdmissionPersistenceService'

const initialState: State = {
  admissionRequests: AdmissionRequestPersistenceService.loadAll(),
  admissions: AdmissionPeristenceService.loadAll(),
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
    case Actions.UPDATE_ADMISSION:
      return {
        ...state,
        admissionRequests: state.admissionRequests.map(req =>
          req.patient.id === payload.patient.id ? payload : req,
        ),
      }
    case Actions.ADMIT_PATIENT:
      return { ...state, admissions: state.admissions.concat([payload]) }
    default:
      return state
  }
}

const store = createStore(rootReducer)

export default store

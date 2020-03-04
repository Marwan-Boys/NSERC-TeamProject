import authReducer from "./authReducer";
import projectReducer from "./projectReducers";
import { combineReducers} from "redux";
import { firestoreReducer} from 'redux-firestore'
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
    auth: authReducer,
    firebase: firebaseReducer,
    project: projectReducer,
    firestore: firestoreReducer
});
export default rootReducer;
import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import createdQuestsReducer from "./reducers/createdQuestsSlice";
// import questExecutionReducer from "./reducers/questExecutionSlice";
// import authReducer from "./reducers/authSlice";
// import userProfileReducer from "./reducers/userProfileSlice";
// import currentQuestReducer from "./reducers/currentQuestSlice";
// import { questsAvailableReducer } from './reducers/availableQuests';
// import { questInfoReducer } from './reducers/questInfoSlice';
// import mediaReducer from "./reducers/mediaSlice";
// import errorReducer from "./reducers/errorReducer";
import { calendarReducer } from "./reducers/calendarSlice";

const rootReducer = combineReducers({
  calendarReducer,
  // createdQuestsReducer,
  // questExecutionReducer,
  // userProfileReducer,
  // authReducer,
  // questsAvailableReducer,
  // currentQuestReducer,
  // errorReducer,
  // mediaReducer,
  // questInfoReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

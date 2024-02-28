import { combineReducers, configureStore } from '@reduxjs/toolkit'
import LoginSlice from './Slices/LoginSlice'
import MoviesSlice from './Slices/MoviesSlice'
import NewsSlice from './Slices/NewsSlice'
import ComingSoonMovieSlice from './Slices/ComingSoonMovieSlice'
import  TheaterSlice  from './Slices/TheaterSlice'
import MovieBookingSlice from './Slices/MovieBookingSlice'
import storage from 'redux-persist/lib/storage'
// @ts-ignore
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import MyTicketSlice from './Slices/MyTicketSlice'

// ...

const rootReducer = combineReducers({
  login: LoginSlice,
    movies: MoviesSlice,
    news: NewsSlice,
    comingSoonMovie: ComingSoonMovieSlice,
    theater: TheaterSlice,
    movieBooking: MovieBookingSlice,
    myTicket: MyTicketSlice,
});

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
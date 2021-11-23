import ActionTypes from "../redux/types";

export interface IAppState {
  isLoading: boolean
}

export interface IAuthState {
  isLoggedIn: boolean
  user: string
}

export interface IFilterState {
  isRatingOn: null | boolean
  isCostOn: null | boolean
}

export interface IHotelsState {
  hotels: any[]
  savedHotels: any[]
  savedHotelsId: any[]
  check: {
      location: string
      in: string
      out: string
    }
}

export interface IShowPreloaderAction {
  type: ActionTypes.SHOW_PRELOADER
}

export interface IHidePreloaderAction {
  type: ActionTypes.HIDE_PRELOADER
}

export interface ILoginAction {
  type: ActionTypes.LOGIN
  payload: IAuthState
}

export interface ILogoutAction {
  type: ActionTypes.LOGOUT
  payload: IAuthState
}

export interface IOnRatingAction {
  type: ActionTypes.ON_RATING_FILTER
  payload: boolean
}

export interface IOffRatingAction {
  type: ActionTypes.OFF_RATING_FILTER
  payload: boolean
}

export interface IOnCostAction {
  type: ActionTypes.ON_COST_FILTER
  payload: boolean
}

export interface IOffCostAction {
  type: ActionTypes.OFF_COST_FILTER
  payload: boolean
}

export interface IFetchHotelsAction {
  type: ActionTypes.FETCH_HOTELS
  payload: any[]
}

export interface ISearchHotelAction {
  type: ActionTypes.SEARCH_HOTEL
  payload: {
    location: string
    in: string
    out: string
  }
}

export interface ILikeHotelAction {
  type: ActionTypes.LIKE_HOTEL
  payload: any[]
}

export interface IUnlikeHotelAction {
  type: ActionTypes.UNLIKE_HOTEL
  payload: any[]
}

export interface ISaveHotelIdAction {
  type: ActionTypes.SAVE_HOTEL_ID
  payload: any[]
}

export interface IRemoveHotelIdAction {
  type: ActionTypes.REMOVE_HOTEL_ID
  payload: any[]
}

export type AppAction = IShowPreloaderAction | IHidePreloaderAction;
export type AuthAction = ILoginAction | ILogoutAction;
export type FilterAction =
  IOnRatingAction
  | IOffRatingAction
  | IOnCostAction
  | IOffCostAction;
export type HotelsAction =
  IFetchHotelsAction
  | ISearchHotelAction
  | ILikeHotelAction
  | IUnlikeHotelAction
  | ISaveHotelIdAction
  | IRemoveHotelIdAction;

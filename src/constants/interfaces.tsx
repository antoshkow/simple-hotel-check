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
  savedHotels: any[],
  savedHotelsId: any[],
  check: {
      location: string
      in: string
      out: string
    }
}

// export interface IAppAction {
//   type: string
//   payload?: any
// }

export interface IShowPreloaderAction {
  type: ActionTypes.SHOW_PRELOADER
}

export interface IHidePreloaderAction {
  type: ActionTypes.HIDE_PRELOADER
}

export interface ILoginAction {

}

export interface ILogoutAction {

}

export interface IOnRatingAction {

}

export interface IOffRatingAction {

}

export interface IOnCostAction {

}

export interface IOffCostAction {

}

export interface IFetchHotelsAction {

}

export interface ISearchHotelAction {

}

export interface ILikeHotelAction {

}

export interface IUnlikeHotelAction {

}

export interface ISaveHotelIdAction {

}

export interface IRemoveHotelIdAction {

}

export type AppAction = IShowPreloaderAction | IHidePreloaderAction;
export type AuthAction = ILoginAction | ILogoutAction;
export type FilterAction = IOnRatingAction | IOffRatingAction | IOnCostAction | IOffCostAction;
export type HotelsAction = IFetchHotelsAction | ISearchHotelAction | ILikeHotelAction | IUnlikeHotelAction | ISaveHotelIdAction | IRemoveHotelIdAction;

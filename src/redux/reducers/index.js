import { combineReducers } from "redux";
import detailUserReducer from "./detailUser";
import destinationReducer from "./destination";
import passengerReducer from "./passengerData";
import listProductReducer from "./listProduct";
import detailProductReducer from "./detailProduct";
import listAirlineReducer from "./listAirline";
import listMyBookingReducer from "./transaction";
import detailMyBookingReducer from "./detailBooking";
import createAirlinesReducer from "./createAirline";
import detailAirlineReducer from "./detailAirline";
import editAirlinesReducer from "./editAirline";

const rootReducers = combineReducers({
  detailUser: detailUserReducer,
  destination: destinationReducer,
  passenger: passengerReducer,
  listProduct: listProductReducer,
  detailProduct: detailProductReducer,
  listAirline: listAirlineReducer,
  myBooking: listMyBookingReducer,
  detailBooking: detailMyBookingReducer,
  createAirline: createAirlinesReducer,
  detailAirline: detailAirlineReducer,
  editAirline: editAirlinesReducer,
});

export default rootReducers;

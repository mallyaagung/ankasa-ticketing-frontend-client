import axios from "axios";
import Swal from "sweetalert2";
import {
  GET_AIRLINE_PENDING,
  GET_AIRLINE_SUCCESS,
  GET_AIRLINE_FAILED,
  GET_DETAIL_AIRLINE_PENDING,
  GET_DETAIL_AIRLINE_SUCCESS,
  GET_DETAIL_AIRLINE_FAILED,
  CREATE_AIRLINE_FAILED,
  CREATE_AIRLINE_SUCCESS,
  EDIT_AIRLINE_FAILED,
  EDIT_AIRLINE_SUCCESS,
} from "./types";

export const getListAirline = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_AIRLINE_PENDING,
      payload: null,
    });

    const res = await axios.get(`${process.env.REACT_APP_API_URL}/airlines`);

    dispatch({
      type: GET_AIRLINE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    if (error.response) {
      error.message = error.response.data.error;
    }

    dispatch({
      type: GET_AIRLINE_FAILED,
      payload: error.message,
    });
  }
};

export const getDetailAirline = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_DETAIL_AIRLINE_PENDING,
      payload: null,
    });

    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/airlines/${id}`
    );

    dispatch({
      type: GET_DETAIL_AIRLINE_SUCCESS,
      payload: res.data,
    });
    console.log(res);
  } catch (error) {
    if (error.response) {
      error.message = error.response.data.error;
    }

    dispatch({
      type: GET_DETAIL_AIRLINE_FAILED,
      payload: error.message,
    });
  }
};

export const createAirlines = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: GET_AIRLINE_PENDING });
    const res = await axios.post(
      ` ${process.env.REACT_APP_API_URL}/airlines`,
      data,
      {
        "content-type": "multipart/form-data",
      }
    );
    navigate("/admin/airlines");
    dispatch({ type: CREATE_AIRLINE_SUCCESS, payload: res });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
    });
    dispatch({ type: CREATE_AIRLINE_FAILED, payload: error.response });
  }
};

export const editAirlines = (id, data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: GET_AIRLINE_PENDING });
    const res = await axios.put(
      ` ${process.env.REACT_APP_API_URL}/airlines/${id}`,
      data,
      {
        "content-type": "multipart/form-data",
      }
    );
    navigate("/admin/airlines");
    dispatch({ type: EDIT_AIRLINE_SUCCESS, payload: res });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
    });
    dispatch({ type: EDIT_AIRLINE_FAILED, payload: error.response });
  }
};

export const deleteAirlines = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/airlines/${id}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

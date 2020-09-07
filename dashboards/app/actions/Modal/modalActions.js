import { ModalActionTypes } from './modalTypes';

export const showModal = ( modalProps, modalType ) => dispatch => {
    dispatch({
      type: ModalActionTypes.SHOW_MODAL,
      payload:{
        ModalProps: modalProps,
        ModalType: modalType
      }
    });
  }
  
  export const hideModal = () => dispatch => {
    dispatch({
      type: ModalActionTypes.HIDE_MODAL
    });
  }
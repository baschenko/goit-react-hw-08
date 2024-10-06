import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectIdInModal, selectModal } from '../../redux/modal/selectors';
import { closeModal } from '../../redux/modal/slice';
import { Button } from '@mui/material';
import { MdDelete } from 'react-icons/md';
import { deleteContact } from '../../redux/contacts/operations';
import s from './ConfirmModal.module.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: { backgroundColor: 'rgba(0,0,0,0.4)' },
};

Modal.setAppElement('#root');

const ConfirmModal = () => {
  const dispatch = useDispatch();

  const isModalOpen = useSelector(selectModal);
  const idInModal = useSelector(selectIdInModal);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleClickOk = () => {
    dispatch(deleteContact(idInModal));
    dispatch(closeModal());
  };

  const handleClickCancel = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2 className={s.title}>Ви дійсно бажаєте видалити запис? </h2>
      <div className={s.wrapper}>
        <Button
          variant="outlined"
          startIcon={<MdDelete size={24} />}
          onClick={handleClickOk}
        >
          Так
        </Button>

        <Button variant="contained" onClick={handleClickCancel}>
          Ні
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;

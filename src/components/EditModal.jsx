/** @format */

const EditModal = ({
  setShowEditModal,
  setEditItem,
  editItem,
  handleEditBook,
}) => {
  return (
    <div className="confirm-modal">
      <div className="modal-inner">
        <h5>Kitap İsmini Düzenle</h5>

        <input
          value={editItem.title}
          type="text"
          className="form-control shadow"
          onChange={(e) =>
            setEditItem({
              ...editItem,
              title: e.target.value,
              date: new Date().toLocaleString(),
            })
          }
        />

        <div className="justify-content-between d-flex">
          <button
            className="btn btn-warning"
            onClick={() => setShowEditModal(false)}
          >
            Vazgeç
          </button>
          <button className="btn btn-success" onClick={handleEditBook}>
            Kaydet
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;

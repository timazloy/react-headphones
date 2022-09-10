

function ModalSearch({modalActive, setModalActive, children}) {



    return (
        <div className={modalActive ? "modal-search modal-search--active" : "modal-search"} onClick={() => setModalActive(false)}>
            <div className={modalActive ? "modal-search__content modal-search__content--active" : "modal-search__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default ModalSearch;

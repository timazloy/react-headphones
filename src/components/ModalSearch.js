import React from "react";


function ModalSearch({modalActive, setModalActive, children}) {


    React.useEffect(() => {
        modalActive ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
    }, [modalActive]);

    return (
        <div className={modalActive ? "modal modal--active" : "modal"} onClick={() => setModalActive(false)}>
            <div className={modalActive ? "modal__content modal__content--active" : "modal__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default ModalSearch;

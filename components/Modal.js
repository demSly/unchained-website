import React from 'react';
import variables from '../styles/variables';

export default ({
  onClose, title, children, visible,
}) => (
  /* add the following class to modal-backdrop: modal-backdrop--is-visible */
  <div role="dialog" className={`modal-backdrop ${visible ? 'modal-backdrop--is-visible' : ''}`}>
    <div className="modal">
      <div className="modal__header">
        <h1 className="modal__title">
          {title}
        </h1>
        <div className="modal__close">
          <button type="button" className="no-button" onClick={onClose}>
            <img src="../static/img/icon/close-hexagon.svg" alt="close icon" />
          </button>
        </div>
      </div>
      <div className="modal__content">
        {children}
      </div>
    </div>
;
    <style jsx>
      {`
      .modal {
        background: #fff;
        box-shadow: 0 4px 28px rgba(0,0,0,0.2);
        color: ${variables.darkColor};
        min-height: auto;
        visibility: hidden;
        font-size: 80%;
      }
      @media (min-width: 750px) {
        .modal {
          margin: 3em auto;
          max-width: 700px;
          min-height: initial;
        }
      }
      .modal-backdrop--is-visible .modal {
        visibility: visible;
        animation-delay: 0.2s;
        animation-fill-mode: forwards;
        animation: modal-open 0.5s cubic-bezier(0.2, 0.9, 0.3, 1);
      }
      .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.6);
        visibility: hidden;
        opacity: 0;
        transition: opacity .32s ease-in-out, visibility .32s ease-in-out, background-color .32s ease-in-out;
      }
      .modal-backdrop--is-visible {
        visibility: visible;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        opacity: 1;
        z-index: 101;
      }
      .modal__header,
      .modal__content {
        padding: 1em;
      }
      .modal__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid ${variables.lineGrayColor};
      }
  `}
    </style>
  </div>
);

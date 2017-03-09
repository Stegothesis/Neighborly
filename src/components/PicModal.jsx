import React from 'react';

export const PicModal = (props) => {
  return (
    <div id={props.id} className="modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <img src={props.url.split('maxheight=200').join('maxheight=600').split('maxwidth=300').join('maxwidth=900')}/>
        </div>
      </div>
    </div>
  )
};

module.exports = PicModal;
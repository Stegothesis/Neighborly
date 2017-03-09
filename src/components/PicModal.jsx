import React from 'react';

export const PicModal = (props) => {
  return (
    <div id={props.id} className="modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <img className="img-responsive" src={props.url.split('maxheight=200').join('maxheight=800').split('maxwidth=300').join('maxwidth=1200')}/>
        </div>
      </div>
    </div>
  )
};

module.exports = PicModal;
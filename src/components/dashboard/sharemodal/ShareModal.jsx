import React from 'react';
import './ShareModal.css'

const ShareModal = (props) => {
    return (
        <React.Fragment>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
            >
                <div className="modal-header">
                    <div className="close-modal-btn" onClick={props.close}>X</div>
                </div>
                <div className="modal-body">
                    <div className="text-left">
                        <div >
                            <label htmlFor="addEmail" className="color">Email Id</label>
                        </div>
                        <div>
                            <input type="text" name="addEmail" id="addEmail" className="w-100 color addEmail" />
                        </div>
                        {/* <div class="sadasd">sadknabdsh</div> */}
                        <div className="inline-block">
                            <div class="chip">
                                <div class="chip-head">A</div>
                                <div class="chip-content">Amit Mishra</div>
                                <div class="chip-close">
                                    <svg class="chip-svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></svg>
                                </div>
                            </div>
                            <div class="chip">
                                <div class="chip-head">A</div>
                                <div class="chip-content">Amit Mishra</div>
                                <div class="chip-close">
                                    <svg class="chip-svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></svg>

                                </div>
                            </div>
                            <div class="chip">
                                <div class="chip-head">A</div>
                                <div class="chip-content">Amit Mishra</div>
                                <div class="chip-close">
                                    <svg class="chip-svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></svg>

                                </div>
                            </div>
                            <div class="chip">
                                <div class="chip-head">A</div>
                                <div class="chip-content">Amit Mishra</div>
                                <div class="chip-close">
                                    <svg class="chip-svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></svg>

                                </div>
                            </div>
                        </div>

                        <div className="description">
                            <div >
                                <label htmlFor="shareDescription" className="color">Description</label>
                            </div>
                            <div>
                                <textarea name="shareDescription" id="shareDescription"></textarea>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="modal-footer">
                    <button className="btn-send" onClick={(e) => {
                        // props.send();
                        props.close();
                    }
                    }>SEND</button>
                    {/* <button className="btn-continue">CONTINUE</button> */}
                </div>
            </div>
        </React.Fragment >
    );
}


export default ShareModal
import React from 'react';

const QuoteTool = () => {
    return (
        <div className="content quote-tool">
            <div className="text">
                <h1>Quote Maker</h1>
                <p>Simply share a tweet link to make a quote image. The image will be produced in a 1:1 format with a watermark. Scroll down after clicking the button to see the result.</p>
            </div>
            <div className="card-wrapper">
                <div className="form-card">
                    <p className="coloured-tag blue">INPUT</p>
                    <form className="form">
                        <label>Tweet URL:</label>
                        <input type="text" name="name" />
                        <label>Username:</label>
                        <input type="text" name="name" />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div className="render-card">
                    <h1>Example</h1>
                </div>
            </div>
        </div>
    );
};

export default QuoteTool;

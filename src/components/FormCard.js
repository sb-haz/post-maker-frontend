import { useState } from "react";

const FormCard = ({ useEmail }) => { 

    return (
        <div className="form-card shadow">
            <p className="coloured-tag blue">Input</p>
            <form className="form">
                <label>Tweet URL</label>
                <input type="text" name="tweet_url"   />
                <label>Watermark</label>
                <input type="text" name="name"   />
                {useEmail ?
                    <>
                        <label>Email</label>
                        <input type="email" name="email"   />
                    </> : ''
                }

                <input type="submit" value="Create" />
            </form>
        </div >
    );
};

export default FormCard;

import { useState, Fragment } from "react";
import { Link } from "react-router-dom";

import FormCard from "./components/FormCard";
import ExampleCard from "./components/ExampleCard";
import RenderCard from "./components/RenderCard";

const Tool = ({ type, title, desc, media_src }) => {
    const [caption, setCaption] = useState('')

    return (
        <div className="content tool-content">
            <div className="text">
                <h1>{title}</h1>
                <p>{desc} <Link to="/guide" className="simple-btn"> Need help?</Link></p>
            </div>
            <div className="card-wrapper">
                {type === 'quote' ?
                    <Fragment>
                        <FormCard type={type} setCaption={setCaption} />
                        <RenderCard media_src={media_src} caption={caption} />
                    </Fragment> :
                    <Fragment>
                        <FormCard type={type} />
                        <ExampleCard media_src={media_src} />
                    </Fragment>
                }

            </div>
        </div>
    );
};

export default Tool;

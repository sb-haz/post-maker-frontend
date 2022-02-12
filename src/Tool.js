import { Link } from "react-router-dom";
import FormCard from "./components/FormCard";
import ExampleCard from "./components/ExampleCard";
import RenderCard from "./components/RenderCard";

const Tool = ({ title, desc, tag, media_src }) => {
    return (
        <div className="content tool-content">
            <div className="text">
                <h1>{title}</h1>
                <p>{desc} <Link to="/guide" className="simple-btn"> Need help?</Link></p>

            </div>
            <div className="card-wrapper">
                {tag === 'render' ? <FormCard useEmail={false} /> : <FormCard useEmail={true} />}
                {tag === 'render' ? <RenderCard media_src={media_src} /> : <ExampleCard media_src={media_src} />}
            </div>
        </div>
    );
};

export default Tool;

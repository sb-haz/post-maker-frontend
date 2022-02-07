import FormCard from "./components/FormCard";
import ExampleCard from "./components/ExampleCard";
import RenderCard from "./components/RenderCard";

const Tool = ({ title, desc, tag }) => {
    return (
        <div className="content tool-content">
            <div className="text">
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
            <div className="card-wrapper">
                <FormCard />
                {tag === 'render' ? <RenderCard /> : <ExampleCard />}
            </div>
        </div>
    );
};

export default Tool;

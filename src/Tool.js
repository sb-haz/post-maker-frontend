import FormCard from "./components/FormCard";
import ExampleCard from "./components/ExampleCard";

const Tool = ({ title, desc }) => {
    return (
        <div className="content tool-content">
            <div className="text">
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
            <div className="card-wrapper">
                <FormCard />
                <ExampleCard />
            </div>
        </div>
    );
};

export default Tool;

import FormCard from "./components/FormCard";
import ExampleCard from "./components/ExampleCard";

const QuoteTool = ({ title }) => {
    return (
        <div className="content tool-content">
            <div className="text">
                <h1>Quote Maker</h1>
                <p>Simply share a tweet link to make a quote image. The image will be produced in a 1:1 format with a watermark. Scroll down after clicking the button to see the result.</p>
            </div>
            <div className="card-wrapper">
                <FormCard />
                <ExampleCard />
            </div>
        </div>
    );
};

export default QuoteTool;
import { Link } from "react-router-dom";

const Pricing = () => {
    return (
        <div className="content pricing-section">
            <h1>Pricing</h1>
            <div className="pricing-table">
                <table>
                    <tr>
                        <th></th>
                        <th>Free</th>
                        <th>Creator</th>
                    </tr>
                    <tr>
                        <td>Monthly Price</td>
                        <td>£0</td>
                        <td className="blur-price">£19/m</td>
                    </tr>
                    <tr>
                        <td>Videos</td>
                        <td>3 per day</td>
                        <td>✔</td>
                    </tr>
                    <tr>
                        <td>Reels</td>
                        <td>3 per day</td>
                        <td>✔</td>
                    </tr>
                    <tr>
                        <td>Quotes</td>
                        <td>✔</td>
                        <td>✔</td>
                    </tr>
                    <tr>
                        <td>Watermark</td>
                        <td>Default</td>
                        <td>Customizable</td>
                    </tr>
                    <tr>
                        <td>Render Speed</td>
                        <td>Default</td>
                        <td>Priority</td>
                    </tr>
                </table>

                <div className="trial-btn">
                    <Link to='/' className="gradient-btn">Start 30 Day Trial</Link>
                    <img className="unselectable" src="/other/up-arrow.png" alt="" />
                    <p className="unselectable">No Credit Card Required</p>
                </div>
            </div>
        </div>
    );
};

export default Pricing;

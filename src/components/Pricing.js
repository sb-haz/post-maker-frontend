import { Link } from "react-router-dom";

const Pricing = () => {
    return (
        <div className="content pricing-section">
            <h1>Simple, Fair Pricing</h1>
            <div className="pricing-table">
                <div className="table-wrapper shadow">
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
                            <td><img src="/icons/pricing-twitter.png" className="unselectable" alt="" />Video</td>
                            <td>3 per day</td>
                            <td><img src="/icons/pricing-tick.png" alt="" className="pricing-tick-cross"/></td>
                        </tr>
                        <tr>
                            <td><img src="/icons/pricing-twitter.png" className="unselectable" alt="" />Quote</td>
                            <td>10 per day</td>
                            <td><img src="/icons/pricing-tick.png" alt="" className="pricing-tick-cross"/></td>
                        </tr>
                        <tr>
                            <td><img src="/icons/pricing-tiktok.png" className="unselectable" alt="" />Video</td>
                            <td><img src="/icons/pricing-cross.png" alt="" className="pricing-tick-cross"/></td>
                            <td><img src="/icons/pricing-tick.png" alt="" className="pricing-tick-cross"/></td>
                        </tr>
                        <tr>
                            <td>Accounts</td>
                            <td>5</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Render Speed</td>
                            <td>Default</td>
                            <td>Priority</td>
                        </tr>
                        <tr>
                            <td>Watermarks</td>
                            <td>Default</td>
                            <td>Customisable</td>
                        </tr>
                        <tr>
                            <td>Captions</td>
                            <td>Default</td>
                            <td>Customisable</td>
                        </tr>
                    </table>
                </div>
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

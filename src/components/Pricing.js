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
                    <tr>
                        <td></td>
                        <td></td>
                        <td><button>Start</button></td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Pricing;

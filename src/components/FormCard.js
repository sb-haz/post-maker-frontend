const FormCard = () => {
    return (
        <div className="form-card">
            <p className="coloured-tag blue">Input</p>
            <form className="form">
                <label>Tweet URL</label>
                <input type="text" name="name" />
                <label>Username</label>
                <input type="text" name="name" />
                <input type="submit" value="Create" />
            </form>
        </div>
    );
};

export default FormCard;

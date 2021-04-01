import { connect } from "react-redux";
import * as actionCreator from "../store/actions/index";

const Form = props => {
    return (
        <form onSubmit={props.handleSubmit} onChange={props.handleChange}>
            <input
                className="row1"
                type="text"
                name="name"
                placeholder="Associate Name"
            />
            <br />
            <input
                className="row2"
                type="text"
                name="id"
                placeholder="Associate Id"
            />
            {props.error && (
                <>
                    <br />
                    <label for="">{props.error}</label>
                </>
            )}
            <br />
            <input
                className="row3"
                type="text"
                name="pid"
                placeholder="Project ID"
            />
            <br />
            <input className="row4" type="radio" value="onshore" name="shore" />
            <label>onshore</label>
            <input
                className="row5"
                type="radio"
                value="offshore"
                name="shore"
            />
            <label>offshore</label>
            <br />
            <select className="row6">
                <option disabled selected value="">
                    Please select
                </option>
            </select>
            <br />
            <input className="row7" type="checkbox" />
            <label>HTML</label>
            <br />
            <input
                className="row8"
                type="file"
                id="img"
                name="img"
                accept="image/*"
            />
            <br />
            <textarea className="row9" placeholder="Comments"></textarea>
            <br />
            <button
                class="submit"
                style={{
                    backgroundColor: "#3398FF ",
                    padding: "12px",
                    outline: "none",
                    border: "none",
                    borderRadius: "5px",
                    color: "#ffffff",
                    margin: "0px 5px 0px 0px"
                }}
            >
                Submit
            </button>
            <button
                class="reset"
                style={{
                    backgroundColor: "#FF3355 ",
                    padding: "12px",
                    outline: "none",
                    border: "none",
                    borderRadius: "5px",
                    color: "#ffffff"
                }}
            >
                Reset
            </button>
        </form>
    );
};

const mapStateToProps = state => {
    return {
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleChange: e => dispatch(actionCreator.handleChange(e)),
        handleSubmit: e => dispatch(actionCreator.handleSubmit(e))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);

import {Button} from "antd";

const ActionButton = ({icon, event, disabledOpt}) => {
    return (
        <button disabled={disabledOpt} onClick={event} className={`action-btn`}>
            {icon}
        </button>
    );
};

export default ActionButton;

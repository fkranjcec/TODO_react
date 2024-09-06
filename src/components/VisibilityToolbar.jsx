/* eslint-disable react/prop-types */
/* import PropTypes from "prop-types"; */
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { VISIBILITY_TYPES } from "../const";

const { ALL, ACTIVE, COMPLETED } = VISIBILITY_TYPES;

export default function VisibilityToolbar({
    visibilityType,
    onVisibilityChange,
}) {
    function getButtonVariant(visibilityType, currentVisibilityType) {
        return visibilityType === currentVisibilityType
            ? "dark"
            : "outline-dark";
    }

    return (
        <ToggleButtonGroup
         name="visibility">
                <ToggleButton
                    value={ALL}
                    variant={getButtonVariant(visibilityType, ALL)}
                    size="sm"
                    onClick={() => onVisibilityChange(ALL)}
                >
                    All
                </ToggleButton>
                <ToggleButton
                    value={ACTIVE}
                    variant={getButtonVariant(visibilityType, ACTIVE)}
                    size="sm"
                    onClick={() => onVisibilityChange(ACTIVE)}
                >
                    Active
                </ToggleButton>
                <ToggleButton
                    value={COMPLETED}
                    variant={getButtonVariant(visibilityType, COMPLETED)}
                    size="sm"
                    onClick={() => onVisibilityChange(COMPLETED)}
                >
                    Completed
                </ToggleButton>
        </ToggleButtonGroup>
    );
}

/* VisibilityToolbar.propTypes = {
    visibilityType: PropTypes.string,
    onVisibilityChange: PropTypes.func,
};
 */

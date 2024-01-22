import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function Popup({ message, onClose, className }) {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onClose(); // Automatically close the message after a timeout
        }, 3000); // Adjust the timeout duration (in milliseconds) as needed

        return () => clearTimeout(timeoutId); // Clear timeout on component unmount
    }, [onClose]);

    return <div className={className}>{message}</div>;
}

Popup.propTypes = {
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

const StyledPopup = styled(Popup)`
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    background-color: #4caf50;
    color: white;
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;

    &.show {
        opacity: 1;
    }
`;

const SuccessMessage = ({ message, onClose }) => (
    <StyledPopup className="show" message={message} onClose={onClose} />
);

export { SuccessMessage };

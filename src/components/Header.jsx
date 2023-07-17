/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

const Header = ({ children }) => {
  return <div>{children}</div>;
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
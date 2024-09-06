import PropTypes from 'prop-types';

const Footer = ({ totalNumOfItems }) => {
  return (
    <footer>
        <p>You have total of {totalNumOfItems} {totalNumOfItems === 1 ? "item" : "items"} in the TODO list.</p>
        <p>&copy; Filip, {(new Date).getFullYear()}</p>
    </footer>
  )
}

export default Footer;


Footer.propTypes = {
    totalNumOfItems: PropTypes.number.isRequired
}


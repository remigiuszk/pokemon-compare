import Footer from "./Footer";
import PageHeader from "./page-header/navbar/PageHeader";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div>
      <PageHeader />
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

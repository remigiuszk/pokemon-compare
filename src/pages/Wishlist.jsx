import React from "react";
import Layout from "../modules/layout/Layout";
import styled from "styled-components";
import StyledContainer from "../modules/layout/Container";
import Header from "../typography/Header";
import { connect } from "react-redux";
import * as wishListActions from "../redux/actions/wishlistActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

const WishlistContainer = styled(StyledContainer)`
  background-color: ${(props) => props.theme.colors.linen};
  height: 100vh;
  align-items: start;
  justify-content: center;
`;

const Wishlist = (props) => {
  const [state, setState] = React.useState({ wishlistEntry: { name: "" } });

  const handleChange = (event) => {
    const wishlist = { ...state.wishlistEntry, name: event.target.value };
    setState({ wishlistEntry: wishlist });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.actions.createWishlistEntry(state.wishlistEntry);
  };

  return (
    <Layout>
      <WishlistContainer direction="column">
        <Header>Welcome to the wishlist page.</Header>
        <form onSubmit={handleSubmit}>
          <h2>Add to Wishlist</h2>
          <input type="text" onChange={handleChange} value={state.wishlistEntry.title} />
          <input type="submit" value="Save" />
          {props.wishlist.map((record) => (
            <div key={record.name}>{record.name}</div>
          ))}
        </form>
      </WishlistContainer>
    </Layout>
  );
};

Wishlist.propTypes = {
  actions: PropTypes.object.isRequired,
  wishlist: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    wishlist: state.wishlist
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(wishListActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);

import React from "react";
import { connect } from "react-redux";

//mapstate to props as the name implies maps the react state to the props
//after that the props can be use in mapdispatch to props

const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);
export default List;

import React from 'react';

const Toolbar = (props) => {


  return (
    <div className="toolbar">
      {props.filters.map((filter, index) => <div onClick={props.onSelectFilter} className={props.selected === filter ? "filter selected" : "filter"} key={index}>{filter}</div>)}
    </div>
  );
};

export default Toolbar;
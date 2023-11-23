import React from 'react';

const ProjectList = (props) => {
  return (
    <div className="projects">
      {props.projects.map((item, index) => <div className="project"><img alt="" src={item.img} key={index}></img></div>)}
    </div>
  );
};

export default ProjectList;
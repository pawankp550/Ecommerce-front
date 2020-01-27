import React from "react";
import './list.scss';

const List = (props) => {

const { title, data } = props.details

const renderList = () => {
 return Object.keys(data).map( key => {
      return (
               <div key={key} className="list-row">
                <div className="list-column">
                    <span className="list-value">{data[key]}</span>
                </div> 
               </div>
      )
  })
}
  
  return (
  <div className="list">
    <div className="list-title">{title}</div>
    <div className="list-container">{renderList()}</div>
  </div>
  )
}


export default List
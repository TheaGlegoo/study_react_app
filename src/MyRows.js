import React from "react";

class MyRows extends React.Component {
  createWbsRows(){
    console.log(this.props.data);
    return (
      this.props.data.map( wbs => {
        return(
          <tr>{
            wbs.map( column => {
              return <td>{column}</td>;
            })
          }</tr>
        )
        
      })
    )
  }
  render() { 
    console.log(this.props.data);
    return (
      <div className="MyRow">
        {this.createWbsRows.bind(this)()}
      </div>
    );
  }
}
  
export default MyRows;
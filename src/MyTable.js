import React from "react";
import MyRows from "./MyRows.js";
import MyWbsAddForm from "./MyWbsAddForm.js";

class MyTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {data:[["hoge","fuga","foo","bar"],["hogehoge","fugafuga","foobar","barfoo"]]};
  }
  addWbsData(wbs){
    this.state.data.push(wbs);
    console.log(wbs);
    console.log(this.state.data);
    this.setState({data:this.state.data});
  }
  render() { 
    return (
      <div className="MyTable">
        <table>
          <thead>
            <tr>
              <th colSpan={this.state.data.length}></th>
            </tr>
          </thead>
          <tbody>
            <MyRows data = {this.state.data}/>
          </tbody>
        </table>
        <MyWbsAddForm myOnSubmit={this.addWbsData.bind(this)} />
      </div>
    );
  }
}
  
export default MyTable;
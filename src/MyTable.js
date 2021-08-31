import React from "react";
import MyRows from "./MyRows.js";
import MyWbsAddForm from "./MyWbsAddForm.js";

// 表を作成・管理するクラス。
class MyTable extends React.Component {
  // コンストラクタ。stateを使わない場合には省略可能。props周りはおまじない。
  constructor(props){
    super(props);
    // このように書くことで、stateを定義できる。
    this.state = {data:[["hoge","fuga","foo","bar"],["hogehoge","fugafuga","foobar","barfoo"]]};
  }
  // WBSのデータを追加するための関数。子のデータ追加用フォームに渡して、呼んでもらう。
  addWbsData(wbs){
    let array = this.state.data.slice();
    array.push(wbs);
    console.log(wbs);
    console.log(this.state.data);
    // このthis.setStateを呼んで、Stateの中身を一部～全部再定義するとstateが変わる。単に代入するだけではNG。
    this.setState({data:array});
  }
  // WBSのデータを編集するための関数。子の行管理クラスに渡して、呼んでもらう。
  changeRowData(index,rowData){
    console.log("Called index = #d",index);
    let array = this.state.data.slice();
    array[index] = rowData;
    console.log(this.state.data);
    this.setState({data:array});
  }
  // Reactコンポーネントの心臓部。ここのreturnの中に、HTMLタグのような文法でコードを書くといい感じに表示してくれる。
  // renderの中で自分の関数を呼ぶときは、this.メソッド名.bind(this)と書く必要がある。これはJavascriptの仕様を理解すること。
  // 簡単に説明すると、bind(this)と書かないと、呼び出した関数の中で参照するthisが、クラス自身を指せなくなってしまう。
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
            <MyRows data={this.state.data} onDataChanged={this.changeRowData.bind(this)}/>
          </tbody>
        </table>
        <MyWbsAddForm dataLength={this.state.data[0].length} myOnSubmit={this.addWbsData.bind(this)} />
      </div>
    );
  }
}
  
export default MyTable;
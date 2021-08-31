import React from "react";
import MyRow from "./MyRow.js"

// 表の中のデータ行をすべて管理するクラス。
class MyRows extends React.Component {
  // 行データを編集する場合の動作を定義する。
  createOnDataChangedHandler(index){
    // ここでは親からpropsとして、onDataChangedという関数をもらえることを想定する。
    // onDataChangedは引数にインデックスと行データを受け取って、該当インデックスのデータを引数の行データで書き換える関数。
    
    // ここのリターン式の内容は要勉強。ラムダ式で関数を戻す。
    // 部分適用という考え方。onDataChangedはindexとrowData二つの引数が必要だが、
    // この関数を呼ぶことで、indexだけを先に決めておいて、あとからrowDataだけを引数に渡せばonDataChangedを読んでくれる
    // 新たな関数を作って返してくれる。
    // これは関数型プログラミングのパラダイム。オブジェクト指向の考え方でいうと、関数型のクラスを作って返してくれるファクトリだと思えばよい。
    return (rowData)=>this.props.onDataChanged(index,rowData);
  }
  // ここは行を作る関数。リターンする型はReact.Component型。
  createWbsRows(){
    console.log(this.props.data);
    let index=0;
    return (
      // map操作は、配列内の全部の要素に対して、引数に渡した関数を適用して、要素の値を変えた状態の新たな配列を返してくれる。。
      // ここでの処理は、let tmp; for( wbs in this.props.data ){tmp = f(wbs)}と同じようなもの。
      // 親から受け取ったwbsのデータそれぞれを、MyRowクラスに渡して行データを生成し、それを配列化してreturnする。
      // MyRowクラスには、createOnDataChangedHandlerで、自分のthis.props.onDataChangedにindexの値だけを部分適用した関数を渡しておく。
      this.props.data.map( wbs => {
        return(
          <tr>{
            <MyRow rowData={wbs} onDataChanged={this.createOnDataChangedHandler(index++).bind(this)}/>
          }</tr>
        )
        
      })
    )
  }
  render() { 
    console.log(this.props.data);
    return (
      <div className="MyRows">
        {this.createWbsRows.bind(this)()}
      </div>
    );
  }
}
  
export default MyRows;
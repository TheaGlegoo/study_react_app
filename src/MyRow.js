import React from "react";

// 一行当たりの管理クラス。
class MyRow extends React.Component {
    constructor(props){
        super(props);
        this.state={
            myRowData:this.props.rowData,   // 1行当たりのデータの配列(長さは列数と同じ)
            isEdit:false                    // 編集中かどうかの変数
        }
    }
    // 行編集用フォームに文字が入力された場合のハンドラを返す関数。
    // ここも部分適用の考え方。myRowDataは列数分の配列で、indexは列のどの位置かを示す。
    // この関数にあらかじめindexを伝えてハンドラを受け取ることで、事前に特定列の編集用ハンドラを作ることができる。
    createHandler(index){
        return (e)=>{
            let array = this.state.myRowData;
            array.[index] = e.target.value;
            this.setState ({myRowData:array});
        }
    }
    // 行編集用フォームを表示するための関数。
    createForm(){
        let ret = [];
        for(let index=0;index<this.state.myRowData.length;index++){
            // 入力用フォームを列数分作る。フォームの文字が変わるたび、入力用ハンドラを呼び出す。
            ret[index] = <input type="text" value={this.state.myRowData[index]} onChange={this.createHandler(index).bind(this)} />
        }
        return ret;
    }
    // 1行分の表示を定義する関数。
    createWbsRow(){    
        // isEditで分岐。編集中なら編集用フォームを作る。
        if(this.state.isEdit){
            return this.createForm();
        }else{
            // 編集中でないなら、通常通り表の行データを作る。
            return(
                this.props.rowData.map( column => {
                    return <td>{column}</td>;
                })
            )
        }
    }
    // 編集用ボタンがクリックされた場合の動作。
    // 編集中に移行して、編集用フォームの初期値を行の表示データに合わせておく。
    editClicked(){
        this.setState ({
            myRowData:this.props.rowData,
            isEdit:true
        });
    }
    // 編集用ボタンがクリックされた場合の動作。
    // フォーム内の文字をstateで保持しておいて、ボタンがクリックされた時にその値でデータ変更を祖父クラスであるMyTableに要請する。
    // MyRowクラスは、自分が何行目かは知らないが、MyRowsクラス(親クラス)がonDataChangedに、行数に当たる引数(index)を部分適用してから渡してくれているので、
    // ここの処理では自分が何行目かを意識せずに行える。
    // submit後は編集中フラグを落とす。
    submitClicked(){
        this.props.onDataChanged(this.state.myRowData);
        this.setState ({isEdit:false});
    }
    // 編集中かどうかをみて表示するボタンの種類を変更。
    createButton(){
        if(this.state.isEdit){
            return <button onClick={this.submitClicked.bind(this)}>Submit</button>
        }else{            
            return <button onClick={this.editClicked.bind(this)}>Edit</button>     
        }
    }
    render() { 
      console.log(this.props.rowData);
      return (
        <div className="MyRow">
          {this.createWbsRow.bind(this)()}
          {this.createButton.bind(this)()}
        </div>
      );
    }
}
  
export default MyRow;
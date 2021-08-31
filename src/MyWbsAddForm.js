import React from "react";
// 表への行追加用フォーム。
class MyWbsAddFrom extends React.Component {

    constructor(props){
        super(props);
        this.state={
            data:Array(this.props.dataLength).fill("")  // フォームに表示している文字列用の変数。Arrayのコンストラクタに長さを引数として渡して、fill関数でヌル文字埋めにしている。
        }

    }
    // 新規データ入力フォームに文字が入力された場合のハンドラを返す関数。
    // ここは部分適用の考え方。this.state.dataは列数分の配列で、indexは列のどの位置かを示す。
    // この関数にあらかじめindexを伝えてハンドラを受け取ることで、事前に特定列の編集用ハンドラを作ることができる。
    createHandler(index){
        return (e)=>{
            let array = this.state.data;
            array.[index] = e.target.value;
            this.setState ({data:array});
        }
    }
    // 新規データ入力フォームを作るための関数。
    createForm(){
        let ret = [];
        for(let index=0;index<this.props.dataLength;index++){
            ret[index] = <input type="text" value={this.state.data[index]} onChange={this.createHandler(index).bind(this)} />
        }
        return ret;
    }

    // submitボタンがクリックされた場合のイベント。
    // this.state.dataのslice関数で、いったんthis.state.dataのデュープコピーを取得。
    // それを親クラスのMyTableクラスに渡して、this.state.dataの値を使って新規行を作ってもらう。
    // そのあと自分のthis.state.dataをクリア。これをしないと処理後に入力フォームに前の入力文字が残り続けてしまう。
    myWbsAddSubmit(){
        console.log(this.state.data);
        this.props.myOnSubmit(this.state.data.slice())
        this.state.data.fill("");
        this.setState(
            {
                data:this.state.data
            }
        )
    }
    render(){
        return(
            <div className="MyTable">
            <form onSubmit={this.myWbsAddSubmit}>
                {this.createForm()}
                <input type="button" value="add" onClick={this.myWbsAddSubmit.bind(this)}/>
            </form>
            </div>
        )
        
    }
}
export default MyWbsAddFrom;
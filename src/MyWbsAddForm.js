import React from "react";
class MyWbsAddFrom extends React.Component {
    constructor(props){
        super(props);
        this.state={
            first:"",
            second:"",
            third:"",
            forth:"",
        }

    }
    handleChangeFirst(e){
        this.setState({first:e.target.value}); 
    }
    handleChangeSecond(e){
        this.setState({second:e.target.value}); 
    }
    handleChangeThird(e){
        this.setState({third:e.target.value}); 
    }
    handleChangeForth(e){
        this.setState({forth:e.target.value}); 
    }

    myWbsAddSubmit(){
        {this.props.myOnSubmit([this.state.first, this.state.second, this.state.third, this.state.forth])}
        this.setState(
            {
                first:"",
                second:"",
                third:"",
                forth:"",
            }
        )
    }
    render(){
        return(
            <div className="MyTable">
            <form onSubmit={this.myWbsAddSubmit}>
                <input type="text" placeholder="first" value={this.state.first} onChange={this.handleChangeFirst.bind(this)} />
                <input type="text" placeholder="second" value={this.state.second} onChange={this.handleChangeSecond.bind(this)} />
                <input type="text" placeholder="third" value={this.state.third} onChange={this.handleChangeThird.bind(this)} />
                <input type="text" placeholder="forth" value={this.state.forth} onChange={this.handleChangeForth.bind(this)} />
                <input type="button" value="add" onClick={this.myWbsAddSubmit.bind(this)}/>
            </form>
            </div>
        )
        
    }
}
export default MyWbsAddFrom;
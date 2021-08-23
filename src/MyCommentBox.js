import React from "react";

class Comment extends React.Component{
    render(){
      return(
        <div className="comment">
          <h2 className="commentAuthor">
            {this.props.author}
          </h2>
           {this.props.children}
        </div>
      );
    }
}
  
class CommentList extends React.Component{
    render(){
      var commentNodes = this.props.data.map(function(comment){
            return(
            <Comment author = {comment.author}>
                {comment.text}
            </Comment>
            );
        });
      return(
        <div className="commentList">
         {commentNodes}
        </div>
      );
    }
}
  
class CommentForm extends React.Component{
  constructor(props){
    super(props);
    this.authorInput = React.createRef();
    this.textInput = React.createRef();
  }
    handleSubmit(e){
      console.log(this.authorInput.current.value);
      e.preventDefault();
      this.props.onCommentSubmit({author:this.authorInput.current.value,text:this.textInput.current.value});
      // authorInput.value = ""
      // textInput.value = ""
      return;
    }
    render(){
      return(
        <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="Your name" ref={this.authorInput}/>
          <input type="text" placeholder="Say something..." ref={this.textInput}/>
          <input type="submit" value = "Post"/>
        </form>
      );
    }
}
  
class CommentBox extends React.Component{
  
    constructor(props) {
        super(props);
        this.state = {data:[]};
      }
  
    handleCommentSubmit(comment){
      var comments = this.state.data;
      var newComments = comments.concat([comment]);
      this.setState({data:newComments});
      return;
    }
  
    render(){
      return(
        <div className="commentBox">
          <h1>Comments</h1>
          <CommentList data={this.state.data}/>
          <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
        </div>
      );
    }
}

export default CommentBox;
//   ReactDOM.render(
//     <CommentBox data={data}/>,
//     document.getElementById('content')
//   );
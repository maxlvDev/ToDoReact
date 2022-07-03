import React from 'react'
import MyButton from './Mybutton'

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.post.title} </strong>
            </div>
            <div className="post__btns">
             <MyButton onClick = {() =>props.remove(props.post)}>Удалить</MyButton>                
            </div>
        </div>
    );
};

export default PostItem;

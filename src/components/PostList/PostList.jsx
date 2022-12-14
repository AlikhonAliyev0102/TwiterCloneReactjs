import React from 'react';
import PostListIteam from '../PostListIteam/PostListIteam';
import './PostList.css'



const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
    const elements = posts.map((item) => {
        const {id, ...itemProps} = item
        return(
            <li key={item.id} className="list-group-item">
                <PostListIteam 
                {...itemProps} 
                onDelete={() => onDelete(id) }
                onToggleImportant={()=> onToggleImportant(id)}
                onToggleLiked={()=>onToggleLiked(id)}
                />
            </li>
        )
    })
    return (
        <ul className='app-list list-group'>
           {elements}
            
        </ul>
    );
};


export default PostList;
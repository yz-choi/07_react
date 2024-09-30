import { useEffect, useRef, useState } from "react";
import PostContainer from "./PostContainer";

const Post = () =>
{
    const [postList, setPostList] = useState([]);
    const [post, setPost] = useState({
        id:0,
        title:"",
        content:""
    });

    const indexRef = useRef(0);

    useEffect (()=>
        {
            console.log(indexRef.current);
        }, []);

    const onChangeHandler = e =>
    {
        setPost({
           ...post,
            [e.target.name]: e.target.value
        });
    }

    const addPost = () =>
    {
        setPostList([
            ...postList,
            post
        ]);
        indexRef.current = indexRef.current+1;
        setPost(
            {
                id: indexRef,
                title:"",
                content:""
            }
        );

        console.log(postList);
    }

    return (
        <>
            <h1>게시판</h1>
            <input type="text" name="title" placeholder="제목" onChange={onChangeHandler} value = {post.title}/>
            <br/>
            <textarea type="text" name="content" placeholder="내용" onChange = {onChangeHandler} value ={post.content}/>
            <br/>
            <button onClick={addPost}>게시</button>
            <br/>

            <input type="text" name="searcher" placeholder="검색"/>

            <PostContainer postList={postList} setPostList={setPostList}/>
    
        </>
    )
}

export default Post;
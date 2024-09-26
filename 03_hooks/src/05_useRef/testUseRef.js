import { useRef, useState } from "react";

const PostComponent = () =>
{
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({
        title:"",
        content:""
    });

    const postRef = useRef();

    const onChangeHandler = e =>
    {
        setPost({
           ...post,
            [e.target.name]: e.target.value
        });
    }

    const onClickPosting = () =>
    {
        setPosts([
            ...posts,
            post
        ]);

        setPost(
            {
                title:"",
                content:""
            }
        );
    }


    return (
        <>
            <h1>게시판</h1>
            <input type="text" name="title" placeholder="제목" onChange={onChangeHandler} value = {post.title} ref={postRef}/>
            <br/>
            <textarea type="text" name="content" placeholder="내용" onChange = {onChangeHandler} value ={post.content} ref={postRef}/>
            <br/>
            <button onClick={onClickPosting}>게시</button>
            <br/>

            <input type="text" name="searcher" placeholder="검색"/>

            {posts.map(post => {return(
                <div>
                    <li>
                        <h3>{post.title}</h3>
                        <pre>{post.content}</pre>
                    </li>
                </div>
            )})}
        </>
    )
}

export default PostComponent;
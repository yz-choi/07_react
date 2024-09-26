import { useRef, useState } from "react";

const PostComponent = () =>
{
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({
        title:"",
        postcontent:""
    });

    const postRef = useRef();

    const onClickPosting = () =>
    {
        console.log(post);
    }

    const onChangeHandler = e =>
    {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        });
    }

    const postList = posts.map(post =>
    {
        return(
            <p key = {post.title}>
                
            </p>
        )
    }
    )
    return (
        <>
            <h1>게시판</h1>
            <input type="text" name="title" placeholder="제목" onChange={onChangeHandler} ref={postRef}/>
            <br/>
            <textarea type="text" name="postcontent" placeholder="내용" onChange={onChangeHandler} ref={postRef}/>
            <br/>
            <button onClick={onClickPosting}>게시</button>
            <br/>

            <input type="text" name="searcher" placeholder="검색"/>
        </>
    )
}

export default PostComponent;
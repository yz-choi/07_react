const Item = (post, setPostList, postList) =>
{
    const removePost = () =>
    {
        const result = postList.filter(curPost => curPost !== post);
        setPostList(result);
        console.log("-- post is deleted --");
    }

    return(
        <>
            <div>
                <li>
                    <b>{post.title}</b>
                    {post.content}
                    <button onClick={removePost}>삭제</button>
                </li>
            </div>
        </>
    )
}

const PostContainer = ({postList, setPostList}) =>
{
    return(
        postList.map((current, index) => 
        {
            return <Item post = {current} key = {index} setPostList = {setPostList} postList = {postList}/>
        })
    )
}

export default PostContainer;
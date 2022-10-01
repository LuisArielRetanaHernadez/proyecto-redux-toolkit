// react-redux
import { useSelector } from "react-redux";

// post
import { PostAuthor } from "./postAuthor";

// react-router-dom
import { Link } from "react-router-dom";
// freactures of post
import { TimeAgo } from "./TimeAgo";
import { ReactionButtons } from "./ReactionButtons";

export const SinglePostPage = ({match}) => {

    const { postId } = match.params;
    console.log(postId)

    const post = useSelector(state => 
        state.posts.find(post => post.id === postId)
    )
    console.log(post)
    if (!post) {
        return (
            <section>
                <h2>Post not found</h2>
            </section>
        )
    }

    return (
        <section>
            <article className="post">
                <h2>{post.title}</h2>
                <div>
                    <TimeAgo timestamp={post.date}/>
                    <PostAuthor userId={post.user}/>
                </div>
                <p className="post-content">{post.content}</p>
                <ReactionButtons post={post}/>
                <Link to={`/editPost/${post.id}`} className="button">
                    Edit Post
                </Link>
            </article>
        </section>
    )

}

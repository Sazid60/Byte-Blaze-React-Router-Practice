import { Link } from "react-router-dom";
import placeHolderImage  from'.././assets/404.jpg'

const BlogCard = ({blog}) => {
    const { cover_image, title, description, published_at, id} = blog
    return (

        <Link  to ={`/blogs/${id}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline transition hover:scale-105 border-2 border-primary hover:border-secondary border-opacity-30 ">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image ||placeHolderImage } />
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <span className="text-xs ">{new Date(published_at).toLocaleDateString()}</span>
                <p>{description}</p>
            </div>
        </Link>
    );
};

export default BlogCard;
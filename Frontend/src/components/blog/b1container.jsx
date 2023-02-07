import './blog.css'

const B1container = ({content, image, alignment}) => {
return <>
    <div className="blog-container">
        {alignment==="left" && <div className="blog-child"><img src ={image}/></div>}
        <div className="blog-child content"><p>{content}</p></div>
        {alignment==="right" && <div className="blog-child"><img src ={image}/></div>}
    </div>
</>
}

export default B1container
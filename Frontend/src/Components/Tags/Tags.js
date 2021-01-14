import React from 'react'
import './Tags.css'
function Tags(props) {
    return (
        <section className="tagsList">
            {
                props.tags.map((tag,index) => 
                    <p className="tags" key={index}>{tag}</p>
                    )
            }
        </section>
    )
}
export default Tags
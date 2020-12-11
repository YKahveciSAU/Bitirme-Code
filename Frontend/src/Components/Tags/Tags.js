import React from 'react'
import './Tags.css'
function Tags(props) {
    return (
        <section className="tagsList">
            {
                props.tags.map(tag => 
                    <p className="tags">{tag}</p>
                    )
            }
        </section>
    )
}
export default Tags
import React from 'react'
import './BlogPostCard.scss'

function BlogPostCard(props) {
    const {feature, header, content, mainImgPath, profileImgPath, profileName, profileDate} = props
    return (
        <div className='blog_post_card_container'>
            <div className='image_container'>
                <img src={mainImgPath}/>
            </div>
            <div className='blog_post_info_container'>
                <h3>{feature}</h3>
                <div className='header_and_next_tab_icon'>
                    <h2>{header}</h2>
                    <img src={`${import.meta.env.BASE_URL}assets/openInNewTab.svg`}/>
                </div>
                <p>{content}</p>
                <div className='profile_info_container'>
                    <img src={profileImgPath}/>
                    <div className='name_and_date'>
                        <h4>{profileName}</h4>
                        <p>{profileDate}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPostCard;


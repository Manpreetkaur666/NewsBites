import React from 'react'
import moment from "moment";

const NewsItem = (props) => {

  //destructing
  let {title, description, imageUrl, newsUrl, lastUpdate, author, source} = props;
  return (
    <div>
      <div className="card my-3 mx-3">
          <img src={!imageUrl?"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg":imageUrl} className="card-img-top" style={{height:"250px"}}alt="..."/>
          <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <span className="badge text-bg-info my-1">source: {source}</span>
                    <p className="card-text">{description}...</p>
                    <a target="blank" href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
                    <p className="card-text my-1">
                    <small className="text-muted">by {author} on {moment(lastUpdate).utc().format('YYYY-MM-DD')}
                    </small>
                    </p>
          </div>
      </div>
    </div>
  )
}

export default NewsItem

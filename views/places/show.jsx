const React = require('react')
const Def = require('../default')

function show(data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className='border'>
                    <h2 className='rant'>{c.rant ? 'Rant! :(' : 'Rave! :)'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={data.place.pic} alt={data.place.name} />

                        <h3>
                            Located in {data.place.city}, {data.place.state}
                        </h3>

                        <h3>
                            {data.place.showEstablished()}
                        </h3>
                        <h5>
                            serving {data.place.cuisines}
                        </h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <div>
                            <h2>Ratings:</h2>
                            <p>currently unrated</p>
                        </div>

                        <div>
                            <h2>Comments:</h2>
                            {comments}
                        </div>

                        <div className="row">
                            <div className="col-sm-5">
                                <h5>
                                    Founded In {data.place.founded}
                                </h5>
                            </div>
                        </div>

                        <div>
                            <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">Edit</a>
                            <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                                <button type="submit" className="btn btn-danger">Delete</button>
                            </form>
                        </div>

                        <div>
                            <form method='POST' action={`/places/${data.place.id}/rant`}>
                                <div className="form-group">
                                    <label htmlFor="author">Author</label>
                                    <input className="form-control" id="author" name="author" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="content">Content</label>
                                    <textarea className="form-control" id="content" name="content" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="stars">Star Rating</label>
                                    <input type='number' step='0.5' className="form-control" id="stars" name="stars" />
                                </div>
                                <div className="form-check">
                                    <label className='form-check-label' htmlFor="rant">Rant</label>
                                    <input type='checkbox' className="form-check-input" id="rant" name="rant" />
                                </div>

                                <button type="submit" className="btn btn-danger">Post rant</button>
                            </form>
                        </div>

                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = show

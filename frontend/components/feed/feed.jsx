import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.match.params.id !== nextProps.match.params.id){
      this.props.fetchUser(nextProps.match.params.id);
    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
  }

  render(){
    if(!this.props.user) return null;
    debugger;

    return (
      <div className="feed-container">
        <h1 className="feed-header">
          Most Recent Photos
        </h1>

        <div className="feed-photos">
          {Object.values(this.props.photos).reverse().map((photo)=>{
              return <Link to={`/profile/${this.props.userId}/photos/${photo.id}`}>
                <img src={photo.photoUrl} />
              </Link>
          })}
        </div>
      </div>
    );
  }

}

export default withRouter(Feed);

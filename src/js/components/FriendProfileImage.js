import React from "react";

export default class FriendProfileImage extends React.Component {

    constructor(props) {
        super(props);

        console.log("profileimage");

    }

    createDefaultProfilImage() {
        return <img src={'https://b.thumbs.redditmedia.com/GVc0WVhrmqvIQyMolx763ItKqJ0krwqZLOw7nlg03uY.jpg'}
                    alt="default" width="140px" height="140px" className="img-thumbnail" id="pic"/>;
    }

    render() {
        return (
            <div>{this.createDefaultProfilImage()}</div>
        );
    }
}
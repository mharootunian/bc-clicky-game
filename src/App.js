import React from 'react';
import images from "./images";
import ClickyImage from "./components/ClickyImage";

class App extends React.Component {
    state = {
        score: 0,
        highscore: 0,
        imagesClicked: [],
        images
    };

    imageClicky = (id) => {
        if (this.state.imagesClicked.includes(id)) {
            //lose
            this.setState({
                score: 0,
                imagesClicked: []
            });
            alert("clicked");
        } else {
            let newImagesClicked = this.state.imagesClicked;
            newImagesClicked.push(id);

            // this.setState({
            //     imagesClicked: newImagesClicked
            // });

            console.log(("New Images Clicked"))
            console.log(this.state.imagesClicked)
        }
    };

    render() {
        return (
            <div>
                {this.state.images.map(img => (
                        <ClickyImage
                            id={img.id}
                            src={img.src}
                            key={img.id}
                            imageClick={this.imageClicky}
                        />

                    )
                )
                }
            </div>
        );
    };
};

export default App;

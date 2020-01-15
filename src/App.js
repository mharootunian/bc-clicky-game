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

    render() {
        return (
            <div>
                {this.state.images.map(img => (
                        <ClickyImage
                            id={img.id}
                            src={img.src}
                            key={img.id}
                        />

                    )
                )
                }
            </div>
        );
    };
};

export default App;

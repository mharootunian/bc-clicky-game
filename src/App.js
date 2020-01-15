import React from 'react';
import images from "./images";
import ClickyImage from "./components/ClickyImage";
import "./App.css";

class App extends React.Component {
    state = {
        score: 0,
        highscore: 0,
        imagesClicked: [],
        images,
        status: "Click an image to get started!"
    };

    shuffleImages(images) {
        for (let i = images.length - 1; i > 0; i--) { // starting with the last element in the images array
            let x = Math.floor(Math.random() * (i + 1));
            let temp = images[i]; // take the contents of images[i] and store them temporarily
            images[i] = images[x]; //replace the contents of images[i] with the contents of images[x]
            images[x] = temp; // replace the contents of images[x] with the former contents of images[i]
        }
        this.setState({
            images: images
        });
    };

    imageClicky = (id) => {
        if (this.state.imagesClicked.includes(id)) {
            //lose
            this.setState({
                score: 0,
                imagesClicked: [],
                highscore: this.state.score,
                status: "You clicked the same image twice! You lose! NEW GAME!"
            });
            this.shuffleImages(this.state.images);

        } else {
            if (this.state.score >= 11) {
                //win
                this.setState({
                    score: 0,
                    highscore: 12,
                    status: "Nice win! New Game!"
                })
            } else {
                this.setState({
                    score: this.state.score + 1,
                    status: "Good pick..."
                })
            }
            let newImagesClicked = this.state.imagesClicked;
            newImagesClicked.push(id);

            console.log(("New Images Clicked"));
            console.log(this.state.imagesClicked);
            this.shuffleImages(this.state.images);

        }
    };

    render() {
        return (
            <div className={"container"}>
                <div>
                    Welcome to Clicky Game!
                    <p>
                        Click on the images. Everytime you click an image, all the images will shuffle around, waiting
                        for you to click again. If you click the same image more than once before the round is over, you
                        lose!
                    </p>
                    Score: {this.state.score} <br/>
                    High Score: {this.state.highscore}<br/>
                    {this.state.status}
                </div>
                <div className={"img-container"}>
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
            </div>
        );
    };
};

export default App;

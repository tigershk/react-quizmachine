import Money from './Money';
import React from 'react';
import Questions from './Questions';

class Question extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    if (this.props.fetchQuestion !== undefined) {
      this.props.fetchQuestion();
    }
  }

  play(tune) {
    let snd = new Audio(tune);
    snd.play();
  }

  result() {
    switch (this.props.status) {
      // display crying minion and play wrong answer sound 
      case "lose":
        return (<div><iframe src="https://giphy.com/embed/gGn9eq3prU6m4" width="480" height="320" frameBorder="1" margin="150" className="main__score--image" allowFullScreen>
        </iframe>
          {this.play("wrong.mp3")}
        </div>)

      case "win":
        // display happy minions and right answer sound
        return (<div><iframe src="https://giphy.com/embed/MOWPkhRAUbR7i" width="480" height="320" frameBorder="1" margin="150" className="main__score--image" allowFullScreen>
        </iframe>
          {this.play("right.mp3")}
        </div>)
      default:
        return (<img className="main__score--image" src='minion.jpg' />)
    }
  }

  render() {

    return (
      <main className="main">
        <section className="main__score">
          <section className="main__score--money">
            <Money score={this.props.money}
              status={this.props.status}
              friend={this.props.friend}
              audience={this.props.audience}
              fifty={this.props.fifty}
              friendLine={this.props.friendLine}
              audienceLine={this.props.audienceLine}
              newGame={this.props.newGame}
              fiftyLine={this.props.fiftyLine}
              walkFn={this.props.walkFn}
            />
          </section>

          {this.result()}

        </section>

        <Questions
          key={this.props.quizData}
          quizData={this.props.quizData}
          correctAnswerFn={this.props.correctAnswerFn}
          incorrectAnswerFn={this.props.incorrectAnswerFn}
          fifty={this.props.fifty}
          fiftyLine={this.props.fiftyLine}
          response={this.props.response}
        />

      </main>

    );

  }
};

export default Question;
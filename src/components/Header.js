<<<<<<< HEAD
import React from 'react';

const Header = (props) => (
        <header className="top">
        <h1>
            Catch
            <span className="ofThe">
                <span className="of">Of</span>
                <span className="the">The</span>
            </span>
            Day
        </h1>
        <h3 className="tagline">
            <span>{props.tagline}</span>
        </h3>
    </header>
    );

{/*class Header extends React.Component {
    render(){
        return (
            <header className="top">
                <h1>
                    Catch
                    <span className="ofThe">
                        <span className="of">Of</span>
                        <span className="the">The</span>
                    </span>
                    Day
                </h1>
                <h3 className="tagline">
                    <span>{this.props.tagline}</span>
                </h3>
            </header>
        )
    }
}*/}

=======
import React from 'react';

const Header = (props) => (
        <header className="top">
        <h1>
            Catch
            <span className="ofThe">
                <span className="of">Of</span>
                <span className="the">The</span>
            </span>
            Day
        </h1>
        <h3 className="tagline">
            <span>{props.tagline}</span>
        </h3>
    </header>
    );

{/*class Header extends React.Component {
    render(){
        return (
            <header className="top">
                <h1>
                    Catch
                    <span className="ofThe">
                        <span className="of">Of</span>
                        <span className="the">The</span>
                    </span>
                    Day
                </h1>
                <h3 className="tagline">
                    <span>{this.props.tagline}</span>
                </h3>
            </header>
        )
    }
}*/}

>>>>>>> 6ea5f477453f884d729f0ac7b7aa939fbcb24f8c
export default Header;
import React from 'react';
import HeaderConstructor from './header/HeaderConstructor';
import SidebarConstructor from './sidebar/SidebarConstructor';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isOpenedSidebar: false};
    }

    handleSidebarToggle = () => this.setState({isOpenedSidebar: !this.state.isOpenedSidebar});

    render() {
        return (
            <div>
                <HeaderConstructor toogleSidebar={this.handleSidebarToggle} />
                {this.props.children}
                <SidebarConstructor isOpened={this.state.isOpenedSidebar} toogleSidebar={this.handleSidebarToggle} />
            </div>
        );
    }
}

export default App;

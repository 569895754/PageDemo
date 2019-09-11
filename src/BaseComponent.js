import React from 'react';
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import Page from "./Page";

class BaseComponent extends React.Component{

    state = {
      page: new Page(),
    };

    render() {
        return (
            <div style={{ display: 'flex' }}>
                <ComponentA page={this.state.page} />
                <ComponentB page={this.state.page} />
            </div>
        );
    }
}

export default BaseComponent;
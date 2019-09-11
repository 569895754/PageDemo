import React from 'react';

class ComponentA extends React.Component{
    componentDidMount() {
        const { page } = this.props;
        page.setComponentContextMap({'ComponentA': this});
        page.setComponentValueMap({'ComponentA': {}});
    }

    onTest = () => {
        const { page } = this.props;
        page.setComponentValueByName('ComponentB', 'name', 'componentAName');
        page.setComponentValueByName('ComponentB', 'age', 'componentAAge');
        console.log("设置成功！");
    };

    render() {
        const { page } = this.props;
        return (<div style={{ backgroundColor: '#dfdfdf', flex: 1 }}>
            我是ComponentA：
            { page.getComponentValueByName('ComponentA', 'name') }
            :
            { page.getComponentValueByName('ComponentA', 'age') }
            <div style={{ padding: '20px' }}>
                <button onClick={() => this.onTest()}>这个按钮可以把B组件的值设置为 name: componentAName, age: componentAAge</button>
            </div>
        </div>);
    }
}

export default ComponentA;
import React from 'react';

class ComponentB extends React.Component{
    componentDidMount() {
        const { page } = this.props;
        page.setComponentContextMap({'ComponentB': this});
        page.setComponentValueMap({'ComponentB': {name: 'Bob', age: 12}});
    }

    onTest = () => {
        const { page } = this.props;
        const AName = page.getComponentValueByName('ComponentA', 'name');
        const AAge = page.getComponentValueByName('ComponentA', 'age');
        alert(AName + AAge);
    };

    onTest1 = () => {
        const { page } = this.props;
        page.setComponentValueByName('ComponentA', 'name', 'BOOOM');
        page.setComponentValueByName('ComponentA', 'age', 123);
        console.log("设置成功！");
    };

    render() {
        const { page } = this.props;
        return (<div style={{ border: '1px solid #dfdfdf', flex: 1 }}>
            我是ComponentA：
            { page.getComponentValueByName('ComponentB', 'name') }
            <span style={{ padding: '0px 20px'}}></span>
            { page.getComponentValueByName('ComponentB', 'age') }
            <div style={{ padding: '20px' }}>
                <button onClick={() => this.onTest()}>这个按钮可以弹出ComponentA的值</button>
            </div>
            <div style={{ padding: '20px' }}>
                <button onClick={() => this.onTest1()}>这个按钮可以把ComponentA的值设置为BOOOM, 123</button>
            </div>
        </div>);
    }
}

export default ComponentB;
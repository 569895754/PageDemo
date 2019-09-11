export default class Page {
    constructor() {
        this.componentValueMap = {};
        this.componentContextMap = {};
    }

    setComponentContextMap = (map) => {
        this.componentContextMap = {...this.componentContextMap, ...map};
    };

    setComponentValueMap = (map) => {
        this.componentValueMap = {...this.componentValueMap, ...map};
    };

    setComponentValueByName = (id, name, value) => {
        if (name === null) {
            return;
        }
        let valueMap = this.componentValueMap[id];
        if (valueMap === null || valueMap === undefined) {
            return;
        }
        valueMap[name] = value;
        this.componentContextMap[id].setState({ [name]: value });
    };

    getComponentValueByName = (id, name) => {
        if (name === null) {
            return;
        }
        let valueMap = this.componentValueMap[id];
        if (valueMap === null || valueMap === undefined) {
            return;
        } else {
            return valueMap[name];
        }
    };
}
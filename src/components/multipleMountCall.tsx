import React, { Component } from 'react';

class ComponentB extends Component {
    componentDidMount() {
        console.log("component B mounted");
    }

    render() {
        return <div>Component B</div>;
    }
}

class ComponentC extends Component {
    componentDidMount() {
        console.log("component C mounted");
    }

    render() {
        return <div>Component C</div>;
    }
}

class ComponentD extends Component {
    componentDidMount() {
        console.log("component D mounted");
    }

    render() {
        return <div>Component D</div>;
    }
}

const MultipleMountCall = () => {
    const [showCompB, setCompBToggle] = React.useState(false);
    const [keyId, incrementKeyValue] = React.useState(0);

    React.useEffect(() => console.log("App has mounted"), []);

    const handleToggle = () => setCompBToggle(!showCompB);

    const handleKeyChange = () => incrementKeyValue(keyId + 1);

    return (
        <>
            <div>
                <button onClick={handleToggle}>Toggle B component</button>
                <button onClick={handleKeyChange}>Change C component key</button>
            </div>
            {showCompB && <ComponentB />}
            <ComponentC key={keyId} />
            <ComponentD />
        </>
    );
};

export default MultipleMountCall;
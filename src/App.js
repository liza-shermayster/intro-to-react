const Pet = ({name,animal,breed}) => {
    console.log(props);
    
    return React.createElement('div', {}, [
        React.createElement('h1', {style:{color:'red'}},name),
        React.createElement('h2', {}, animal),
        React.createElement('h2', {}, breed),

    ])

}



const App = () => {
    return React.createElement(
        "div",
        { id: 'something-important' },
        [
            React.createElement("h1", {}, "Adopt me!"),
            React.createElement(Pet, { name: 'Luna', animal: 'Dog', breed: 'Havanese' }),
            React.createElement(Pet, { name: 'Pepper', animal: 'Bird', breed: 'Cocatiel' }),
            React.createElement(Pet, { name: 'Doink', animal: 'Cat', breed: 'Mixed' }),
        ]

    );
};
ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
); 
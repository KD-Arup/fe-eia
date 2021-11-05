export const GraphRow = ({percent, name, count}) => {
    let classes = [`graph-bar`]
    classes = classes.join(' ');
    
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    const color = getRandomColor();
    console.log(`percent${percent} name:${name}`)
    return (
        <div className="graph-row">
            <p>{`${name} - ${count}`}</p>
            <div 
                className={classes} 
                style={
                    {
                        "background-color" : `${color}`,
                        "width": `${percent}%`
                    }
                    }>
            </div>
        </div>
    )
}
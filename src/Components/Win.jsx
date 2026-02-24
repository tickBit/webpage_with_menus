const win = (props) => {
    
    /* the page is "locked" until OK is pressed */
    document.getElementsByClassName("page")[0].style.filter = "blur(2px)";
    document.getElementsByClassName("page")[0].inert = true;
    
    /* the menubar is "locked" until OK is pressed */
    document.getElementsByClassName("App-header")[0].inert = true;
    
    const closeWindow = () => {
        
        document.getElementsByClassName("page")[0].style.filter = "blur(0px)";
        document.getElementsByClassName("page")[0].inert = false;
        document.getElementsByClassName("App-header")[0].inert = false;
        
        return props.onConfirm();
    }
    
    return (
        <>
            <div className="window">
                <div className="close" onClick={closeWindow}>X</div>
                <h2>{props.title}</h2>
                <p>{props.contents}</p>
                <button className="button" onClick={closeWindow}>{props.okButtonText}</button>
            </div>
        </>
    )
}

export default win;
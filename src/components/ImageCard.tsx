


export const ImageCard = (props: {
    title: string,
    link: string
}) => {
    return (
        <div style={{background: "#313331", width: "350px", height: "200px", fontFamily: "Roboto"}}
             className="rounded-3 d-flex flex-column justify-content-center align-items-center ls-1 ">
            <h6 className="highlight fw-semibold ">{props.title.toUpperCase()}</h6>
            <div className="rounded-3">
                <img className="rounded-3 p-2" src={props.link} alt={props.link} width={250} height={150}/>
            </div>
        </div>
    );
};

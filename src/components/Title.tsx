export const Title = ({
                          subString,
                          title
                      }: { subString: string, title: string }) => {
    return (
        <div className="line-spacing-low">
            <p className="highlight">{subString}</p>
            <h3 className="pr-text">{title}</h3>
        </div>
    );
};

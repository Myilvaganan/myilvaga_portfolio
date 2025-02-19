export const Title = ({
                          subString,
                          title
                      }: { subString: string, title: string }) => {
    return (
        <div className="line-spacing-low">
            <p className="highlight ls-2 fs-6">{subString}</p>
            <h4 className="pr-text ls-1 fs-3">{title}</h4>
        </div>
    );
};


export const PageTitle = ({
                              subString,
                              title
                          }: { subString: string, title: string }) => {
    return (
        <div className="line-spacing-low">
            <p className="highlight">{subString}</p>
            <h2 className="pr-text">{title}</h2>
        </div>
    );
};

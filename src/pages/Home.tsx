import Header from "../components/Header.tsx";

export const Home = () => {
    return (
        <main id="home" className="layout-height">
            <div className="header-box">
                <Header/>
            </div>
            <div className="name-box">
                <p className="pr-text">Hello, <span className="highlight">I'm</span></p>
                <p className="pr-text name">Myil<span className="highlight">vaganan</span></p>
                <p className="pr-text">Web Developer | Software Engineer | Video Editor</p>
            </div>

        </main>
    )
}

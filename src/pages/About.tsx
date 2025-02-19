import {PageTitle} from "../components/Title.tsx";
import {ButtonWrapper} from "../components/ButtonWrapper.tsx";
import {fetchResumeUrl} from "../api";

export const About = () => {

    const handleDownload = async () => {
        const resumeURL = await fetchResumeUrl();
        if (resumeURL) {
            const link = document.createElement('a');
            link.href = resumeURL;
            link.target = "_blank"
            link.download = 'filename.pdf';
            link.click();
        }
    }

    return (
        <div id="about" className="layout-height">
            <div id="about-picture" className="flex-item">
                <div>

                </div>
            </div>
            <div id="about-content" className="flex-item">
                <PageTitle subString={"About Me"} title={"My Resume"}/>
                <p>
                    Web developer & video editor with over <b>6+</b> years of experience in full-stack development,
                    specializing in <strong className="highlight">React, Node.js, and the MERN stack</strong>.
                    Proficient in building scalable, cloud-native
                    applications using AWS, focusing on performance optimization and seamless user experience. With a
                    background in Mechatronics engineering, I bring a unique problem-solving approach to both tech and
                    creative projects.
                </p>
                <p>
                    I'm passionate about coding, continually learning new technologies, and applying them to create
                    efficient, innovative solutions. Alongside my tech skills, I'm a video editing enthusiast,
                    experienced in crafting engaging visuals and storytelling through dynamic content. Combining my
                    technical expertise with a creative flair, I thrive in environments where I can push boundaries and
                    merge art with technology, delivering impactful, high-quality digital experiences. Whether it's
                    developing a complex web app or editing a cinematic video, I aim for excellence and creativity in
                    all my work.
                </p>
                <ButtonWrapper text="Download CV" onClickHandler={handleDownload}/>
            </div>

        </div>
    );
};

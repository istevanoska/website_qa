const {
    SlideRoot,
    useCountUp
} = window.Chrome;

window.TitleSlide = ()=>(

    <SlideRoot hero={true}>

        <div
            className="h-full flex flex-col items-center justify-center text-center px-10"
        >

            <p
                style={{
                    color:"#8EA4FF",
                    letterSpacing:"0.5em",
                    marginBottom:"30px"
                }}
            >
                NETCETERA QA PROJECT
            </p>

            <h1
                className="display"
                style={{
                    fontSize:"clamp(90px,14vw,240px)",
                    lineHeight:"0.9"
                }}
            >
                QA Testing
            </h1>

            <p
                style={{
                    marginTop:"30px",
                    color:"rgba(255,255,255,0.7)",
                    fontSize:"28px"
                }}
            >
                Functional • UI • API • Automation
            </p>

        </div>

    </SlideRoot>

);

window.AboutSlide = ()=>(

    <SlideRoot>

        <div
            className="h-full flex flex-col justify-center px-[10%]"
        >

            <p
                style={{
                    color:"#61E6D8",
                    letterSpacing:"0.4em",
                    marginBottom:"30px"
                }}
            >
                ABOUT QA
            </p>

            <h1
                className="display"
                style={{
                    fontSize:"clamp(60px,7vw,120px)",
                    maxWidth:"1200px"
                }}
            >
                Ensuring software quality through testing and validation.
            </h1>

        </div>

    </SlideRoot>

);

window.TestingSlide = ()=>(

    <SlideRoot>

        <div
            className="h-full flex items-center justify-center gap-10 flex-wrap px-20"
        >

            {[
                "Functional Testing",
                "UI Testing",
                "API Testing",
                "Automation Testing"
            ].map((item,index)=>(

                <div
                    key={index}
                    className="panel"
                    style={{
                        width:"320px",
                        padding:"40px",
                        borderRadius:"30px"
                    }}
                >

                    <h2
                        style={{
                            fontSize:"34px",
                            marginBottom:"20px"
                        }}
                    >
                        {item}
                    </h2>

                    <p
                        style={{
                            color:"rgba(255,255,255,0.6)"
                        }}
                    >
                        Testing application functionality and ensuring reliability.
                    </p>

                </div>

            ))}

        </div>

    </SlideRoot>

);

window.ToolsSlide = ()=>(

    <SlideRoot>

        <div
            className="h-full flex flex-col justify-center px-[10%]"
        >

            <h1
                className="display"
                style={{
                    fontSize:"90px",
                    marginBottom:"70px"
                }}
            >
                Tools We Used
            </h1>

            <div
                className="grid grid-cols-3 gap-10"
            >

                {[
                    "Selenium",
                    "Postman",
                    "GitHub",
                    "Java",
                    "TestNG",
                    "Jira"
                ].map((tool,index)=>(

                    <div
                        key={index}
                        className="panel"
                        style={{
                            padding:"40px",
                            borderRadius:"24px",
                            fontSize:"32px"
                        }}
                    >
                        {tool}
                    </div>

                ))}

            </div>

        </div>

    </SlideRoot>

);

window.BugsSlide = ()=>(

    <SlideRoot hero={true}>

        <div
            className="h-full flex flex-col items-center justify-center text-center"
        >

            <p
                style={{
                    color:"#FF6F84",
                    letterSpacing:"0.4em",
                    marginBottom:"30px"
                }}
            >
                BUG DETECTION
            </p>

            <h1
                className="display"
                style={{
                    fontSize:"180px"
                }}
            >
                35+
            </h1>

            <p
                style={{
                    fontSize:"34px",
                    color:"rgba(255,255,255,0.7)"
                }}
            >
                Bugs Found & Reported
            </p>

        </div>

    </SlideRoot>

);

window.MetricsSlide = ({active})=>{

    const tests = useCountUp(120,{active});
    const coverage = useCountUp(92,{active});

    return(

        <SlideRoot>

            <div
                className="h-full flex items-center justify-center gap-32"
            >

                <div className="text-center">

                    <h1
                        className="display"
                        style={{
                            fontSize:"150px"
                        }}
                    >
                        {tests}+
                    </h1>

                    <p>Test Cases</p>

                </div>

                <div className="text-center">

                    <h1
                        className="display"
                        style={{
                            fontSize:"150px"
                        }}
                    >
                        {coverage}%
                    </h1>

                    <p>Coverage</p>

                </div>

            </div>

        </SlideRoot>

    );

};

window.FinalSlide = ()=>(

    <SlideRoot hero={true}>

        <div
            className="h-full flex flex-col items-center justify-center text-center px-10"
        >

            <h1
                className="display"
                style={{
                    fontSize:"clamp(70px,8vw,170px)",
                    maxWidth:"1300px",
                    background:"linear-gradient(90deg,#fff,#61E6D8)",
                    WebkitBackgroundClip:"text",
                    color:"transparent"
                }}
            >
                Quality is never accidental.
            </h1>

            <p
                style={{
                    marginTop:"30px",
                    fontSize:"28px",
                    color:"rgba(255,255,255,0.7)"
                }}
            >
                Netcetera QA Presentation
            </p>

        </div>

    </SlideRoot>

);

window.SlideMeta = [
    {label:"01 TITLE"},
    {label:"02 ABOUT"},
    {label:"03 TESTING"},
    {label:"04 TOOLS"},
    {label:"05 BUGS"},
    {label:"06 METRICS"},
    {label:"07 FINAL"}
];

window.Slides = [
    window.TitleSlide,
    window.AboutSlide,
    window.TestingSlide,
    window.ToolsSlide,
    window.BugsSlide,
    window.MetricsSlide,
    window.FinalSlide
];
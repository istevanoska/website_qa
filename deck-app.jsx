const {
    useState
} = React;

const Slides = window.Slides;
const SlideMeta = window.SlideMeta;

function Presentation(){

    const [current,setCurrent] = useState(0);

    const CurrentSlide = Slides[current];

    const next = ()=>{

        if(current < Slides.length - 1){
            setCurrent(current + 1);
        }

    };

    const prev = ()=>{

        if(current > 0){
            setCurrent(current - 1);
        }

    };

    React.useEffect(()=>{

        const onKey = (e)=>{

            if(e.key === "ArrowRight"){
                next();
            }

            if(e.key === "ArrowLeft"){
                prev();
            }

        };

        window.addEventListener("keydown",onKey);

        return ()=>window.removeEventListener("keydown",onKey);

    });

    return(

        <div>

            <CurrentSlide active={true}/>

            <div
                style={{
                    position:"fixed",
                    top:"30px",
                    left:"40px",
                    zIndex:100
                }}
            >

                <p
                    style={{
                        color:"#8EA4FF",
                        fontWeight:"600",
                        letterSpacing:"0.3em"
                    }}
                >
                    NETCETERA QA
                </p>

            </div>

            <div
                style={{
                    position:"fixed",
                    top:"30px",
                    right:"40px",
                    zIndex:100,
                    color:"rgba(255,255,255,0.5)"
                }}
            >
                {String(current + 1).padStart(2,"0")}
            </div>

            <div
                style={{
                    position:"fixed",
                    bottom:"30px",
                    right:"40px",
                    display:"flex",
                    gap:"12px",
                    zIndex:100
                }}
            >

                <button
                    className="btn"
                    onClick={prev}
                >
                    ←
                </button>

                <button
                    className="btn"
                    onClick={next}
                >
                    →
                </button>

            </div>

        </div>

    );

}

ReactDOM.createRoot(
    document.getElementById("root")
).render(<Presentation />);
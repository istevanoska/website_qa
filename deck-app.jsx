const {
    useState
} = React;

const Slides = window.Slides;

function App(){

    const [current,setCurrent] = useState(0);

    const CurrentSlide = Slides[current];

    const next = ()=>{

        if(current < Slides.length - 1){
            setCurrent(current + 1);
        }

    }

    const prev = ()=>{

        if(current > 0){
            setCurrent(current - 1);
        }

    }

    React.useEffect(()=>{

        const handle = (e)=>{

            if(e.key === "ArrowRight"){
                next();
            }

            if(e.key === "ArrowLeft"){
                prev();
            }

        }

        window.addEventListener("keydown",handle);

        return ()=>window.removeEventListener("keydown",handle);

    },[current])

    return(

        <div>

            <CurrentSlide active={true}/>

            <div
                style={{
                    position:"fixed",
                    top:"28px",
                    left:"50px",
                    zIndex:9999
                }}
            >

                <p
                    style={{
                        color:"#8EA4FF",
                        letterSpacing:"0.45em",
                        fontWeight:"700",
                        fontSize:"14px"
                    }}
                >
                    {/*FINKI x NETCETERA*/}
                </p>

            </div>

            <div
                style={{
                    position:"fixed",
                    top:"28px",
                    right:"50px",
                    zIndex:9999,
                    color:"rgba(255,255,255,0.5)",
                    fontSize:"20px"
                }}
            >
                {String(current + 1).padStart(2,"0")}
            </div>

            <div
                style={{
                    position:"fixed",
                    bottom:"45px",
                    right:"50px",
                    display:"flex",
                    gap:"14px",
                    zIndex:999999
                }}
            >

                <button
                    className="btn"
                    onClick={prev}
                    style={{
                        width:"70px",
                        height:"70px",
                        borderRadius:"50%",
                        fontSize:"28px"
                    }}
                >
                    ←
                </button>

                <button
                    className="btn"
                    onClick={next}
                    style={{
                        width:"70px",
                        height:"70px",
                        borderRadius:"50%",
                        fontSize:"28px"
                    }}
                >
                    →
                </button>

            </div>

        </div>

    )

}

ReactDOM.createRoot(
    document.getElementById("root")
).render(<App/>)
const {
    useState,
    useEffect
} = React;

const SlideRoot = ({
                       children,
                       hero = false
                   }) => (

    <section
        className="slide-enter"
        style={{
            width:"100vw",
            height:"100vh",
            position:"relative",
            overflow:"hidden"
        }}
    >

        <div className="hero-glow"></div>

        {hero && <div className="grid-bg"></div>}

        <div
            style={{
                position:"relative",
                zIndex:2,
                width:"100%",
                height:"100%"
            }}
        >
            {children}
        </div>

    </section>

);

function useCountUp(target,{active}){

    const [count,setCount] = useState(0);

    useEffect(()=>{

        if(!active) return;

        let current = 0;

        const interval = setInterval(()=>{

            current += Math.ceil(target / 40);

            if(current >= target){

                current = target;
                clearInterval(interval);

            }

            setCount(current);

        },40);

        return ()=>clearInterval(interval);

    },[active,target]);

    return count;

}

window.Chrome = {
    SlideRoot,
    useCountUp
};
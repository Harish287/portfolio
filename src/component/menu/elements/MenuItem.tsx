import { useGlobalState } from "@/contexts/GlobalStateContext";

function MenuItem ({title}:{title:string}){
    
    const { exitMenu } = useGlobalState();

    return <a href={"/#"+title} onClick={exitMenu} className="sm:text-[15px] md:text-[18px] lg:text-[20px]">{title}</a>;
}

export default MenuItem;
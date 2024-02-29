import './button.css';

interface ButtonProps{
    label:string;
    onClick:()=>void;
}

export default function Button(props:ButtonProps){
    return (
        <button className={"btn px-5 mx-14 my-10 font-bold text-2xl"} onClick={props.onClick}>{props.label}</button>
    )
}
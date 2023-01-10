import Header from "./header";
import { ReactNode } from 'react';

interface LayoutProps{
    children: ReactNode;
    title   : string;
}

export default function Layout (props: LayoutProps){
    const{children, title} = props;
    return(
        <div>
            <Header pageTitle={title}/>
            <div>{children}</div>
        </div>
    )
}
import Link from "next/link";
import { Breadcrumb } from 'antd'

export default function Menu () {
    return (    
        <Breadcrumb>
            <Link href="/">
                home
            </Link>
            <Link href="/login">
                login
            </Link>
            <Link href="/register">
                register
            </Link> 
        </Breadcrumb>
    )
}
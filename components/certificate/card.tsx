import Image from "next/image";
import Link from "next/link";

export default function Card(param:any)
{
    let filename = param.filename.substring(0, param.filename.length -4);
    

    return (
        <Link href={'https://ude.my/'+filename} target="_blank">
            <Image src={`/assets/certifcates/${param.filename}`} width={360} height={220} alt=""/>
        </Link>
    )
}
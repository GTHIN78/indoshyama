"use client";

import Link from "next/link";
import { breakingNews } from "@/config/breakingNews";

export default function BreakingTicker(){

return(

<div className="overflow-hidden whitespace-nowrap">

<div className="animate-marquee inline-flex gap-10">

{

breakingNews.map(news=>(

<Link

key={news.id}

href={news.url}

className="text-sm hover:underline"

>

{news.title}

</Link>

))

}

</div>

</div>

);

}

"use client";

import { CalendarDays } from "lucide-react";

import BreakingTicker from "./BreakingTicker";

export default function TopBar(){

const today=new Date().toLocaleDateString("en-IN",{

weekday:"long",

day:"numeric",

month:"long",

year:"numeric"

});

return(

<div className="hidden md:block bg-slate-900 text-white">

<div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-2">

<div className="flex items-center gap-3">

<span className="rounded bg-red-600 px-2 py-1 text-xs font-bold">

LIVE

</span>

<BreakingTicker/>

</div>

<div className="flex items-center gap-2 text-sm">

<CalendarDays size={16}/>

<span>{today}</span>

</div>

</div>

</div>

);

}

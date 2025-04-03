import Link from 'next/link'
import React from 'react'

export default async function Newsarticle( {params, searchParams}:{
    params:Promise<{articlesId:string}>;
    searchParams:{lang?:"en" | "sp" | "fr"};
}) {
    const {articlesId} = await params;
    const {lang ="en"} = await searchParams;
    

    return (
        <>
            <h1>News article {articlesId}</h1>
            <p>Reading Language {lang}</p>

            <div className="">
                <Link href={`/articles/${articlesId}?lang=en`}>Read in English</Link>
                <Link href={`/articles/${articlesId}?lang=fr`}>Read in French</Link>
                <Link href={`/articles/${articlesId}?lang=sp`}>Read in Spanish</Link>
                
            </div>
        </>
    )
}

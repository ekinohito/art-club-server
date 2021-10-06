import React from 'react'
import Link from "next/link";


export default function OutlineGradientButton({children, href}) {
    return <Link href={href}>
        <div className="outline-gradient-button m-auto">
            <div>
                <div className="bg-white gradient-text text-center w-100"
                     style={{fontSize: "24px", lineHeight: "40px", fontWeight: 500}}>
                    {children}
                </div>
            </div>
        </div>
    </Link>
}
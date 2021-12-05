import React from 'react'
import "./DashHeader.css"

export default function DashHeader({icon,title,rightComponent})  {
    return (
           <div className="header">
                <section className="tab-title">
                    {icon }
                <   p className="icon">{title}</p>
                </section>
                <span>
                    {rightComponent }
                </span>
            </div>
    )
}

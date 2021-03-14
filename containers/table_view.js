import React from 'react';
import MainColoredSection from "./main_colored_section";

export default function TableView({children}) {
    if (!children) return <></>
    const keys = Object.keys(children[0])
    return (
        <div className="mb-5">
            <table>
                <tr>
                    {keys.map(value => <th>{value}</th>)}
                </tr>
                {
                    children.map(child => <tr>
                        {keys.map(value => <td>
                            {child[value]}
                        </td>)}
                    </tr>)
                }
            </table>
        </div>

    )
}

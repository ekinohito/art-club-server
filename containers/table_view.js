import React from 'react';
import MainColoredSection from "./main_colored_section";

const truncateString = (str, symbols) => (str.length < (symbols + 3))?str:(str.slice(0, symbols) + '...')


export default function TableView({children, symbols=30}) {
    if (!children) return <></>
    const keys = Object.keys(children[0])
    return (
        <div className="mb-5">
            <table>
                <tr>
                    {keys.map(value => <th className="px-2">{value}</th>)}
                </tr>
                {
                    children.map(child => <tr>
                        {keys.map(value => <td className="px-2" title={child[value]}>
                            {truncateString(child[value].toString(), symbols)}
                        </td>)}
                    </tr>)
                }
            </table>
        </div>
    )
}

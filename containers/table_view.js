import React from 'react';
import MainColoredSection from "./main_colored_section";

const truncateString = (str, symbols) => (str.length < (symbols + 3))?str:(str.slice(0, symbols) + '...')


export default function TableView({children, api, mutate, symbols=30}) {
    if (!children) return <></>
    const keys = Object.keys(children[0])
    const deleteRow = async (id) => {
        let response = await fetch(api, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'json/application;charset=utf-8'
            },
            body: JSON.stringify({id})
        });
        await mutate()
    }
    return (
        <div className="mb-5">
            <table>
                <tr>
                    {keys.map((value, index) => <th className="px-2" key={index}>{value}</th>)}
                </tr>
                {
                    children.map((child, index) => <tr key={index}>
                        {keys.map((value, index) => <td className="px-2" title={child[value]} key={index}>
                            {truncateString(child[value].toString(), symbols)}
                        </td>)}
                        <td onClick={async () => await deleteRow(child.id)}>DELETE</td>
                    </tr>)
                }
            </table>
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import './Table.css'
import { SortBy } from '../Sort/Sort'
import { sanitizeDataForDate } from '../../utility/transformer'

const Table = ({ data }) => {
    if (data === null || data === undefined || data.length === 0) return null

    const [tableData, setTableData] = useState(data)
    const [sortCriteria, setSortCriteria] = useState("")

    const deleteRecord = (idx) => {
        const newRecords = tableData.filter((td, _idx) => _idx !== idx);
        setTableData([...newRecords])
    }

    
    useEffect(() => {
        if(!sortCriteria) return

        const sanitisedData = sanitizeDataForDate([...tableData])
        
        switch (sortCriteria) {
            case 'date-asc': {
                sanitisedData.sort((a, b) => a.sortByDate - b.sortByDate)
                setTableData([...sanitisedData])
                return
            }
            case 'date-dsc': {
                sanitisedData.sort((a, b) => b.sortByDate - a.sortByDate)
                setTableData([...sanitisedData])
                return
            }
            default : {
                return
            }
        }
    }, [sortCriteria])

    return tableData && tableData.length > 0 ?
        <>
            <SortBy sortCriteria={sortCriteria} setSortCriteria={setSortCriteria} />
            <hr />
            <table className='table'>
                <thead className='thead'>
                    <tr>
                        <td>{"#"}</td>
                        <td>{"Artwork Title"}</td>
                        <td>{"Artist Name"}</td>
                        <td>{"Display Date"}</td>
                        <td>{"Action"}</td>
                    </tr>
                </thead>
                <tbody>
                    {(tableData || []).map(({ id, title, artist_titles, date_display }, idx) => (
                        <tr key={id}>
                            <td>{idx + 1}</td>
                            <td>{title}</td>
                            <td>{artist_titles[0]}</td>
                            <td>{date_display}</td>
                            <td>
                                <div
                                    className={'delete-btn'}
                                    onClick={() => deleteRecord(idx)}
                                >
                                    <p className='delete-text'>{"Delete"}</p>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </> : <div className='empty-table'><p>{"Table does not contain any data to show"}</p></div>
}

export default Table
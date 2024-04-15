import React from 'react'

export const SortBy = ({sortCriteria, setSortCriteria}) => {
  return (
    <div>
        <label>
            Sort By :
            <select
                name="sortCriteria"
                defaultValue={sortCriteria}
                onChange={e => setSortCriteria(e.target.value)}
            >
                <option value="">--</option>
                <option value="date-asc">Date Ascending</option>
                <option value="date-dsc">Date Descending</option>
            </select>
        </label>
    </div>
  )
}
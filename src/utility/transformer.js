const MAX_LENGTH = 4

export const sanitizeDataForDate = (data) => {
    const transformedTableData = (data || []).map(td => {
        const reconstructedDate = parseInt(td.date_display.substring(0, MAX_LENGTH) || '')
        return {
            ...td,
            sortByDate: (Number.isInteger(reconstructedDate) && Number.isInteger(reconstructedDate) > 0) ?
                reconstructedDate : Number.MAX_SAFE_INTEGER
        }
    })
    return transformedTableData
}
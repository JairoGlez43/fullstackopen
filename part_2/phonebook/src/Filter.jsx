const Filter = ({filter, onFilterChange}) => {
    
   return (
    <div>
        filter shown: <input value={filter} onChange={onFilterChange}></input>
    </div>
    
)
}
export default Filter;
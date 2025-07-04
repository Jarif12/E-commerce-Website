export default function ProductFilter({ sortOrder, setSortOrder }) {
    return (
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="">Sort by</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: Hight → Low</option>
        </select>
    );
}
import SearchResultItem from './SearchResultItem'

export default function SearchResults(props) {
  const items = props.items.map(i => <SearchResultItem key={i.id} artist={i} />)
  return (
    <ul>
      {items}
    </ul>
  )
}
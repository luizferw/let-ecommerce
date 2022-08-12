type Options = {
  title: String,
  options: String[]
}

type Props = {
  options: Options[]
} 

const FilterOption:React.FC<Props> = (props: Props) => {
  return (
    <div className='filter-option'>
      { props.options.map((option: Options, index) => (
        <div key={index}>
        <h4>{option.title}</h4>
        <ul>
          { option.options.map((option, index) => (
            <li key={index}>{option}</li>
            )
          )}
        </ul>
        </div>
      ))}
    </div>
  )
}

export default FilterOption
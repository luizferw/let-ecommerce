import './button-styles.scss'

const SummaryButton: React.FC<{text: string}> = ({text}: { text: string }) => {
  return (
    <button className='button'>{text}</button>
  )
}

export default SummaryButton
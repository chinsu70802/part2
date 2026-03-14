const Content = ({parts}) => {
  return (
    <>
    {parts.map((part) => (
      <p key={part.id}>{part.name}</p>
    ))}
    </>
  )
}

export default Content
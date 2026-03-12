import { useState } from 'react'

const Header = (prop) => {
  return (
    <h2>{prop.text}</h2>
  )
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <td>{text} {value}</td>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good - bad) / all || 0
  const positive = (good / all) * 100 || 0

  if (all === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <div>
      <table>
        <tbody>
        <tr><StatisticLine text='good' value={good} /></tr>
        <tr><StatisticLine text='neutral' value={neutral} /></tr>
        <tr><StatisticLine text='bad' value={bad} /></tr>
        <tr><StatisticLine text='all' value={all} /></tr>
        <tr><StatisticLine text='average' value={average} /></tr>
        <tr><StatisticLine text='positive' value={`${positive} %`} /></tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header text='give feedback' />
      <Button onClick={handleGood} text='good' />
      <Button onClick={handleNeutral} text='neutral' />
      <Button onClick={handleBad} text='bad' />
      <Header text='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
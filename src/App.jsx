const Header = function (props) {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = function (props) {
  return (
    <>
      <p>
        {props.name} {props.exercises}
      </p>
    </>
  )
}

const Content = function (props) {
  return (
    <>
      <Part name = {props.items[0]["name"]} exercises = {props.items[0]["exercises"]}/>
      <Part name = {props.items[1]["name"]} exercises = {props.items[1]["exercises"]}/>
      <Part name = {props.items[2]["name"]} exercises = {props.items[2]["exercises"]}/>
    </>
    
  )
}

const Total = function (props) {
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
  )
}

const App = function () {
  const course = {
    name: 'Half Stack application development',
    parts : [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };
  return (
    <div>
      <Header course = {course["name"]} />
      <Content items = {course["parts"]} />
      <Total total = {course["parts"][0].exercises + course["parts"][1].exercises + course["parts"][2].exercises} />
    </div>
  )
}

export {App}
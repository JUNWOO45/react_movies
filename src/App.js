import React from 'react';
import PropTypes, { number } from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: 'apple',
    rating: 3.5
  },
  {
    id: 2,
    name: 'melon',
    rating: 4.2
  },
  {
    id: 3,
    name: 'strawberry',
    rating: 2.8
  },
  {
    id: 4,
    name: 'orange',
    rating: 5
  },
];

function Food({ name, rating }) {
  return (
    <div>{ name } { rating }/5.0</div>
  )
}

Food.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function renderFood({ id, name, rating }) {
  return <Food name={name} key={id} id={id} rating={rating} />
}

function App() {
  return (
    <div className="App">
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;

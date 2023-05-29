import React, { useEffect, useState } from 'react';
import Heading from '../Heading/Heading';
import Container from '../Shared/Container/Container';
import Loader from '../Shared/Loader';
import Card from './Card';

const Rooms = () => {
    const [rooms, setRooms] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('./rooms.json')
          .then(res => res.json())
          .then(data => {
            if (category) {
              const filtered = data.filter(room => room.category === category)
              setRooms(filtered)
            } else {
              setRooms(data)
            }
    
            setLoading(false)
          })
          .catch(err => console.log(err))
      }, [])

      if (loading) {
        return <Loader />
      }
    return (
        <Container>
        {rooms && rooms.length > 0 ? (
          <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
            {rooms.map((room, index) => (
              <Card key={index} room={room} />
            ))}
          </div>
        ) : (
          <div className='pt-12'>
            <Heading
              title='No Rooms Available In This Category!'
              subtitle='Please Select Other Categories.'
              center={true}
            />
          </div>
        )}
      </Container>
    );
};

export default Rooms;
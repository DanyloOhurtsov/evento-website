'use client'

type EventFormProps ={
    userId: string,
    type: 'Create' | 'Update'
}

const EventForm = ({userId, type}: EventFormProps) => {
  return (
    <div>
Event from {type}
    </div>
  )
}

export default EventForm
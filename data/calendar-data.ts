export const calendarData = {
  month: "May",
  year: 2025,
  days: [
    {
      dayOfWeek: "Wed",
      date: 29,
      appointments: [
        { time: "09:00", available: true },
        { time: "10:00", available: false }
      ]
    },

    {
      dayOfWeek: "Mon",
      date: 25,
      appointments: [
        { time: "10:00", available: true },
        { time: "11:00", available: true },
        { time: "12:00", available: true },
      ],
    },
    {
      dayOfWeek: "Tues",
      date: 26,
      appointments: [
        { time: "08:00", available: true },
        { time: "09:00", available: true },
        { time: "10:00", available: true },
      ],
    },
    {
      dayOfWeek: "Wed",
      date: 27,
      appointments: [
        { time: "12:00", available: true },
        { time: "13:00", available: true },
      ],
    },
    {
      dayOfWeek: "Thurs",
      date: 28,
      appointments: [
        { time: "10:00", available: true },
        { time: "11:00", available: true },
      ],
    },
    {
      dayOfWeek: "Fri",
      date: 29,
      appointments: [
        { time: "14:00", available: true },
        { time: "16:00", available: true },
      ],
    },
    {
      dayOfWeek: "Sat",
      date: 30,
      appointments: [
        { time: "12:00", available: true },
        { time: "15:00", available: true },
      ],
    },
   
  ],
  featuredAppointments: [
    {
      id: "dentist-1",
      type: "Dentist",
      time: "09:00 - 10:00",
      doctor: "Dr. Vaishnavi Kumar",
      icon: "🦷",
      color: "bg-indigo-100"
    },

   
    {
      id: "physio",
      type: "Physiotherapy Appointment",
      time: "11:00-12:00",
      doctor: "Aniket Jagtap",
      icon: "activity",
      color: "bg-indigo-400",
    },
  ],
}

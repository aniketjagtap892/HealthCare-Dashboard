// components/activity-feed.tsx
interface ActivityFeedProps {
  activityData: {
    totalAppointments: number
    weeklyData: {
      day: string
      appointments: number[]
    }[]
  }
}

export default function ActivityFeed({ activityData }: ActivityFeedProps) {
  const maxAppointments = Math.max(
    ...activityData.weeklyData.flatMap((day) => day.appointments),
    1
  )

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Activity</h2>
        <div className="text-sm text-gray-500">{activityData.totalAppointments} appointments this week</div>
      </div>

      <div className="flex items-end h-40 space-x-4">
        {activityData.weeklyData.map((day, dayIndex) => (
          <div key={dayIndex} className="flex flex-col items-center flex-1">
            <div className="flex flex-col justify-end items-center h-full space-y-1">
              {day.appointments.map((count, index) => {
                const height = (count / maxAppointments) * 100
                const colors = ["bg-cyan-400", "bg-indigo-500", "bg-cyan-300", "bg-indigo-400"]
                return (
                  <div
                    key={index}
                    className={`${colors[index % colors.length]} w-4 rounded-t-lg transition-all duration-300`}
                    style={{ height: `${height}%` }}
                  />
                )
              })}
            </div>
            <div className="text-xs text-gray-500 mt-2">{day.day.slice(0, 3)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

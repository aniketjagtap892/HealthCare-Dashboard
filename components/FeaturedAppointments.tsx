interface FeaturedAppointment {
  id: string;
  type: string;
  time: string;
  doctor: string;
  icon: string; // use this to show an icon if needed
  color: string;
}

interface Props {
  appointments: FeaturedAppointment[];
}

export default function FeaturedAppointments({ appointments }: Props) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md mt-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Featured Appointments</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {appointments.map((appt) => (
          <div key={appt.id} className="flex items-start p-4 rounded-lg shadow-sm border border-gray-100 bg-gray-50">
            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${appt.color} text-white mr-4`}>
              {/* Replace this with an icon library if needed */}
              <span className="text-xl">{appt.icon === "tooth" ? "🦷" : "💪"}</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-700">{appt.type}</div>
              <div className="text-xs text-gray-500">{appt.time}</div>
              <div className="text-xs text-gray-400">Dr. {appt.doctor}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

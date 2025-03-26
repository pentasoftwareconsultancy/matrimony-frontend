import React from 'react';
import Dropdown from '../dropdown/Dropdown';


const Rifinesearch = () => {
  const data = [
    { label: 'Verification Status', options: ['Blue Tick Profiles', 'All'] },
    { label: 'Photo Settings', options: ['Visible to All', 'All'] },
    { label: 'Recently Joined', options: ['All', 'Within a Day', 'Within a Week', 'Within a Month'] },
    { label: 'Annual Income', options: ['INR 2 Lakh to 3 Lakh', 'INR 4 Lakh to 5 Lakh'] },
    { label: 'Mother Tongue', options: ['Marathi', 'Hindi'] },
    { label: 'Working With', options: ['All', 'Private Company', 'Government'] },
    { 
      label: 'Profession Area',
      options: [
        'Administration & HR',
        'Advertising, Media & Entertainment',
        'Agriculture',
        'Airline & Aviation',
        'BPO, KPO, & Customer Support',
        'Beauty, Fashion & Jewellery Designers',
        'Civil Services / Law Enforcement',
        'Corporate Professionals',
        'Defense',
        'Education & Training',
        'Engineering',
        'IT & Software Engineering',
        'Legal',
        'Medical & Healthcare',
        'Non Working',
        'Others',
        'Sales & Marketing'
      ]
    },
    { label: 'Profile Created By', options: ['Self', 'Parent / Guardian', 'Sibling', 'Friend'] },
    { label: 'Eating Habits', options: ['Non-Veg', 'Veg', 'Eggetarian', 'Vegan', 'Jain'] },
    { label: 'Education Level', options: ['All', 'Bachelor', 'Master', 'Diploma', 'Honours', 'High School'] },
    { label: 'Education Area', options: ['Arts / Design', 'Engineering', 'Finance / Commerce', 'Management', 'Medicine'] },
  ];

  return (
    <div>
      {data.map((item, index) => (
   <Dropdown key={index} label={item.label} options={item.options} />
      ))}
    </div>
  );
};

export default Rifinesearch;

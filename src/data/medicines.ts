export interface Medicine {
  id: string;
  name: string;
  description: string;
  badge: string;
  price: number;
  image: string;
}

export interface Device {
  id: string;
  name: string;
  description: string;
  badge: string;
  price: number;
  image: string;
}

export const medicines: Medicine[] = [
  {
    id: '1',
    name: 'Paracetamol 650mg',
    description: 'Safe for headaches and fever',
    badge: 'Doctor Trusted',
    price: 4.99,
    image: ''
  },
  {
    id: '2',
    name: 'Metformin 500mg',
    description: 'Helps control blood sugar',
    badge: 'Most Ordered',
    price: 5.99,
    image: ''
  
  },
  {
    id: '3',
    name: 'Amlodipine 5mg',
    description: 'Supports healthy blood pressure',
    badge: 'Heart Health',
    price: 4.80,
    image: '💊'
  },
  {
    id: '4',
    name: 'Atorvastatin 10mg',
    description: 'Maintains cholesterol',
    badge: 'Cardio Protection',
    price: 6.40,
    image: '💊'
  },
  {
    id: '5',
    name: 'Levothyroxine 50mcg',
    description: 'Thyroid hormone support',
    badge: 'Daily Essential',
    price: 7.10,
    image: '💊'
  },
  {
    id: '6',
    name: 'Pantoprazole 40mg',
    description: 'Prevents acidity',
    badge: 'Stomach Care',
    price: 5.25,
    image: '💊'
  },
  {
    id: '7',
    name: 'Telmisartan 40mg',
    description: 'Long-lasting BP control',
    badge: 'Cardio Safe',
    price: 8.20,
    image: '💊'
  },
  {
    id: '8',
    name: 'Low Dose Aspirin',
    description: 'Reduces heart risk',
    badge: 'Clinically Recommended',
    price: 3.75,
    image: '💊'
  },
  {
    id: '9',
    name: 'Calcium + Magnesium',
    description: 'Supports bone strength',
    badge: 'Senior Favorite',
    price: 9.50,
    image: '💊'
  },
  {
    id: '10',
    name: 'Vitamin B12 Capsules',
    description: 'Boosts nerve health',
    badge: 'Top Rated',
    price: 10.99,
    image: '💊'
  }
];

export const devices: Device[] = [
  {
    id: 'd1',
    name: 'Smart Bluetooth BP Monitor',
    description: 'Syncs readings to mobile',
    badge: 'Smart Device',
    price: 49.99,
    image: '🩺'
  },
  {
    id: 'd2',
    name: 'Automatic Pill Dispenser',
    description: 'Never miss a dose',
    badge: 'AI Assisted',
    price: 79.99,
    image: '⏰'
  },
  {
    id: 'd3',
    name: 'Continuous Glucose Monitor',
    description: 'Real-time sugar tracking',
    badge: 'Advanced Care',
    price: 64.99,
    image: '📊'
  },
  {
    id: 'd4',
    name: 'Health Smartwatch',
    description: 'Tracks heart rate & sleep',
    badge: 'Premium Choice',
    price: 129.99,
    image: '⌚'
  },
  {
    id: 'd5',
    name: 'Fall Detection Sensor',
    description: 'Alerts caregivers instantly',
    badge: 'Caregiver Pick',
    price: 59.99,
    image: '🚨'
  },
];

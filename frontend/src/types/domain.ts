/**
 * Interfaces preparadas para la Fase 2: Sistema de Gestión Integral de Vulpiare.
 * Entidades preparadas para la integración con Backend y Base de Datos de Alumnos.
 */

export type UserRole = 'ADMIN' | 'INSTRUCTOR' | 'STUDENT';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
  createdAt: string;
}

export interface StudentEmergencyContact {
  name: string;
  phone: string;
  relationship: string;
}

export interface Student extends User {
  phone: string;
  emergencyContact: StudentEmergencyContact;
  medicalNotes?: string;
  activeClassIds: string[];
}

export interface ClassSchedule {
  dayOfWeek: number; // 0 (Domingo) - 6 (Sábado)
  startTime: string; // Formato HH:mm (ej. "17:00")
  endTime: string;   // Formato HH:mm (ej. "18:30")
}

export interface StudentClass {
  id: string;
  title: string;
  category: 'INFANTIL' | 'ADULTOS' | 'ESPECIAL';
  minAge: number;
  maxAge?: number;
  instructorId: string;
  schedules: ClassSchedule[];
  capacity: number;
  enrolledCount: number;
  monthlyFee: number;
}

export type PaymentStatus = 'PENDING' | 'PAID' | 'OVERDUE';
export type PaymentMethod = 'CASH' | 'TRANSFER' | 'MERCADOPAGO';

export interface Payment {
  id: string;
  studentId: string;
  classId: string;
  amount: number;
  dueDate: string;
  paidAt?: string;
  status: PaymentStatus;
  method?: PaymentMethod;
}

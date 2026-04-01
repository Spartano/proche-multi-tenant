import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SessionProvider } from './context/SessionContext';
import { Header } from './components/Header';
import { SessionSelector } from './components/SessionSelector';
import { Navigation } from './components/Navigation';
// TODO (Task 6): Import ProtectedRoute and wrap each route that needs guarding
// import { ProtectedRoute } from './components/ProtectedRoute';
import { Dashboard } from './pages/Dashboard';
import { Cases } from './pages/Cases';
import { Reports } from './pages/Reports';
import { Rules } from './pages/Rules';
import { AdminSettings } from './pages/AdminSettings';
import { AuditLogs } from './pages/AuditLogs';
import { AccessDenied } from './pages/AccessDenied';

export default function App() {
  return (
    <SessionProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-canvas">
          <Header />
          <SessionSelector />

          <div className="flex">
            <Navigation />

            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />

                {/* TODO (Task 6): Wrap each route below with <ProtectedRoute feature="...">
                    so that unauthorized users are redirected to /access-denied.
                    The feature keys are: dashboard, cases, reports, rules,
                    admin-settings, audit-logs */}

                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/cases" element={<Cases />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/rules" element={<Rules />} />
                <Route path="/admin" element={<AdminSettings />} />
                <Route path="/audit" element={<AuditLogs />} />

                <Route path="/access-denied" element={<AccessDenied />} />
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </SessionProvider>
  );
}

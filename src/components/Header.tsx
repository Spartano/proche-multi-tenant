import { ExerciseInfo } from './ExerciseInfo';

export function Header() {
  // TODO: Use the useBranding hook (from hooks/useBranding.ts) to get
  // the current tenant's logoUrl and productName.
  // Then render the logo as a dynamic <img> element instead of static text.

  return (
    <header className="bg-canvas border-b-2 border-contrast-low p-fluid-md">
      <div className="flex items-center justify-between">
        <span className="text-primary font-bold text-xl">Product Name</span>
        <div className="max-w-md">
          <ExerciseInfo title="White-Label Branding (Task 3 & 4)">
            <p>
              This static text should become a dynamic <code>&lt;img&gt;</code> driven by{' '}
              <strong>useBranding</strong>. The browser favicon and page title should also
              change when tenants switch. Try switching tenants — nothing changes yet.
            </p>
          </ExerciseInfo>
        </div>
      </div>
    </header>
  );
}
